export default function Loading() {

  return (

    <div className="space-y-8 animate-pulse">

      {/* Header */}

      <div className="h-10 bg-gray-200 rounded w-60"></div>


      {/* Stat Cards */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-gray-200 h-24 rounded-xl"></div>
        <div className="bg-gray-200 h-24 rounded-xl"></div>
        <div className="bg-gray-200 h-24 rounded-xl"></div>
        <div className="bg-gray-200 h-24 rounded-xl"></div>

      </div>


      {/* Charts */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-200 h-64 rounded-xl"></div>
        <div className="bg-gray-200 h-64 rounded-xl"></div>

      </div>


      {/* Recent Activity */}

      <div className="bg-gray-200 h-40 rounded-xl"></div>

    </div>

  );
}