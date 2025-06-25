import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import AdminHeader from "../../components/admin/AdminHeader";
import Container from "../../components/utilities/Container";
import Heading from "../../components/utilities/Heading";
import InputField from "../../components/admin/InputFiels";
import Section from "../../components/utilities/Section";
import axiosAdmin from "../../middleware/axiosAdmin";
import withAuth from "../../middleware/withAuth";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const ADMIN_URL = import.meta.env.VITE_ADMIN_URL;
  const API_URL = import.meta.env.VITE_API_URL;

  const [editorValue, setEditorValue] = useState("");
  const [originalEditorValue, setOriginalEditorValue] = useState("");
  const [images, setImages] = useState({});
  const [preview, setPreview] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = [
    {
      label: "Title",
      name: "heading",
      placeholder: "Enter Title",
      col: "md:col-span-6 lg:col-span-4",
    },
    {
      label: "Short Description",
      name: "short_description",
      placeholder: "Enter Short Description",
      col: "md:col-span-6 lg:col-span-4",
    },
    {
      label: "Date",
      name: "date_at",
      placeholder: "Select Date",
      col: "md:col-span-6 lg:col-span-4",
      type: "date",
    },
    {
      label: "Mobile Image",
      name: "mb_image",
      col: "md:col-span-6 lg:col-span-3",
      type: "image",
    },
    {
      label: "Desktop Image",
      name: "feature_image",
      col: "md:col-span-6 lg:col-span-3",
      type: "image",
    },
    {
      label: "Alt Tag",
      name: "alt",
      placeholder: "Enter Alt",
      col: "md:col-span-3 lg:col-span-3",
    },
    {
      label: "Slug",
      name: "slug",
      placeholder: "Enter Slug",
      col: "md:col-span-3 lg:col-span-3",
    },
    {
      label: "Blog Content",
      name: "description",
      col: "md:col-span-12",
      type: "editor",
    },
    {
      label: "Meta Title",
      name: "meta_title",
      placeholder: "Enter Meta Title",
      col: "md:col-span-6 lg:col-span-4",
    },
    {
      label: "Meta Keyword",
      name: "meta_keywords",
      placeholder: "Enter Meta Keyword",
      col: "md:col-span-6 lg:col-span-4",
    },
    {
      label: "Meta Description",
      name: "meta_description",
      placeholder: "Enter Meta Description",
      col: "md:col-span-6 lg:col-span-4",
    },
  ];

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await axiosAdmin.get(`${ADMIN_URL}blog/${id}`);
      const data = res.data.data;

      reset(data);
      setEditorValue(data.description);
      setOriginalEditorValue(data.description); // 👈 store original for comparison
      setPreview({
        mb_image: API_URL + data.mb_image,
        feature_image: API_URL + data.feature_image,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to load blog data");
    }
  };

  const handleImageChange = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({ ...prev, [name]: file }));
      setPreview((prev) => ({ ...prev, [name]: URL.createObjectURL(file) }));
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      for (const key in data) {
        if (key !== "description") {
          formData.append(key, data[key]);
        }
      }

      for (const key in images) {
        formData.append(key, images[key]);
      }

      const finalEditorContent =
        editorValue.trim() === "" ? originalEditorValue : editorValue;

      formData.append("description", finalEditorContent);


     
      await axiosAdmin.post(`${ADMIN_URL}blog/${id}/update`, formData);

      toast.success("Blog updated successfully!");
      navigate(`/admin?page=${page}`);
    } catch (error) {
      console.error("Full error:", error);

      const resData = error.response?.data;

      if (resData?.messages && typeof resData.messages === "object") {
        Object.entries(resData.messages).forEach(([field, message]) => {
          toast.error(message);
        });
      } else if (resData?.error) {
        toast.error(resData.error);
      } else {
        toast.error("Something went wrong while updating!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AdminHeader />
      <Section className="!py-[30px]">
        <Container>
          <div className="shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--text-primary)]">
              <Heading>Edit Blog</Heading>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-white p-6 rounded-lg shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {fields.map((field) => (
                  <InputField
                    editPage={true}
                    key={field.name}
                    {...field}
                    register={register}
                    error={errors[field.name]}
                    value={field.type === "editor" ? editorValue : undefined}
                    onChange={
                      field.type === "image"
                        ? (e) => handleImageChange(e, field.name)
                        : field.type === "editor"
                        ? setEditorValue
                        : undefined
                    }
                    preview={preview[field.name]}
                  />
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-fit flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--text-primary)] hover:bg-[var(--text-primary-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text-primary)] transition-colors duration-200 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>

            <Toaster position="top-right" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default withAuth(EditBlog);
