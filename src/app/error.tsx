"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";
import SiteBackground from "@/components/site-background";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <SiteBackground />
      
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8">
          <AlertTriangle className="mx-auto h-16 w-16 text-red-400 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
            An unexpected error occurred. This has been logged and we'll look into it.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-8 text-left">
              <summary className="cursor-pointer text-white/60 hover:text-white/80 mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-xs text-red-300 bg-red-900/20 p-4 rounded-lg overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={reset}
            size="lg"
            className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}