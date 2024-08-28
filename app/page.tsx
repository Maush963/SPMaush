"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O un loader/spinner si prefieres
  }

  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/> 
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </div>
   </main>
  );
}
