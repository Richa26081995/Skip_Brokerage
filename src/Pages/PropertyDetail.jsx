import heroImage from "../assets/hero-img.png";
import PropertyHeader from "../Components/PropertyHeader/PropertyHeader";

const PropertyDetail = ({ property, onBack, onPostProperty }) => {
  if (!property) return null;

  return (
    <div className="min-h-screen bg-white">
      <PropertyHeader onBack={onBack} onPostProperty={onPostProperty} />

      <main className="mx-auto max-w-7xl bg-[#f5faef] p-5 sm:p-8 lg:p-12">
        <article className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl font-bold sm:text-3xl">{property.name}</h1>
          <p className="mt-4 text-lg">By <span className="font-semibold text-[#6cbd3f]">{property.seller}</span></p>
          <p className="mt-2 text-gray-600">{property.location}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <img src={heroImage} alt={`${property.name} exterior`} className="h-72 w-full rounded-2xl object-cover sm:h-96" />
            <img src={heroImage} alt={`${property.name} interior`} className="h-72 w-full rounded-2xl object-cover sm:h-96" />
          </div>

          <div className="mt-8 grid gap-8 border-t pt-8 md:grid-cols-[1fr_280px]">
            <div>
              <h2 className="text-xl font-bold">About this property</h2>
              <p className="mt-3 leading-7 text-gray-600">
                {property.description}
              </p>
              <h2 className="mt-8 text-xl font-bold">Property highlights</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[property.bedrooms, property.area, ...property.highlights].map((item) => (
                  <span key={item} className="rounded-full bg-[#f5faef] px-4 py-2 text-sm text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#f5faef] p-6">
              <p className="text-sm text-gray-500">Price</p>
              <p className="mt-2 text-2xl font-bold">{property.price}</p>
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
