const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">
        Skip<span className="bg-black text-white px-2 rounded">Brokerage</span>
      </h1>

      <div className="flex gap-3">
        <button className="border px-4 py-2 rounded-full text-green-600 border-green-600 hidden md:block">
          Post Property
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Login
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          SignUp
        </button>
      </div>
    </div>
  );
};
export default Navbar;