import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden h-full md:flex w-52 z-50 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-52 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
