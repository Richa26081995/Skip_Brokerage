import { useState } from "react";

const Navbar = ({ onPostProperty }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePostProperty = () => {
    onPostProperty();
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 sm:px-6">
      <h1 className="text-lg font-bold sm:text-xl">
        Skip<span className="bg-black text-white px-2 rounded">Brokerage</span>
      </h1>

      <div className="hidden items-center gap-2 sm:flex">
        <button onClick={onPostProperty} className="rounded-full border border-green-600 px-4 py-2 text-sm text-green-600">
          Post Property
        </button>
        <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
          Login
        </button>
        <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
          SignUp
        </button>
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative h-10 w-10 rounded-lg border border-gray-300 sm:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <>
            <span className="absolute left-2.5 top-1/2 block h-0.5 w-5 rotate-45 bg-black" />
            <span className="absolute left-2.5 top-1/2 block h-0.5 w-5 -rotate-45 bg-black" />
          </>
        ) : (
          <span className="absolute left-2.5 top-3 block h-0.5 w-5 bg-black shadow-[0_6px_0_black,0_12px_0_black]" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute right-4 top-16 z-20 flex w-44 flex-col gap-2 rounded-xl bg-white p-3 shadow-lg sm:hidden">
          <button onClick={handlePostProperty} className="rounded-lg border border-green-600 px-3 py-2 text-sm text-green-600">
            Post Property
          </button>
          <button className="rounded-lg bg-black px-3 py-2 text-sm text-white">
            Login
          </button>
          <button className="rounded-lg bg-black px-3 py-2 text-sm text-white">
            SignUp
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;