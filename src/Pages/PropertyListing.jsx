import heroImage from "../assets/hero-img.png";
import PropertyHeader from "../Components/PropertyHeader/PropertyHeader";

const PropertyListing = ({ onBack, onPropertyClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <PropertyHeader onBack={onBack} />

      <main className="mx-auto grid max-w-7xl gap-6 bg-[#f5faef] p-5 sm:p-8 lg:grid-cols-[290px_1fr] lg:p-12">
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">Budget</h2>
            <input type="range" className="mt-6 w-full accent-[#6cbd3f]" />
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">No. of Bedrooms</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK", "7 BHK", "8 BHK", "9 BHK"].map((room) => (
                <button key={room} className="rounded-full border border-gray-300 px-3 py-1 text-xs">
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-semibold">Construction Status</h2>
            <p className="mt-4 text-sm text-gray-500">Ready to move</p>
            <p className="mt-2 text-sm text-gray-500">Under construction</p>
          </div>
        </aside>

        <section className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Properties in your area</h1>
            <p className="mt-1 text-sm text-gray-500">Find a home that fits your needs.</p>
          </div>

          <button
            type="button"
            onClick={onPropertyClick}
            className="grid w-full gap-5 rounded-2xl bg-white p-5 text-left shadow-sm transition hover:shadow-md md:grid-cols-[1fr_1.1fr]"
          >
            <img src={heroImage} alt="Modern property" className="h-64 w-full rounded-xl object-cover" />
            <div className="py-2">
              <h2 className="text-xl font-bold">Project/Property Name</h2>
              <p className="mt-2 text-sm text-gray-600">Location Name</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold">Price (range)</p>
                  <p className="mt-1 text-gray-500">Price per sqft</p>
                </div>
                <div>
                  <p className="font-bold">Area</p>
                  <p className="mt-1 text-gray-500">2 BHK</p>
                </div>
              </div>
              <p className="mt-6 text-sm"><strong>Highlights:</strong> Gated Society</p>
              <div className="mt-8 border-t pt-4 text-sm text-gray-600">Seller Name · Dealer</div>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default PropertyListing;
