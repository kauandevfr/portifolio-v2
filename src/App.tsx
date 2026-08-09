import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import Index from "./pages/Index";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.045,
      wheelMultiplier: 1.2,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.05,
      autoRaf: true,
      anchors: true,
      respectReducedMotion: false,
    });

    (window as any).__lenis = lenis;
    console.log("🚀 Lenis inicializado:", lenis);
    console.log("🔍 isSmooth:", lenis.isSmooth);
    console.log("🔍 isStopped:", lenis.isStopped);
    console.log("🔍 prefersReducedMotion:", lenis.prefersReducedMotion);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/links" element={<Links />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
