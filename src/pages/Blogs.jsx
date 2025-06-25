import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Section from "../components/utilities/Section";
import Container from "../components/utilities/Container";
import Pagination from "../components/utilities/Pagination";
import SearchInput from "../components/utilities/SearchInput";
import LatestBlog from "../components/utilities/LatestBlog";
import BlogCard from "../components/utilities/BlogCard";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 4;
  const API_URL = import.meta.env.VITE_API_URL

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const endpoint = searchTerm
        ? `${API_URL}blogsearch?search=${searchTerm}`
        : `${API_URL}blog?page=${page}&limit=${limit}`;
      const res = await axios.get(endpoint);

      setBlogs(res.data?.data || []);
      setTotalPages(res.data?.pagination?.pages || 1);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchBlogs();
    }, 300); // debounce input

    return () => clearTimeout(delayDebounce);
  }, [page, searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage !== page) setPage(newPage);
  };



  return (
    <>
      <Helmet>
        <title>Liv Interio - Interior Design Excellence</title>
      </Helmet>
      <Hero 
        imageSrc="/assets/images/blogs/desktop/banner.webp"
        mobileSrc="/assets/images/blogs/mobile/banner.webp"
        title="Blogs" 
      />
      <Section
        id="Blogs"
        className="overflow-hidden relative before:absolute before:bottom-0 before:left-[7.5%] before:w-[85%] before:h-[0.5px] before:bg-[var(--text-primary)]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px]">
            <div className="lg:col-span-8">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-[40px]">
                    {blogs.length > 0 ? (
                      blogs.map((blog, index) => (
                        <div
                          key={index}
                          className={`md:col-span-6 ${
                            index === 0 || index === 1 ? "mt-0" : "mt-[30px]"
                          }`}
                        >
                          <BlogCard data={blog} />
                        </div>
                      ))
                    ) : (
                      <p className="col-span-12 text-center">No blogs found.</p>
                    )}
                  </div>
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </>
              )}
            </div>

            <div className="lg:col-span-4">
              <SearchInput
                className="mb-[30px]"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1); // Reset to page 1 on new search
                }}
                placeholder="Search by heading..."
              />
              <LatestBlog />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Blogs;
