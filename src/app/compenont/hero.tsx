import { urlFor } from '@/sanity/lib/image';

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
     ` <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={urlFor(data.poster).url()}
        alt={data.title}
      />`
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {data.title}
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 uppercase">
          {data.name}
        </h1>
        <p className="leading-relaxed mb-3">{data.description}</p>
        <div className="flex items-center flex-wrap">
          <a
            href={`/blog/${data.slug}`}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
