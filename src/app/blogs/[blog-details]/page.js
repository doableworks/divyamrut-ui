import DetailPage from "@/components/blogs/DetailPage";
import MainBanner from "@/components/common/MainBanner";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchBlogPosts = async (slug) => {
  try {
    const url = `${apiUrl}/blogs/blogs/${slug}`;
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Unable to fetch Blogs", err);
    return null;
  }
};

const BlogDetails = async ({ params }) => {
  const slug = params["blog-details"];
  const fetchedDetails = await fetchBlogPosts(slug);

  if (!fetchedDetails) {
    notFound();
  }
  console.log(fetchedDetails);
  return (
    <div>
      <MainBanner
        heading={fetchedDetails.title}
        subHeading="Blogs - Your Daily Dose of Knowledge"
        image={fetchedDetails.cover_image}
      />
      <section className="common_page_width">
        <div>
          <DetailPage data={fetchedDetails} />
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
