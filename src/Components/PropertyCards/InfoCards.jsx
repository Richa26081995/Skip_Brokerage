const propertyCards = [
  {
    title: "Buy",
    description:
      "Find your dream home, plot, or commercial space - all without paying any brokerage. Browse verified listings across cities, localities, and builders with smart filters to make the right choice.",
    action: "Buy Property",
    className: "bg-[#6cbd3f]",
  },
  {
    title: "Rent",
    description:
      "Discover budget-friendly rentals and co-living spaces, or post your property for rent. Enjoy hassle-free agreements and connect directly with tenants, all without brokerage fees.",
    action: "Rent Property",
    className: "bg-[#222222]",
  },
  {
    title: "Sell",
    description:
      "List your property with ease and connect directly with genuine buyers. No middlemen, no extra cost - just faster deals with complete transparency.",
    action: "Sell Property",
    className: "bg-[#6cbd3f]",
  },
];

const InfoCards = () => {
  return (
    <section className="px-7 pb-16 pt-11 md:px-10 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
          For all your real estate needs, we have got you covered
        </h2>
        <p className="mt-1 text-sm text-gray-400 md:text-base">
          Our articles, guides, and videos help you through the process, start to finish.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {propertyCards.map(({ title, description, action, className }) => (
            <article
              key={title}
              className={`${className} flex min-h-[250px] flex-col items-center justify-center rounded-xl px-8 py-10 text-center text-white transition-transform duration-200 hover:-translate-y-1 md:min-h-[251px]`}
            >
              <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
              <p className="mt-2 max-w-[245px] text-[10px] leading-relaxed text-white/80 md:text-[11px]">
                {description}
              </p>
              <button className="mt-4 rounded-full bg-white px-5 py-2 text-[10px] font-medium text-gray-600 transition-colors hover:bg-gray-100">
                {action}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InfoCards;