import React from "react";
import blogImage1 from "../../assets/images/istockphoto2.jpg";
import blogImage2 from "../../assets/images/apartement3.webp";
import blogImage3 from "../../assets/images/istockphoto4.jpg";

function Blog() {
  const blogData = [
    {
      id: 0,
      title: "Home sales start to rise",
      description:
        "Explore the latest trends in the housing market and learn how home sales are starting to pick up again.",
      blogImage: blogImage1,
    },
    {
      id: 1,
      title: "Apartment living tips",
      description:
        "Discover practical tips to make apartment living more comfortable and stylish.",
      blogImage: blogImage2,
    },
    {
      id: 2,
      title: "Designing your dream home",
      description:
        "Get inspiration for designing your perfect home with modern and functional layouts.",
      blogImage: blogImage3,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-1">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog News</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest real estate news, tips, and trends.
        </p>
      </div>

      {/* Blogs */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.blogImage}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
