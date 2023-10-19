const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Hello world - Eslint, prettier and Husky config</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Blue</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Red</button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Green</button>
      </div>
    </div>
  );
};

export default HomePage;
