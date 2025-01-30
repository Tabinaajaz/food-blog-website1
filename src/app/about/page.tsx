import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="font-semibold text-indigo-500">Foodies Delight</span>, your one-stop destination for delicious recipes, expert tips, and all things food.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-indigo-500">Foodies Delight</span>, our mission is to inspire and empower food lovers to create amazing dishes in their own kitchens. We aim to connect people through the joy of cooking, one recipe at a time.
        </p>
      </div>

      {/* Featured Recipe Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Recipe</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Delicious recipe"
              className="rounded-lg shadow-lg w-full object-cover"
              width={500}
              height={300}
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Pasta Recipe</h3>
            <p className="text-gray-600">
              This easy pasta recipe is perfect for a quick and delicious meal. With just a few simple ingredients  you can make a flavorful dish that everyone will love.
            </p>
            <a
              href="/blog[/slug]"
              className="mt-6 inline-block bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600"
            >
              View Recipe
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have any questions? We would love to hear from you! Reach out to us and lets talk about food recipes and more.
        </p>
        <a
          href="mailto:contact@foodiesdelight.com"
          className="inline-block bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
