"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Upload, FileText, Download } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const AirdropPage: FC = () => {
  const [distributionMethod, setDistributionMethod] = useState<
    "same" | "different"
  >("same");
  const [addresses, setAddresses] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type !== "text/csv") {
      toast.error("Please upload a CSV file");
      return;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8 gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-center">Solana Multisender</h1>
        <p className="text-xl text-muted-foreground">
          Easily send any Solana Token to hundreds wallets without Coding. Only
          0.001 SOL per wallet
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-destructive mr-1">*</span> Token to
                Airdrop:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="bg-background border border-input text-foreground text-base rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3 h-12"
                  placeholder="Connect your wallet please"
                  disabled
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-destructive mr-1">*</span> Amount per
                Wallet:
              </label>
              <div className="flex gap-2">
                <Button
                  variant={
                    distributionMethod === "same" ? "default" : "outline"
                  }
                  onClick={() => setDistributionMethod("same")}
                  className="flex-1 h-12 text-base"
                >
                  Same
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 text-base"
                  onClick={() => toast.error("Coming Soon")}
                >
                  Different
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium flex items-center">
                <span className="text-destructive mr-1">*</span> Quantity per
                Wallet:
              </label>
              <Input
                type="number"
                defaultValue={0}
                className="h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-base font-medium">
                Method to load Addresses:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-primary">
                  <CardContent className="p-4 flex flex-col items-center">
                    <FileText className="h-7 w-7 mb-2 text-primary" />
                    <p className="text-base font-medium">CSV File</p>
                  </CardContent>
                </Card>

                <Card className="opacity-60 border border-accent">
                  <CardContent className="p-4 flex flex-col items-center relative">
                    <FileText className="h-7 w-7 mb-2" />
                    <p className="text-base font-medium text-muted-foreground">
                      Token Holders
                    </p>
                    <p className="text-base">coming soon</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-base font-medium flex items-center">
                <span className="text-destructive mr-1">*</span> Address
              </label>
              <div className="text-sm text-muted-foreground">
                <span>0 Wallets</span>
                <span className="ml-2">0 Invalid</span>
              </div>
            </div>
            <Textarea
              placeholder="Type wallet addresses here..."
              className="min-h-[180px] text-base p-4"
              value={addresses}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAddresses(e.target.value)
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 h-12 text-base"
              onClick={() => document.getElementById("csvFileUpload")?.click()}
            >
              <Upload className="h-5 w-5" />
              Upload CSV or TXT
              <input
                id="csvFileUpload"
                type="file"
                accept=".csv,.txt"
                className="hidden"
                onChange={handleFileChange}
              />
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-12 text-base"
            >
              <Download className="h-5 w-5" />
              Download Example
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <label className="text-base font-medium flex items-center">
              <span className="text-destructive mr-1">*</span> Send Time:
            </label>
            <RadioGroup defaultValue="now" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="now" id="now" className="scale-125" />
                <Label htmlFor="now" className="text-base">
                  Send Now
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="schedule"
                  id="schedule"
                  className="scale-125"
                />
                <Label
                  htmlFor="schedule"
                  className="text-base text-muted-foreground"
                >
                  Schedule Airdrop
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mt-8">
            <div>
              <p className="text-base text-muted-foreground">Sending</p>
              <p className="text-2xl font-bold">
                <span className="text-primary">0</span> Tokens
              </p>
            </div>
            <div>
              <p className="text-base text-muted-foreground">Total Wallets</p>
              <p className="text-2xl font-bold">
                <span className="text-primary">0</span>
              </p>
            </div>
            <div>
              <p className="text-base text-muted-foreground">Total Tx Fees</p>
              <p className="text-2xl font-bold">
                <span className="text-primary">0.00 SOL</span>
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-8 flex-col gap-4">
          <Button size="lg" className="w-full h-14 text-base">
            Send
          </Button>
          <p className="text-sm text-muted-foreground">
            Fee: 0.001 SOL per wallet
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AirdropPage;
