const PropertyHeader = ({ onBack, onPostProperty }) => {
  return (
    <header className="flex w-full min-w-0 items-center justify-between gap-3 bg-[#1e1e1e] px-4 py-4 text-white sm:px-10 sm:py-5">
      <button type="button" onClick={onBack} className="text-xl font-medium">
        Skip<span className="rounded bg-white px-1 text-[#1e1e1e]">Brokerage</span>
      </button>

      <button
        type="button"
        onClick={onPostProperty}
        className="shrink-0 rounded-full border border-[#6cbd3f] px-3 py-2 text-xs text-[#6cbd3f] sm:px-5 sm:text-sm"
      >
        Post Property
      </button>
    </header>
  );
};

export default PropertyHeader;
