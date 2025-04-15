"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  CirclePlus,
  CoinsIcon,
  SendToBack,
  History,
  LifeBuoy,
  FileText,
  Sparkles,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { SidebarNavItem } from "@/lib/types";
import { FC } from "react";
import Link from "next/link";

import { toast } from "sonner";

interface AppSidebarProps {
  className?: string;
}

const menuItems: SidebarNavItem[] = [
  {
    title: "Create Token",
    href: "/",
    icon: CirclePlus,
  },
  {
    title: "Uncompressed",
    href: "/uncompressed",
    icon: CoinsIcon,
  },
  {
    title: "Airdrop",
    href: "/airdrop",
    icon: SendToBack,
  },
];

const AppSidebar: FC<AppSidebarProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-full ${className}`}
    >
      <Sidebar className="border-r border-border/40">
        <SidebarHeader className="py-6 px-6 border-b border-border/30">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">Caffeinator</h1>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-4 py-6">
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold uppercase tracking-wider px-3 mb-2 text-muted-foreground">
              Token Tools
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenu key={item.href}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.href)}
                    className={`font-medium w-full justify-start rounded-md transition-colors py-2 h-full px-4 text-base ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "hover:bg-accent/50 hover:text-accent-foreground"
                    }`}
                  >
                    {item.icon && (
                      <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    )}
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenu>
              ))}

              <div className="pt-1 pb-2">
                <SidebarGroupLabel className="text-xs font-medium px-3 mb-1 mt-2 text-muted-foreground">
                  Recent Activity
                </SidebarGroupLabel>
              </div>

              <SidebarMenu>
                <SidebarMenuButton
                  onClick={() => toast.error("Coming soon!")}
                  className={`font-medium w-full h-full justify-start rounded-md text-muted-foreground transition-colors py-2 px-2 text-base hover:bg-accent/50 hover:text-accent-foreground`}
                >
                  <History className="h-5 w-5 mr-3 flex-shrink-0" />
                  Recently Created
                </SidebarMenuButton>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 mt-auto border-t border-border/30">
          <SidebarMenu className="flex flex-col gap-2 mb-6">
            <SidebarMenuButton className="text-base font-medium w-full justify-start rounded-md py-2.5 px-3 transition-colors hover:bg-accent/50">
              <LifeBuoy className="h-5 w-5 mr-2 flex-shrink-0" />
              Support
            </SidebarMenuButton>
            <SidebarMenuButton className="text-base font-medium w-full justify-start rounded-md py-2.5 px-3 transition-colors hover:bg-accent/50">
              <FileText className="h-5 w-5 mr-2 flex-shrink-0" />
              Documentation
            </SidebarMenuButton>
          </SidebarMenu>

          <div className="border-t border-border/30 pt-4">
            <div className="flex items-center justify-center">
              <div className="flex gap-3">
                <Link href="https://x.com/caffeinator_bot" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:cursor-pointer hover:bg-accent/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="sr-only">Twitter/X</span>
                  </Button>
                </Link>
                <Link href="https://discord.com/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:cursor-pointer hover:bg-accent/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                    </svg>
                    <span className="sr-only">Discord</span>
                  </Button>
                </Link>
                <Link href="https://t.me/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:cursor-pointer hover:bg-accent/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                    </svg>
                    <span className="sr-only">Telegram</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
