import SearchBar from "../SearchBar/SearchBar";
import heroImage from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="relative rounded-3xl overflow-hidden">
        
        {/* Background */}
        <img
          src={heroImage}
          alt="Modern home exterior"
          className="h-[700px] w-full object-cover md:h-[500px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-start bg-black/50 px-6 pt-16 text-white md:justify-center md:px-16 md:pt-0">
          
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Discover your perfect <br />
            <span className="text-green-400">Home</span> Today
          </h1>

          <p className="mt-3 text-sm md:text-lg">
            Find the perfect home, office, or investment opportunity
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Buy", "Rent", "Co-living/PG", "Post Property"].map((tab) => (
              <button
                key={tab}
                className="bg-green-500 px-4 py-2 rounded-full text-sm md:text-base"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mt-6">
            <SearchBar />
          </div>

        </div>
      </div>
    </div>
  );
};
export default Hero;