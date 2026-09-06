const PropertyHeader = ({ onBack }) => {
  return (
    <header className="flex items-center justify-between bg-[#1e1e1e] px-6 py-5 text-white sm:px-10">
      <button type="button" onClick={onBack} className="text-xl font-medium">
        Skip<span className="rounded bg-white px-1 text-[#1e1e1e]">Brokerage</span>
      </button>

      <button
        type="button"
        className="rounded-full border border-[#6cbd3f] px-5 py-2 text-sm text-[#6cbd3f]"
      >
        Post Property
      </button>
    </header>
  );
};

export default PropertyHeader;
