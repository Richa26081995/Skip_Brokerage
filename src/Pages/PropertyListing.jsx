import { useState } from "react";
import heroImage from "../assets/hero-img.png";
import PropertyHeader from "../Components/PropertyHeader/PropertyHeader";

const PropertyListing = ({ onBack, onPropertyClick, onPostProperty }) => {
  const [bedroom, setBedroom] = useState("3 BHK");
  const [status, setStatus] = useState("Ready to Move");
  const [postedBy, setPostedBy] = useState("Dealer");
  const [budget, setBudget] = useState(0);
  const [area, setArea] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filterButton = (selected) =>
    `rounded-full border px-3 py-1 text-[10px] transition ${
      selected
        ? "border-[#6cbd3f] bg-[#6cbd3f] text-white"
        : "border-gray-300 bg-white text-gray-700 hover:border-[#6cbd3f] hover:bg-[#eff8e9]"
    }`;

  const properties = [
    {
      id: 1,
      name: "Palm Grove Villa",
      location: "Whitefield, Bangalore",
      price: "₹1.25 Cr",
      area: "2,400 sq.ft",
      bedrooms: "3 BHK",
      highlights: ["Gated Society", "East Facing"],
      seller: "Amit Sharma",
      sellerType: "Dealer",
      description: "A spacious villa with natural light, a private garden, and modern facilities.",
    },
    {
      id: 2,
      name: "Lakeview Apartment",
      location: "Hitech City, Hyderabad",
      price: "₹85 Lakh",
      area: "1,450 sq.ft",
      bedrooms: "2 BHK",
      highlights: ["Parking", "Club House"],
      seller: "Neha Verma",
      sellerType: "Owner",
      description: "A comfortable apartment close to offices, schools, shopping, and public transport.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <PropertyHeader onBack={onBack} onPostProperty={onPostProperty} />

      <main className="mx-auto w-full max-w-7xl min-w-0 overflow-x-hidden bg-[#f5faef] p-3 sm:p-6 lg:grid lg:grid-cols-[290px_1fr] lg:gap-6 lg:p-12">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="mb-4 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold lg:hidden"
        >
          Filters
          <span>{showFilters ? "−" : "+"}</span>
        </button>

        <aside className={`${showFilters ? "block" : "hidden"} space-y-4 lg:block`}>
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Budget</h2>
              <span className="text-xs text-gray-500">{budget === 100 ? "100+ Cr" : `${budget} Cr`}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              className="mt-6 w-full accent-[#6cbd3f]"
              aria-label="Maximum budget in crore"
            />
            <div className="mt-1 flex justify-between text-[10px] text-gray-500">
              <span>0 Cr</span>
              <span>100+ Cr</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">No. of Bedrooms</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK", "7 BHK", "8 BHK", "9 BHK"].map((room) => (
                <button key={room} onClick={() => setBedroom(room)} className={filterButton(bedroom === room)}>
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">Construction Status</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["New Launch", "Under Construction", "Ready to Move"].map((item) => (
                <button key={item} onClick={() => setStatus(item)} className={filterButton(status === item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">Posted By</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Owner", "Builder", "Dealer", "Feature Dealer"].map((item) => (
                <button key={item} onClick={() => setPostedBy(item)} className={filterButton(postedBy === item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Area (in sqft)</h2>
              <span className="text-xs text-gray-500">{area === 5000 ? "5,000+ sqft" : `${area} sqft`}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={area}
              onChange={(event) => setArea(Number(event.target.value))}
              className="mt-6 w-full accent-[#6cbd3f]"
              aria-label="Minimum area in square feet"
            />
            <div className="mt-1 flex justify-between text-[10px] text-gray-500">
              <span>0 sqft</span>
              <span>5,000+ sqft</span>
            </div>
          </div>
        </aside>

        <section className="min-w-0 space-y-5">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Properties in your area</h1>
            <p className="mt-1 text-sm text-gray-500">Find a home that fits your needs.</p>
          </div>

          {properties.map((property) => (
            <article
              key={property.id}
              onClick={() => onPropertyClick(property)}
              onKeyDown={(event) => event.key === "Enter" && onPropertyClick(property)}
              role="button"
              tabIndex="0"
              className="grid w-full min-w-0 cursor-pointer gap-4 overflow-hidden rounded-2xl bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:gap-5 sm:p-5 lg:grid-cols-[1fr_1.1fr]"
            >
              <img src={heroImage} alt={property.name} className="block h-auto w-full max-w-full rounded-xl lg:h-full lg:min-h-70 lg:object-cover" />
              <div className="min-w-0 py-2">
                <h2 className="text-lg font-bold sm:text-xl">{property.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{property.location}</p>
                <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                  <div><p className="font-bold">{property.price}</p><p className="mt-1 text-gray-500">Price</p></div>
                  <div><p className="font-bold">{property.area}</p><p className="mt-1 text-gray-500">Built up Area</p></div>
                  <div><p className="font-bold">{property.bedrooms}</p><p className="mt-1 text-gray-500">Ready to move</p></div>
                </div>
                <p className="mt-5 wrap-break-word text-sm"><strong>Highlights:</strong> {property.highlights.map((item) => <span key={item} className="ml-1 inline-block rounded bg-[#eff8e9] px-2 py-1 text-[10px]">{item}</span>)}</p>
                <p className="mt-5 wrap-break-word text-xs text-gray-500">{property.description}</p>
                <button type="button" onClick={(event) => { event.stopPropagation(); onPropertyClick(property); }} className="mt-4 text-sm font-semibold text-[#6cbd3f] underline-offset-4 transition hover:text-[#579b31] hover:underline">
                  View Details <span aria-hidden="true">→</span>
                </button>
                <div className="mt-4 flex flex-col gap-3 border-t pt-3 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                  <span><span className="mr-2 inline-block h-4 w-4 rounded-full bg-[#6cbd3f] align-middle" />{property.seller}<br />{property.sellerType} · Posted recently</span>
                  <button type="button" onClick={(event) => event.stopPropagation()} className="w-full rounded-md bg-[#6cbd3f] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#579b31] sm:w-auto">Contact</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PropertyListing;
