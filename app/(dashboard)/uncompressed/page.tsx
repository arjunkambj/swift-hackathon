"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

const UncompressedTokenPage: FC = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-8 gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-center">Uncompressed Token</h1>
        <p className="text-xl text-muted-foreground">
          Need to update this section
        </p>
      </div>

      <Card className="w-full border-accent/20">
        <CardContent className="p-8 space-y-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-6 mb-4">
            <div className="flex gap-3">
              <ShieldAlert className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-blue-800 dark:text-blue-400">
                  About Uncompressed Tokens
                </h4>
                <p className="text-base text-blue-700 dark:text-blue-300 mt-2">
                  We are working on this section. we will update it soon.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UncompressedTokenPage;
