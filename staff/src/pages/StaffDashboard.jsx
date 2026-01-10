const StaffDashboard = () => {
  // TEMP dummy data (replace with API later)
  const nowPreparing = {
    token: "TK-104",
    items: "Dosa, Tea",
    startedAt: "2026-01-09T16:30:00"
  };

  const minutesAgo = Math.floor(
    (Date.now() - new Date(nowPreparing.startedAt)) / 60000
  );

  return (
    <div className="p-6 pt-28">
      <h2 className="text-3xl font-bold mb-6">Staff Dashboard</h2>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Active Orders</p>
          <h3 className="text-2xl font-bold">8</h3>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Today Revenue</p>
          <h3 className="text-2xl font-bold">₹3,980</h3>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Crowd Level</p>
          <h3 className="text-xl font-semibold text-orange-500">
            Medium 🟡
          </h3>
        </div>
      </div>

      {/* NOW PREPARING */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
        <p className="text-sm text-gray-600">🔄 Now Preparing</p>
        <h3 className="text-xl font-bold">
          Token: {nowPreparing.token}
        </h3>
        <p className="text-gray-700">
          {nowPreparing.items}
        </p>
        <p className="text-sm text-gray-500">
          Started {minutesAgo} mins ago
        </p>
      </div>
    </div>
  );
};

export default StaffDashboard;