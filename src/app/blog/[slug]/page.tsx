// pages/blog/[slug].tsx
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { getStaticPaths } from "@/app/compenont/getStaticPaths";

export default async function Blog({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    name,
    title,
    imageUrl,
    content
  }`;

  const data = await client.fetch(query, { slug });

  if (!data) {
    return <div>Blog not found!</div>; // Handle 404
  }

  return (
    <div className="flex items-center bg-gray-200 h-full">
      <div className="bg-white w-full">
        <div className="p-6">
          <h2 className="font-semibold text-gray-800 mb-4 text-2xl uppercase">
            {data.name}
          </h2>
         ` <img src={data.imageUrl} alt={data.title} />`

          <section className="text-lg leading-normal text-gray-700"> 
            <PortableText value={data.content} />
          </section>
        </div>
      </div>
    </div>
  );
}
getStaticPaths()