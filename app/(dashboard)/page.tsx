import { FC } from "react";
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
import { TokenFormValues } from "@/lib/types";
import { Upload, LockIcon, UnlockIcon, PencilIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const DashboardPage: FC = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-8 gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-center">Solana Token Creator</h1>
        <p className="text-muted-foreground">
          Easily Create your own Solana SPL Token in just 7+1 steps without
          Coding.
        </p>
      </div>

      <Card className="w-full border-accent/20">
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Name
              </label>
              <Input placeholder="Ex: Solana" />
              <p className="text-xs text-muted-foreground">
                Max 32 characters in your name
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Symbol
              </label>
              <Input placeholder="Ex: SOL" />
              <p className="text-xs text-muted-foreground">
                Max 8 characters in your symbol
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Decimals
              </label>
              <Input type="number" defaultValue={6} />
              <p className="text-xs text-muted-foreground">
                Most token use 6 decimals
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Supply
              </label>
              <Input type="number" defaultValue={1} />
              <p className="text-xs text-muted-foreground">
                Most token use 1GB
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Description
              </label>
              <span className="text-xs text-muted-foreground">0/500</span>
            </div>
            <textarea
              placeholder="Ex: First community token on Solana..."
              className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span> Image
              </label>
            </div>
            <div className="border-2 border-dashed rounded-lg p-8 text-center border-accent/40">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-red-500 ">Need to update this section</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Add Social Links & Tags</h3>
              <Switch />
            </div>
            <p className="text-xs text-muted-foreground">
              Add links to your token metadata.
            </p>
          </div>
          i
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Revoke Authorities</h3>
              <p className="text-xs text-muted-foreground">
                Solana Token has 3 authorities: Freeze Authority, Mint
                Authority, and Update Authority. Revoke them to attract more
                investors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border border-accent/20">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <LockIcon className="h-4 w-4" />
                      Revoke Freeze
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground">
                      No one will be able to freeze holders' token accounts
                      anymore
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Switch />
                    <span className="text-xs text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>

                <Card className="border border-accent/20">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <UnlockIcon className="h-4 w-4" />
                      Revoke Mint
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground">
                      No one will be able to create more tokens anymore
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Switch />
                    <span className="text-xs text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>

                <Card className="border border-accent/20">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <PencilIcon className="h-4 w-4" />
                      Revoke Update
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground">
                      No one will be able to modify token metadata anymore
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Switch />
                    <span className="text-xs text-muted-foreground">
                      +0.1 SOL
                    </span>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900 flex flex-col gap-4">
          <Button size="lg">Connect Wallet</Button>
          <div className="text-right">
            <span className="text-sm font-semibold">Total fees: 0.15 SOL </span>
            <span className="text-xs text-muted-foreground">
              + Network fees
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
