import { client } from "@/sanity/lib/client";


export async function getStaticPaths() {
    const query = `*[_type == "blog"]{
      "slug": slug.current
    }`;
  
    const slugs = await client.fetch(query);
    const paths = slugs.map((slug: { slug: string }) => ({
      params: { slug: slug.slug },
    }));
  
    return {
      paths,
      fallback: "blocking", // Handle dynamic paths on-demand
    };
  }
  
  export async function getStaticProps({ params }: { params: { slug: string } }) {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      name,
      title,
      imageUrl,
      content
    }`;
  
    const data = await client.fetch(query, { slug: params.slug });
  
    if (!data) {
      return {
        notFound: true, // Handle 404
      };
    }
  
    return {
      props: { data },
      revalidate: 60, // ISR: Regenerate every 60 seconds
    };
  }
  