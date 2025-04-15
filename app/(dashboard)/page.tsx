import { FC } from "react";

interface DashboardPageProps {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}

const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
