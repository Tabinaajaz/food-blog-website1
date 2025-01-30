'use  client'

import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import CommentSection from "@/app/compenont/comment-section";

export default async function Blog({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    name,
    title,
    imageUrl,
    content,
    poster
  }`;

  const data = await client.fetch(query, { slug });

  if (!data) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="flex items-center bg-gray-200 h-full">
      <div className="bg-white w-full">
        <div className="p-6">
          <h2 className="font-semibold text-gray-800 mb-4 text-2xl uppercase">
            {data.name}
          </h2>
          {data.imageUrl && urlFor(data.imageUrl)?.url() ? (
            <Image
              src={urlFor(data.imageUrl).url()!}
              alt={data.title || "Blog Image"}
              width={800}
              height={600}
              className="object-cover rounded-md"
            />
          ) : (
            <p>No image available</p>
          )}
          <section className="text-lg leading-normal text-gray-700 mt-6">
            <PortableText value={data.content} />
          <CommentSection/>
          </section>
        
        </div>
      </div>
    </div>
  );
}
