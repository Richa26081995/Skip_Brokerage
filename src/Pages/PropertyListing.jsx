import { useState } from "react";
import heroImage from "../assets/hero-img.png";
import PropertyHeader from "../Components/PropertyHeader/PropertyHeader";

const PropertyListing = ({ onBack, onPropertyClick, onPostProperty }) => {
  const [bedroom, setBedroom] = useState("3 BHK");
  const [status, setStatus] = useState("Ready to Move");
  const [postedBy, setPostedBy] = useState("Dealer");
  const [budget, setBudget] = useState(0);
  const [area, setArea] = useState(0);

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
    <div className="min-h-screen bg-white">
      <PropertyHeader onBack={onBack} onPostProperty={onPostProperty} />

      <main className="mx-auto grid max-w-7xl gap-6 bg-[#f5faef] p-5 sm:p-8 lg:grid-cols-[290px_1fr] lg:p-12">
        <aside className="space-y-4">
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

        <section className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Properties in your area</h1>
            <p className="mt-1 text-sm text-gray-500">Find a home that fits your needs.</p>
          </div>

          {properties.map((property) => (
            <article
              key={property}
              onClick={() => onPropertyClick(property)}
              onKeyDown={(event) => event.key === "Enter" && onPropertyClick(property)}
              role="button"
              tabIndex="0"
              className="grid w-full cursor-pointer gap-5 rounded-2xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[1fr_1.1fr]"
            >
              <img src={heroImage} alt={property.name} className="h-48 w-full rounded-xl object-cover sm:h-64" />
              <div className="py-2">
                <h2 className="text-xl font-bold">{property.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{property.location}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                  <div><p className="font-bold">{property.price}</p><p className="mt-1 text-gray-500">Price</p></div>
                  <div><p className="font-bold">{property.area}</p><p className="mt-1 text-gray-500">Built up Area</p></div>
                  <div><p className="font-bold">{property.bedrooms}</p><p className="mt-1 text-gray-500">Ready to move</p></div>
                </div>
                <p className="mt-5 text-sm"><strong>Highlights:</strong> {property.highlights.map((item) => <span key={item} className="ml-1 rounded bg-[#eff8e9] px-2 py-1 text-[10px]">{item}</span>)}</p>
                <p className="mt-5 truncate text-xs text-gray-500">{property.description}</p>
                <button type="button" onClick={(event) => { event.stopPropagation(); onPropertyClick(property); }} className="mt-4 text-sm font-semibold text-[#6cbd3f] underline-offset-4 transition hover:text-[#579b31] hover:underline">
                  View Details <span aria-hidden="true">→</span>
                </button>
                <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-gray-600">
                  <span><span className="mr-2 inline-block h-4 w-4 rounded-full bg-[#6cbd3f] align-middle" />{property.seller}<br />{property.sellerType} · Posted recently</span>
                  <button type="button" onClick={(event) => event.stopPropagation()} className="rounded-md bg-[#6cbd3f] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#579b31]">Contact</button>
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
