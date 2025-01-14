'use client';

const list = () => {
  const foodItems = [
    { name: "Creamy chicken korma", recipe: "Creamy chicken korma made with butter, cream chicken and other." },
    { name: "Chicken Biryani", recipe: "Aromatic rice dish cooked with spiced chicken." },
    { name: "Pasta Alfredo", recipe: "Creamy pasta made with butter, cream, and Parmesan cheese." },
    { name: "Tacos", recipe: "Mexican dish made with tortillas, filled with meat and vegetables." },
    { name: "Caesar Salad", recipe: "Crisp lettuce tossed with Caesar dressing, croutons, and Parmesan." },
    { name: "Paneer Butter Masala", recipe: "Rich and creamy Indian curry made with paneer and spices." },
    { name: "tostadas", recipe: "Japanese dish made with vinegared rice, seafood, and vegetables." },
    { name: "tostadas", pasta: "dish made with vinegared rice, seafood, and vegetables." }
  ];

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-6xl font-bold  text-gray-900 mb-8 text-center">Food List</h1>
      
      <ol className="list-disc list-inside ">
        {foodItems.map((item, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.recipe}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default list;
