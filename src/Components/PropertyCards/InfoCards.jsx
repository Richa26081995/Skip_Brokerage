const InfoCards = () => {
  return (
    <div className="px-6 md:px-12 mt-10">
      <h2 className="text-xl md:text-3xl font-bold text-center">
        For all your real state needs, we have got you covered
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-green-500 text-white p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold">Buy</h3>
        </div>

        <div className="bg-black text-white p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold">Rent</h3>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold">Sell</h3>
        </div>

      </div>
    </div>
  );
};
export default InfoCards;