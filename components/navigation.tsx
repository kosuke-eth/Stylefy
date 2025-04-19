"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-black dark:text-white">AI Fashion Assistant</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/products"
              className={pathname === "/products" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}
            >
              商品一覧
            </Link>
            <Link
              href="/chat"
              className={pathname === "/chat" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}
            >
              AIチャット
            </Link>
            <a
              href="https://aa-nu-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400"
            >
              Dressing AI
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" className="p-2 rounded-full">
            <ShoppingCart className="h-6 w-6 text-black dark:text-white" />
            <span className="sr-only">カート</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

