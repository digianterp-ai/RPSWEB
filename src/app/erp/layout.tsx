import Sidebar from "@/components/erp/Sidebar";

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>

    </div>

  );
}