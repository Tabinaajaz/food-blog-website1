'use client';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="font-semibold text-indigo-500">Foodie's Delight</span>, your one-stop destination for delicious recipes, expert tips, and all things food!
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-indigo-500">Foodie's Delight</span>, our mission is to inspire and empower food lovers to create amazing dishes in their own kitchens. We aim to connect people through the joy of cooking, one recipe at a time.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12">
        <img
          src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Delicious food"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://im-3.eefa.co/jb-kc143-s3.jpg"
              alt="Chef"
              className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-600">Head Chef</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://c7.alamy.com/comp/TAJRPF/chef-cutting-fresh-and-delicious-vegetables-for-cooking-TAJRPF.jpg"
              alt="Chef"
              className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Jane Smith</h3>
            <p className="text-sm text-gray-600">Pastry Chef</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Chef"
              className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Emily Johnson</h3>
            <p className="text-sm text-gray-600">Recipe Developer</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions or want to collaborate? Reach out to us at{' '}
          <a
            href="mailto:contact@foodiesdelight.com"
            className="text-indigo-500 hover:underline"
          >
            contact@foodiesdelight.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
