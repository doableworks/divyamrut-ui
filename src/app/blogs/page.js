import AllPosts from "@/components/blogs/AllPosts";
import MainBanner from "@/components/common/MainBanner";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchBlogPosts = async () => {
  try {
    const url = `${apiUrl}/blogs/blogs?page=1&page_size=10`;
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return {
      loading: false,
      error: false,
      page: 1,
      pageSize: 10,
      results: data.results,
    };
  } catch (err) {
    console.log("Unable to fetch Blogs", err);
    return null;
  }
};

const Blogs = async () => {
  const fetchedBlogs = await fetchBlogPosts();

  if (!fetchedBlogs) {
    notFound();
  }

  return (
    <div>
      <MainBanner
        heading="Blogs & News"
        subHeading="Your Daily Dose of Knowledge"
      />
      <section className="common_page_width">
        <div className="flex-grow bg-white shadow p-5">
          <AllPosts data={fetchedBlogs} />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
