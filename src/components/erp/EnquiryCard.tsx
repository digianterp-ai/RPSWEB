export default function EnquiryCard({ enquiry }: any) {

  return (
    <div className="bg-white p-6 rounded-xl shadow border">

      <h3 className="text-lg font-semibold">
        {enquiry.name}
      </h3>

      <p className="text-gray-600">
        {enquiry.email}
      </p>

      <p className="text-gray-600">
        {enquiry.phone}
      </p>

      <div className="mt-3 bg-gray-100 p-3 rounded">
        {enquiry.message}
      </div>

    </div>
  );
}