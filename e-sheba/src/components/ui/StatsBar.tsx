export const StatsBar = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 grid grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">24/7</div>
        <div className="text-blue-100">Support</div>
      </div>
      <div className="text-center border-l border-r border-blue-500">
        <div className="text-4xl font-bold mb-2">100+</div>
        <div className="text-blue-100">Doctors</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">1M+</div>
        <div className="text-blue-100">Happy Patients</div>
      </div>
    </div>
  );
};
