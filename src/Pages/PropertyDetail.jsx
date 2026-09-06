import heroImage from "../assets/hero-img.png";
import PropertyHeader from "../Components/PropertyHeader/PropertyHeader";

const PropertyDetail = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <PropertyHeader onBack={onBack} />

      <main className="mx-auto max-w-7xl bg-[#f5faef] p-5 sm:p-8 lg:p-12">
        <article className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl font-bold sm:text-3xl">Project/Property Name</h1>
          <p className="mt-4 text-lg">By <span className="font-semibold text-[#6cbd3f]">Dealer Name</span></p>
          <p className="mt-2 text-gray-600">Location Name/Address</p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <img src={heroImage} alt="Project exterior" className="h-72 w-full rounded-2xl object-cover sm:h-96" />
            <img src={heroImage} alt="Property interior" className="h-72 w-full rounded-2xl object-cover sm:h-96" />
          </div>

          <div className="mt-8 grid gap-8 border-t pt-8 md:grid-cols-[1fr_280px]">
            <div>
              <h2 className="text-xl font-bold">About this property</h2>
              <p className="mt-3 leading-7 text-gray-600">
                This 2BHK property is designed for comfortable living with spacious rooms, natural light, and modern facilities.
              </p>
              <h2 className="mt-8 text-xl font-bold">Property highlights</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {["2 Bedrooms", "2 Bathrooms", "Gated Society", "Parking"].map((item) => (
                  <span key={item} className="rounded-full bg-[#f5faef] px-4 py-2 text-sm text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#f5faef] p-6">
              <p className="text-sm text-gray-500">Price</p>
              <p className="mt-2 text-2xl font-bold">Price on request</p>
              <button className="mt-6 w-full rounded-full bg-[#6cbd3f] px-5 py-3 font-medium text-white">
                Contact Dealer
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PropertyDetail;
