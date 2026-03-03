"use client";

export default function ProcessPage() {
  return (
    <>
      <section className="w-full bg-blue-600 text-white py-28 text-center">
        <h1 className="text-4xl font-bold">Admission Process</h1>
      </section>

      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-8 space-y-8">

          <div>
            <h3 className="font-semibold text-lg text-blue-600">Step 1</h3>
            <p className="text-gray-600">Submit enquiry form or visit school office.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-blue-600">Step 2</h3>
            <p className="text-gray-600">Interaction / Assessment (if applicable).</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-blue-600">Step 3</h3>
            <p className="text-gray-600">Document verification and confirmation.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-blue-600">Step 4</h3>
            <p className="text-gray-600">Fee payment and admission confirmation.</p>
          </div>

        </div>
      </section>
    </>
  );
}