import Navbar from "@/components/dashboard/Navbar";
import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
