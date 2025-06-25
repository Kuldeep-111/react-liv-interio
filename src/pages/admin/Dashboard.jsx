import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import AdminHeader from "../../components/admin/AdminHeader";
import Container from "../../components/utilities/Container";
import Section from "../../components/utilities/Section";
import Heading from "../../components/utilities/Heading";
import CustomTable from "../../components/utilities/admin/CustomTable";
import TableHead from "../../components/utilities/admin/TableHead";
import TableRow from "../../components/utilities/admin/TableRow";
import TableHeader from "../../components/utilities/admin/TableHeader";
import TableBody from "../../components/utilities/admin/TableBody";
import TableData from "../../components/utilities/admin/TableData";
import Pagination from "../../components/utilities/Pagination";
import axiosAdmin from "../../middleware/axiosAdmin";
import withAuth from "../../middleware/withAuth";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const limit = 5;

  const Thead = ["Title", "Feature Image", "Mobile Image", "Action"];
  const ADMIN_URL = import.meta.env.VITE_ADMIN_URL;
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axiosAdmin.get(
        `${ADMIN_URL}blog?page=${page}&limit=${limit}`
      );
      const data = res.data;
      setBlogs(data.data || []);
      setCurrentPage(data.pagination?.page || 1);
      setTotalPages(data.pagination?.pages || 1);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await axiosAdmin.delete(`${ADMIN_URL}blog/${id}/delete`);
      if (res.data.status) {
        toast.success("Blog deleted successfully");
        fetchBlogs(currentPage);
      } else {
        toast.error("Failed to delete blog");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const openLightbox = (src) => {
    setLightboxImage(src);
    setLightboxOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page });
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  return (
    <>
      <AdminHeader />
      <Section className="!py-[30px]">
        <Container>
          <div className="shadow-sm">
            <div className="flex items-center justify-between px-[30px] py-[20px] border-b border-[var(--text-primary)]">
              <Heading>Blogs</Heading>
              <Link
                to="/admin/add-blog"
                className="bg-[var(--text-primary)] text-white px-[30px] py-[10px] rounded-[5px] hover:bg-[var(--text-primary-hover)]"
              >
                Add Blog
              </Link>
            </div>

            <div className="bg-white p-[40px]">
              <h4>All Blogs</h4>

              {loading ? (
                <p className="text-center py-10">Loading blogs...</p>
              ) : (
                <div className="mt-[30px] overflow-auto">
                  <CustomTable>
                    <TableHead>
                      <TableRow>
                        {Thead.map((item, index) => (
                          <TableHeader key={index}>{item}</TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {blogs.length > 0 ? (
                        blogs.map((blog) => (
                          <TableRow key={blog._id}>
                            <TableData
                              heading={
                                blog.heading.length > 110
                                  ? blog.heading
                                  : undefined
                              }
                            >
                              {blog.heading.length > 110
                                ? `${blog.heading.slice(0, 110)}...`
                                : blog.heading}
                            </TableData>
                            <TableData>
                              <img
                                src={`${API_URL}${blog.feature_image}`}
                                alt="feature"
                                className="w-[40px] h-[40px] rounded object-cover mx-auto cursor-pointer"
                                onClick={() =>
                                  openLightbox(
                                    `${API_URL}${blog.feature_image}`
                                  )
                                }
                              />
                            </TableData>
                            <TableData>
                              <img
                                src={`${API_URL}${blog.mb_image}`}
                                alt="mobile"
                                className="w-[40px] h-[40px] rounded object-cover mx-auto cursor-pointer"
                                onClick={() =>
                                  openLightbox(`${API_URL}${blog.mb_image}`)
                                }
                              />
                            </TableData>
                            <TableData>
                              <div className="w-full flex items-center justify-center gap-[10px]">
                                <Link
                                  to={`/admin/edit-blog/${blog.id}?page=${currentPage}`}
                                  className="hover:bg-[#ecebeb] inline-block  p-[10px] rounded-[5px]"
                                >
                                  <img
                                    src="/assets/icons/edit.webp"
                                    alt="Edit icon"
                                    className="w-[20px] h-[20px]"
                                  />
                                </Link>
                                <button
                                  onClick={() => handleDelete(blog.id)}
                                  className="hover:bg-[#ecebeb] p-[10px] rounded-[5px]"
                                >
                                  <img
                                    src="/assets/icons/delete.webp"
                                    alt="Delete Icon "
                                    className="w-[20px] h-[20px]"
                                  />
                                </button>
                              </div>
                            </TableData>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableData
                            colSpan={Thead.length}
                            className="text-center"
                          >
                            No blogs found.
                          </TableData>
                        </TableRow>
                      )}
                    </TableBody>
                  </CustomTable>

                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: lightboxImage }]}
        plugins={[Zoom]}
        carousel={{ finite: true }}
      />
    </>
  );
};

export default withAuth(Dashboard);
