'use client'
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Hero from "@/app/compenont/hero";

const Home = () => {
  const [data, setData] = useState<Blog[]>([]); // Initial state as an empty array

  const fetchData = async () => {
    try {
      const query = `*[_type == 'blog'] | order(_createdAt asc){
        title,
        name,
        description,
        "slug": slug.current,
        imageUrl,
        poster
      }`;
      const blogs = await client.fetch(query);
      setData(blogs); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    // Fetch data every 10 minutes
    const interval = setInterval(() => {
      console.log("Fetching data...");
      fetchData();
    }, 600000); // 600000 ms = 10 minutes

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* Grid layout for 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((blog) => (
          <Hero data={blog} key={blog.slug} />
        ))}
      </div>
    </div>
  );
};

export default Home;
