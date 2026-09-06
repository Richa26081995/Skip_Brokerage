import { useEffect, useState } from "react";
import heroImage from "../../assets/hero-img.png";

const steps = [
  { title: "Basic Details", note: "Flats/ Apartment for sale" },
  { title: "Location Details", note: "Step 2" },
  { title: "Property Profile", note: "Step 3" },
  { title: "Photo, Video and Voice Over", note: "Step 4" },
  { title: "Amenities Section", note: "Step 5" },
];

const Input = ({ label, placeholder, optional = false, type = "text" }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-[#272727]">
      {label} {optional && <span className="text-gray-400">(optional)</span>}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#6cbd3f] focus:ring-2 focus:ring-[#6cbd3f]/20"
    />
  </label>
);

const ChoiceGroup = ({ label, options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[#272727]">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`rounded-full border px-4 py-2 text-xs transition ${
              selected === option
                ? "border-[#6cbd3f] bg-[#6cbd3f] text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-[#6cbd3f]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const PropertyTypeChoices = () => {
  const [category, setCategory] = useState("Residential");
  const [propertyType, setPropertyType] = useState("");

  const residentialTypes = [
    "Flat/Apartment",
    "Independent House / Villa",
    "Builder Floor",
    "Plot / Land",
    "1 RK/ Studio Apartment",
    "Serviced Apartment",
    "Farmhouse",
    "Other",
  ];

  const commercialTypes = ["Office", "Retail", "Plot / Land", "Storage", "Industry", "Hospitality", "Other"];
  const types = category === "Residential" ? residentialTypes : commercialTypes;

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[#272727]">And it&apos;s a ...</p>
      <div className="flex gap-6">
        {["Residential", "Commercial"].map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              name="property-category"
              checked={category === item}
              onChange={() => {
                setCategory(item);
                setPropertyType("");
              }}
              className="h-4 w-4 accent-[#1688e5]"
            />
            {item}
          </label>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setPropertyType(type)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              propertyType === type
                ? "border-[#1688e5] bg-[#eaf5ff] text-[#126fba]"
                : "border-gray-200 bg-white text-gray-600 hover:border-[#1688e5]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

const UploadBox = ({ title, description, buttonLabel }) => (
  <div className="rounded-lg border border-gray-300 p-5">
    <h3 className="text-base font-medium text-[#272727]">{title}</h3>
    <p className="mt-1 text-xs text-gray-500">{description}</p>
    <div className="mt-4 rounded-lg border border-dashed border-[#6cbd3f] bg-[#eff8e9] px-4 py-7 text-center">
      <p className="text-sm font-medium text-[#6cbd3f]">Add at least one file</p>
      <p className="mt-1 text-xs text-gray-500">Drag and drop or browse from your device</p>
      <label className="mt-4 inline-block cursor-pointer rounded-md border border-[#6cbd3f] px-4 py-2 text-xs font-medium text-[#6cbd3f] transition hover:bg-[#6cbd3f] hover:text-white">
        {buttonLabel}
        <input type="file" className="sr-only" />
      </label>
    </div>
  </div>
);

const StepContent = ({ step, onStart }) => {
  if (step === 0) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-[#202020]">Start posting your property, it&apos;s free</h2>
          <p className="mt-2 text-sm text-gray-500">Add basic details to get started.</p>
        </div>
        <ChoiceGroup label="You&apos;re looking to ..." options={["Sell", "Rent / Lease", "PG"]} />
        <PropertyTypeChoices />
        <div>
          <label className="mb-2 block text-sm font-medium text-[#272727]">Your contact details for the buyer to reach you</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#6cbd3f]"
          />
          <p className="mt-2 text-xs text-gray-500">Are you a registered user? <button type="button" className="font-medium text-[#6cbd3f]">Login</button></p>
        </div>
        <button type="button" onClick={onStart} className="w-full rounded-lg bg-[#272727] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
          Start now
        </button>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-[#202020]">Tell us where is your property located at</h2>
          <p className="mt-2 text-sm text-gray-500">Accurate location helps you connect with the right buyer/renter.</p>
        </div>
        <Input label="City" placeholder="Enter City" />
        <Input label="Locality" placeholder="Locality" />
        <Input label="Sub Locality" placeholder="Sub Locality" optional />
        <Input label="Apartment / Society" placeholder="Apartment / Society" />
        <Input label="House No." placeholder="House No." optional />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#202020]">Tell us about your Property</h2>
          <p className="mt-2 text-sm text-gray-500">Add room and area details to help people find the right fit.</p>
        </div>
        <div className="rounded-lg border border-gray-300 p-5">
          <h3 className="text-base font-medium text-[#272727]">Add Room Details</h3>
          <div className="mt-5 space-y-5">
            <ChoiceGroup label="No. of Bedrooms" options={["1", "2", "3", "4", "5+"]} />
            <ChoiceGroup label="No. of Bathrooms" options={["1", "2", "3", "4"]} />
            <ChoiceGroup label="Balconies" options={["0", "1", "2", "3", "More than 3"]} />
          </div>
        </div>
        <Input label="Carpet Area" placeholder="Enter area in sq. ft." />
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-[#202020]">Add photos, video and voice over</h2>
          <p className="mt-2 text-sm text-gray-500">Listings with media reach the right buyer faster.</p>
        </div>
        <UploadBox title="Add Photos of your property" description="Upload up to 30 photos. Max size 10 MB each." buttonLabel="Upload photos now" />
        <UploadBox title="Add Video of your property" description="Upload one walkthrough video of your property." buttonLabel="Upload video now" />
        <UploadBox title="Add Voice Over" description="Add an optional voice description for your listing." buttonLabel="Upload audio now" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#202020]">Add amenities/unique features</h2>
        <p className="mt-2 text-sm text-gray-500">Highlight the details that make your property special.</p>
      </div>
      <div className="rounded-lg border border-gray-300 p-5 space-y-6">
        <ChoiceGroup label="Other Rooms" options={["+ Pooja Room", "+ Study Room", "+ Servant Room"]} />
        <ChoiceGroup label="Furnishing" options={["Furnished", "Semi-Furnished", "Unfurnished"]} />
        <ChoiceGroup label="Ownership" options={["Freehold", "Leasehold", "Co-operative Society", "Power of Attorney"]} />
      </div>
      <Input label="Additional features" placeholder="Tell buyers what makes this property unique" optional />
    </div>
  );
};

const PostProperty = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      setSubmitted(true);
      return;
    }
    setCurrentStep((step) => step + 1);
  };

  return (
    <div className="fixed inset-0 z-50 h-dvh overflow-hidden bg-white px-3 pb-3 pt-3 sm:px-6 sm:pt-5 md:px-10 md:pb-5 md:pt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] rounded-bl-[72px] bg-[#6cbd3f] sm:h-[210px] sm:rounded-bl-[92px] md:h-[240px] md:rounded-bl-[120px]" />
      <div className="mx-auto flex h-full max-w-[1100px] flex-col">
        <div className="relative z-10 mb-3 flex min-h-[48px] shrink-0 items-center justify-between px-1 sm:mb-5 sm:px-3 md:mb-6 md:px-10">
          <div className="text-xl font-medium text-white sm:text-2xl">Skip<span className="rounded bg-white px-1 text-[#6cbd3f]">Brokerage</span></div>
          <button type="button" onClick={onClose} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-[#272727] hover:bg-gray-100 sm:px-4 sm:text-sm">Save & Exit</button>
        </div>

        <main className="relative z-10 grid min-h-0 flex-1 overflow-hidden rounded-[24px] bg-[#161616] bg-cover bg-center p-2 shadow-2xl sm:rounded-[30px] sm:p-3 md:grid-cols-[320px_1fr] md:gap-10 md:rounded-[34px] md:p-12" style={{ backgroundImage: `linear-gradient(#0009, #0009), url(${heroImage})` }}>
          <aside className="self-start rounded-[20px] bg-white p-2 sm:rounded-3xl sm:p-4 md:rounded-3xl md:p-7">
            <div className="rounded-[18px] bg-[#f0f0f0] p-4 sm:rounded-3xl sm:p-5 md:p-6">
              <h2 className="text-xl text-[#272727]">Your Progress</h2>
              <ol className="mt-5 grid grid-cols-5 gap-1 md:mt-7 md:block">
                {steps.map((step, index) => {
                  const complete = index < currentStep || submitted;
                  const active = index === currentStep && !submitted;
                  return (
                    <li key={step.title} className="relative flex min-w-0 flex-col items-center gap-1 pb-0 text-center md:flex-row md:gap-3 md:pb-6 md:text-left md:last:pb-0">
                      {index < steps.length - 1 && <span className={`absolute left-1/2 top-2 h-0.5 w-full -translate-y-1/2 md:left-[7px] md:top-4 md:h-full md:w-0.5 md:translate-x-0 md:translate-y-0 ${complete ? "bg-[#6cbd3f]" : "bg-gray-300"}`} />}
                      <span className={`relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${complete ? "border-[#6cbd3f] bg-[#6cbd3f] text-white" : active ? "border-[#6cbd3f] bg-white" : "border-gray-300 bg-white"}`}>
                        {complete && <span className="text-[10px]">&#10003;</span>}
                      </span>
                      <span className="min-w-0">
                        <span className={`block truncate text-[9px] leading-tight sm:text-[10px] md:text-sm ${active || complete ? "text-[#272727]" : "text-gray-500"}`}>{step.title}</span>
                        <span className="hidden text-[10px] text-gray-500 md:block">{index === 0 ? step.note : `Step ${index + 1}`}</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>

          <section className="mt-3 min-h-0 overflow-y-auto rounded-[20px] bg-white p-4 sm:rounded-3xl sm:p-6 md:mt-0 md:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6cbd3f] text-3xl text-white">&#10003;</div>
                <h2 className="mt-6 text-3xl font-semibold text-[#202020]">Property submitted</h2>
                <p className="mt-2 max-w-md text-sm text-gray-500">Your property details have been saved. Our team will review your listing shortly.</p>
                <button type="button" onClick={onClose} className="mt-8 rounded-lg bg-[#272727] px-8 py-3 text-sm font-medium text-white hover:bg-black">Back to home</button>
              </div>
            ) : (
              <>
                <StepContent step={currentStep} onStart={nextStep} />
                <div className={`${currentStep === 0 ? "hidden" : ""} mt-8 flex flex-wrap justify-between gap-3 border-t border-gray-200 pt-6`}>
                  <button type="button" onClick={() => setCurrentStep((step) => Math.max(0, step - 1))} disabled={currentStep === 0} className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-medium text-gray-600 disabled:cursor-not-allowed disabled:opacity-40">Back</button>
                  <button type="button" onClick={nextStep} className="rounded-lg bg-[#272727] px-10 py-3 text-sm font-semibold text-white transition hover:bg-black">{currentStep === steps.length - 1 ? "Submit Property" : "Continue"}</button>
                </div>
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default PostProperty;