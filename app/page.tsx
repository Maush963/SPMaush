"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Problem from "@/components/Problem";
import { StarsBackground } from "@/components/ui/stars-background";
import PerfectSolution from "@/components/PerfectSolution";


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O un loader/spinner si prefieres
  }

  return (
   <main className="relative bg-slate flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <StarsBackground className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <FloatingNav navItems={navItems} />
          <Hero />
          <PerfectSolution />
          <RecentProjects />
          <Problem />
          <Footer />
        </div>
    </div>
   </main>
  );
}
