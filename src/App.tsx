
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tickets from "./pages/Tickets";
import Team from "./pages/Team";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tickets" element={
            <MainLayout>
              <Tickets />
            </MainLayout>
          } />
          <Route path="/team" element={
            <MainLayout>
              <Team />
            </MainLayout>
          } />
          <Route path="/reports" element={
            <MainLayout>
              <Reports />
            </MainLayout>
          } />
          <Route path="/settings" element={
            <MainLayout>
              <Settings />
            </MainLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
