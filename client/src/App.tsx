import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import PasswordGate from "./components/PasswordGate";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DarkThemeProvider } from "./components/PresentationMode";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import KeyboardNav from "./components/KeyboardNav";

// Landing page loads immediately
import Landing from "./pages/Landing";

// Home page (longevity home) loads immediately for fast initial load
import Home from "./pages/Home";

// GTM Projects Landing
const GTMProjects = lazy(() => import("./pages/GTMProjects"));

// GTM section - Sample/Generic WEG consulting pages (now under /gtm/sample/)
const GTMHome = lazy(() => import("./pages/GTMHome"));
const GTMLinesOfBusiness = lazy(() => import("./pages/GTMLinesOfBusiness"));
const GTMB2B2C = lazy(() => import("./pages/GTMB2B2C"));
const GTMSales = lazy(() => import("./pages/GTMSales"));
const GTMLeads = lazy(() => import("./pages/GTMLeads"));
const GTMPartnerships = lazy(() => import("./pages/GTMPartnerships"));
const GTMResults = lazy(() => import("./pages/GTMResults"));
const GTMStrategicMarkets = lazy(() => import("./pages/GTMStrategicMarkets"));
const GTMGlobalMarkets = lazy(() => import("./pages/GTMGlobalMarkets"));
const GTMSalesInfrastructure = lazy(() => import("./pages/GTMSalesInfrastructure"));

// ZeroWheel GTM pages
const ZWOverview = lazy(() => import("./pages/zerowheel/ZWOverview"));
const ZWLinesOfBusiness = lazy(() => import("./pages/zerowheel/ZWLinesOfBusiness"));
const ZWSales = lazy(() => import("./pages/zerowheel/ZWSales"));
const ZWStrategicMarkets = lazy(() => import("./pages/zerowheel/ZWStrategicMarkets"));
const ZWGlobalMarkets = lazy(() => import("./pages/zerowheel/ZWGlobalMarkets"));
const ZWSalesInfrastructure = lazy(() => import("./pages/zerowheel/ZWSalesInfrastructure"));

const ProductIntelligence = lazy(() => import("./pages/ProductIntelligence"));
const VentureCapital = lazy(() => import("./pages/VentureCapital"));

// Lazy load all other pages for better code splitting
const About = lazy(() => import("./pages/About"));
const Opportunity = lazy(() => import("./pages/Opportunity"));
const Technology = lazy(() => import("./pages/Technology"));
const Therapeutics = lazy(() => import("./pages/Therapeutics"));
const Investors = lazy(() => import("./pages/Investors"));
const Team = lazy(() => import("./pages/Team"));
const UseOfFunds = lazy(() => import("./pages/UseOfFunds"));
const Projections = lazy(() => import("./pages/Projections"));
const Performance = lazy(() => import("./pages/Performance"));
const Contact = lazy(() => import("./pages/Contact"));
const Hiring = lazy(() => import("./pages/Hiring"));
const Memberships = lazy(() => import("./pages/Memberships"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DataRoom = lazy(() => import("./pages/DataRoom"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Luxury loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Animated gold line */}
        <div className="relative w-16 h-[2px] bg-black/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#C9A962] rounded-full"
            animate={{ x: ["-50%", "150%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="font-mono text-[10px] text-black/25 tracking-[0.2em] uppercase">Loading</p>
      </div>
    </div>
  );
}

function App() {
  // Get base path from Vite config for GitHub Pages deployment
  const basePath = import.meta.env.BASE_URL || "/";
  // Remove trailing slash for wouter base
  const base = basePath.endsWith('/') && basePath.length > 1 ? basePath.slice(0, -1) : basePath;
  
  return (
    <ErrorBoundary>
      <DarkThemeProvider>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <PasswordGate>
            <Router base={base === "/" ? "" : base}>
              <ScrollToTop />
              <BackToTop />
              <KeyboardNav />
              <Suspense fallback={<PageLoader />}>
                <Switch>
                  {/* New Landing Page - Front door */}
                  <Route path="/" component={Landing} />
                  
                  {/* GTM Projects Landing — Shows client tiles */}
                  <Route path="/gtm" component={GTMProjects} />
                  
                  {/* ZeroWheel GTM Project */}
                  <Route path="/gtm/zerowheel" component={ZWOverview} />
                  <Route path="/gtm/zerowheel/lines-of-business" component={ZWLinesOfBusiness} />
                  <Route path="/gtm/zerowheel/sales" component={ZWSales} />
                  <Route path="/gtm/zerowheel/strategic-markets" component={ZWStrategicMarkets} />
                  <Route path="/gtm/zerowheel/global-markets" component={ZWGlobalMarkets} />
                  <Route path="/gtm/zerowheel/sales-infrastructure" component={ZWSalesInfrastructure} />
                  
                  {/* Sample GTM Project (original generic content) */}
                  <Route path="/gtm/sample" component={GTMHome} />
                  <Route path="/gtm/sample/lines-of-business" component={GTMLinesOfBusiness} />
                  <Route path="/gtm/sample/b2b2c" component={GTMB2B2C} />
                  <Route path="/gtm/sample/sales" component={GTMSales} />
                  <Route path="/gtm/sample/leads" component={GTMLeads} />
                  <Route path="/gtm/sample/partnerships" component={GTMPartnerships} />
                  <Route path="/gtm/sample/results" component={GTMResults} />
                  <Route path="/gtm/sample/strategic-markets" component={GTMStrategicMarkets} />
                  <Route path="/gtm/sample/global-markets" component={GTMGlobalMarkets} />
                  <Route path="/gtm/sample/sales-infrastructure" component={GTMSalesInfrastructure} />
                  
                  {/* Product Intelligence Section */}
                  <Route path="/product-intelligence" component={ProductIntelligence} />
                  
                  {/* Venture & Product Capital Section */}
                  <Route path="/venture-capital" component={VentureCapital} />
                  
                  {/* Longevity Section - New prefixed routes */}
                  <Route path="/longevity" component={Home} />
                  <Route path="/longevity/about" component={About} />
                  <Route path="/longevity/opportunity" component={Opportunity} />
                  <Route path="/longevity/memberships" component={Memberships} />
                  <Route path="/longevity/therapeutics" component={Therapeutics} />
                  <Route path="/longevity/technology" component={Technology} />
                  <Route path="/longevity/performance" component={Performance} />
                  <Route path="/longevity/investors" component={Investors} />
                  <Route path="/longevity/team" component={Team} />
                  <Route path="/longevity/use-of-funds" component={UseOfFunds} />
                  <Route path="/longevity/projections" component={Projections} />
                  <Route path="/longevity/hiring" component={Hiring} />
                  <Route path="/longevity/faq" component={FAQ} />
                  <Route path="/longevity/data-room" component={DataRoom} />
                  <Route path="/longevity/contact" component={Contact} />
                  
                  {/* Legacy routes (backward compatibility) */}
                  <Route path="/about" component={About} />
                  <Route path="/opportunity" component={Opportunity} />
                  <Route path="/memberships" component={Memberships} />
                  <Route path="/therapeutics" component={Therapeutics} />
                  <Route path="/technology" component={Technology} />
                  <Route path="/performance" component={Performance} />
                  <Route path="/investors" component={Investors} />
                  <Route path="/team" component={Team} />
                  <Route path="/use-of-funds" component={UseOfFunds} />
                  <Route path="/projections" component={Projections} />
                  <Route path="/hiring" component={Hiring} />
                  <Route path="/faq" component={FAQ} />
                  <Route path="/data-room" component={DataRoom} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/404" component={NotFound} />
                  {/* Final fallback route */}
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </Router>
          </PasswordGate>
        </TooltipProvider>
      </ThemeProvider>
      </DarkThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
