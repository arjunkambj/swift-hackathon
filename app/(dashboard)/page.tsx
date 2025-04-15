"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LockIcon, UnlockIcon, PencilIcon, Globe, Tag } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const DashboardPage: FC = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8 gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-center">Solana Token Creator</h1>
        <p className="text-xl text-muted-foreground">
          Easily Create your own Solana SPL Token in just 7+1 steps without
          Coding.
        </p>
      </div>

      <Card className="w-full border-accent/20">
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Name
              </label>
              <Input placeholder="Ex: Solana" className="h-12 text-base" />
              <p className="text-sm text-muted-foreground">
                Max 32 characters in your name
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Symbol
              </label>
              <Input placeholder="Ex: SOL" className="h-12 text-base" />
              <p className="text-sm text-muted-foreground">
                Max 8 characters in your symbol
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Decimals
              </label>
              <Input
                type="number"
                defaultValue={6}
                className="h-12 text-base"
              />
              <p className="text-sm text-muted-foreground">
                Most token use 6 decimals
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Supply
              </label>
              <Input
                type="number"
                defaultValue={1}
                className="h-12 text-base"
              />
              <p className="text-sm text-muted-foreground">
                Most token use 1GB
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Description
              </label>
              <span className="text-sm text-muted-foreground">0/500</span>
            </div>
            <textarea
              placeholder="Ex: First community token on Solana..."
              className="min-h-[120px] w-full rounded-md border border-input bg-background px-4 py-3 text-base"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-base font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Image
              </label>
            </div>
            <div className="border-2 border-dashed rounded-lg p-8 text-center border-accent/40">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-red-500 text-lg">
                  Need to update this section
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">
                Add Social Links & Tags
              </h3>
              <Switch
                checked={showSocialLinks}
                onCheckedChange={setShowSocialLinks}
                className="scale-125"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Add links to your token metadata.
            </p>
          </div>

          {showSocialLinks && (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-base font-medium">Website:</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    className="pl-10 h-12 text-base"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium">Telegram:</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="h-5 w-5 text-muted-foreground"
                      fill="currentColor"
                    >
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                    </svg>
                  </div>
                  <Input
                    className="pl-10 h-12 text-base"
                    placeholder="https://t.me/"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium">Discord:</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-muted-foreground"
                      fill="currentColor"
                    >
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                    </svg>
                  </div>
                  <Input
                    className="pl-10 h-12 text-base"
                    placeholder="https://discord.com/"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium">Twitter:</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-muted-foreground"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <Input
                    className="pl-10 h-12 text-base"
                    placeholder="https://twitter.com/"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-base font-medium">Tags:</label>
                  <span className="text-sm text-muted-foreground">0/5</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    className="pl-10 h-12 text-base"
                    placeholder="Add a tag..."
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Maximum 5 Tags - Frequently used tags: meme, memecoin,
                  airdrop, token, nft, cat, dog
                </p>
              </div>
            </div>
          )}

          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Revoke Authorities</h3>
              <p className="text-sm text-muted-foreground">
                Solana Token has 3 authorities: Freeze Authority, Mint
                Authority, and Update Authority. Revoke them to attract more
                investors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border border-accent px-3">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <LockIcon className="h-5 w-5" />
                      Revoke Freeze
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 pt-0">
                    <p className="text-sm text-muted-foreground">
                      No one will be able to freeze holders' token accounts
                      anymore
                    </p>
                  </CardContent>
                  <CardFooter className="px-4 py-2 pt-0 flex justify-between">
                    <Switch className="scale-125" />
                    <span className="text-sm text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>

                <Card className="border border-accent px-3">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <UnlockIcon className="h-5 w-5" />
                      Revoke Mint
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 pt-0">
                    <p className="text-sm text-muted-foreground">
                      No one will be able to create more tokens anymore
                    </p>
                  </CardContent>
                  <CardFooter className="px-4 py-2 pt-0 flex justify-between">
                    <Switch className="scale-125" />
                    <span className="text-sm text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>

                <Card className="border border-accent px-3">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <PencilIcon className="h-5 w-5" />
                      Revoke Update
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 pt-0">
                    <p className="text-sm text-muted-foreground">
                      No one will be able to modify token metadata anymore
                    </p>
                  </CardContent>
                  <CardFooter className="px-4 py-2 pt-0 flex justify-between">
                    <Switch className="scale-125" />
                    <span className="text-sm text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-8 flex flex-col gap-4">
          <Button size="lg" className="h-14 w-full text-base">
            Connect Wallet
          </Button>
          <div className="text-right">
            <span className="text-base font-semibold">
              Total fees: 0.15 SOL{" "}
            </span>
            <span className="text-sm text-muted-foreground">
              + Network fees
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
