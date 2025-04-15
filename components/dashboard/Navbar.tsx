"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../ThemeToggle";
import { Wallet } from "lucide-react";
import { FC } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex items-center justify-between px-6 py-4 h-16">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="h-10 w-10" />
          <h2 className="text-xl font-semibold ml-2 hidden md:block">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            size="lg"
            className="h-10 px-5 font-medium flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            <span>Connect Wallet</span>
          </Button>
        </div>
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default Navbar;
