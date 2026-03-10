"use client";


export default function EnquiryList({ enquiries }: any) {

  const convertEnquiry = async (id: string) => {

    await fetch("/api/enquiries/convert", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        enquiryId: id
      })

    });

    location.reload();

  };

  const deleteEnquiry = async (id: string) => {

    await fetch("/api/enquiries/delete", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        id
      })

    });

    location.reload();

  };

  if (!enquiries.length) {

    return (
      <div className="bg-white p-10 rounded-xl shadow text-center">
        No enquiries yet.
      </div>
    );

  }

  return (

    <div className="grid md:grid-cols-2 gap-6">

      {enquiries.map((e: any) => (

        <div
          key={e.id}
          className="bg-white p-6 rounded-xl shadow border"
        >

          {/* Name */}
          <h2 className="text-xl font-semibold text-[#0B1F3A] mb-2">
            {e.name}
          </h2>

          {/* Email */}
          <p className="text-gray-600 text-sm mb-1">
            📧 {e.email}
          </p>

          {/* Phone */}
          <p className="text-gray-600 text-sm mb-4">
            📞 {e.phone || "No phone"}
          </p>

          {/* Message */}
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="text-gray-700">
              {e.message}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
              {e.status}
            </span>

            <span className="text-xs text-gray-400">
              {new Date(e.createdAt).toLocaleDateString()}
            </span>

          </div>

          {/* Actions */}

          <div className="flex gap-3 mt-4">

            <button
              onClick={() => convertEnquiry(e.id)}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Convert
            </button>

            <button
              onClick={() => deleteEnquiry(e.id)}
              className="bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}