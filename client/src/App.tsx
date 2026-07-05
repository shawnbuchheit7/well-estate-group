import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import PasswordGate from "./components/PasswordGate";
import ZWPasswordGate from "./components/ZWPasswordGate";
import LongevityPasswordGate from "./components/LongevityPasswordGate";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DarkThemeProvider } from "./components/PresentationMode";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import KeyboardNav from "./components/KeyboardNav";
import AnalyticsProvider from "./components/AnalyticsProvider";

// Landing page loads immediately
import Landing from "./pages/Landing";

// Home page (longevity home) loads immediately for fast initial load
import Home from "./pages/Home";

// Longevity Projects Landing (multi-model view)
const TheEstate = lazy(() => import("./pages/TheEstate"));
const LongevityProjects = lazy(() => import("./pages/LongevityProjects"));
const LongevityPerformanceModel = lazy(() => import("./pages/LongevityPerformanceModel"));
const LongevityFranchisePortal = lazy(() => import("./pages/LongevityFranchisePortal"));
const Saltleaf = lazy(() => import("./pages/Saltleaf"));
const SaltleafWellnessConsultants = lazy(() => import("./pages/saltleaf/WellnessConsultants"));
const SaltleafLongevitySuite = lazy(() => import("./pages/saltleaf/LongevitySuite"));
const SaltleafFitnessLayout = lazy(() => import("./pages/saltleaf/FitnessLayout"));
const SaltleafLevel3Wellness = lazy(() => import("./pages/saltleaf/Level3Wellness"));
const SaltleafOutdoorWellness = lazy(() => import("./pages/saltleaf/OutdoorWellness"));

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
const ZWSalesInfrastructure = lazy(() => import("./pages/zerowheel/ZWSalesInfrastructure"));
const ZWBusinessIntelligence = lazy(() => import("./pages/zerowheel/ZWBusinessIntelligence"));
const ZWProductAnalysis = lazy(() => import("./pages/zerowheel/ZWProductAnalysis"));
const ZWCommercialStrategy = lazy(() => import("./pages/zerowheel/ZWCommercialStrategy"));
const ZWB2B2C = lazy(() => import("./pages/zerowheel/ZWB2B2C"));
const ZWMarketingInfrastructure = lazy(() => import("./pages/zerowheel/ZWMarketingInfrastructure"));
const ZWAffiliateProgram = lazy(() => import("./pages/zerowheel/ZWAffiliateProgram"));

const ProductsLanding = lazy(() => import("./pages/ProductsLanding"));
const ProductIntelligence = lazy(() => import("./pages/ProductIntelligence"));
const CorporateHealth = lazy(() => import("./pages/CorporateHealth"));
const VentureCapital = lazy(() => import("./pages/VentureCapital"));
const CapTablePlatform = lazy(() => import("./pages/CapTablePlatform"));

// Lazy load all other pages for better code splitting
const About = lazy(() => import("./pages/About"));
const Opportunity = lazy(() => import("./pages/Opportunity"));
const Technology = lazy(() => import("./pages/Technology"));
const TechEcosystem = lazy(() => import("./pages/TechEcosystem"));
const DigitalHealthTwin = lazy(() => import("./pages/DigitalHealthTwin"));
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
            className="absolute inset-y-0 left-0 w-1/2 bg-[#B8860B] rounded-full"
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
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          <Toaster />
          <PasswordGate>
            <Router base={base === "/" ? "" : base}>
              <ScrollToTop />
              <BackToTop />
              <KeyboardNav />
              <AnalyticsProvider />
              <Suspense fallback={<PageLoader />}>
                <Switch>
                  {/* New Landing Page - Front door */}
                  <Route path="/" component={Landing} />
                  
                  {/* GTM Projects Landing — Shows client tiles */}
                  <Route path="/gtm" component={GTMProjects} />
                  
                  {/* ZeroWheel GTM Project — protected by separate ZW password */}
                  <Route path="/gtm/zerowheel" component={() => <ZWPasswordGate><ZWOverview /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/product-analysis" component={() => <ZWPasswordGate><ZWProductAnalysis /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/lines-of-business" component={() => <ZWPasswordGate><ZWLinesOfBusiness /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/sales" component={() => <ZWPasswordGate><ZWSales /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/commercial-strategy" component={() => <ZWPasswordGate><ZWCommercialStrategy /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/strategic-markets" component={() => <ZWPasswordGate><ZWStrategicMarkets /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/sales-infrastructure" component={() => <ZWPasswordGate><ZWSalesInfrastructure /></ZWPasswordGate>} />
                  <Route path="/gtm/zerowheel/marketing-infrastructure" component={() => <ZWPasswordGate><ZWMarketingInfrastructure /></ZWPasswordGate>} />
                  {/* Redirects for consolidated tabs */}
                  <Route path="/gtm/zerowheel/business-intelligence">{() => <Redirect to="/gtm/zerowheel/sales-infrastructure" />}</Route>
                  <Route path="/gtm/zerowheel/affiliate-program">{() => <Redirect to="/gtm/zerowheel/marketing-infrastructure" />}</Route>
                  <Route path="/gtm/zerowheel/b2b2c">{() => <Redirect to="/gtm/zerowheel/sales" />}</Route>
                  
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
                  <Route path="/product-intelligence" component={ProductsLanding} />
                  <Route path="/product-intelligence/t-spine" component={ProductIntelligence} />
                  <Route path="/product-intelligence/corporate-health" component={CorporateHealth} />
                  
                  {/* Venture & Product Capital Section */}
                  <Route path="/venture-capital" component={VentureCapital} />

                  {/* Cap Table Platform — a Well Estate Group service */}
                  <Route path="/cap-table" component={CapTablePlatform} />
                  
                  {/* Longevity Section - Projects Landing (multi-model) */}
                  <Route path="/longevity" component={() => <LongevityPasswordGate><LongevityProjects /></LongevityPasswordGate>} />
                  
                  {/* Longevity Luxury Model (original content) */}
                  <Route path="/longevity/luxury" component={() => <LongevityPasswordGate><Home /></LongevityPasswordGate>} />
                  <Route path="/longevity/about" component={() => <LongevityPasswordGate><About /></LongevityPasswordGate>} />
                  <Route path="/longevity/opportunity" component={() => <LongevityPasswordGate><Opportunity /></LongevityPasswordGate>} />
                  <Route path="/longevity/memberships" component={() => <LongevityPasswordGate><Memberships /></LongevityPasswordGate>} />
                  <Route path="/longevity/therapeutics" component={() => <LongevityPasswordGate><Therapeutics /></LongevityPasswordGate>} />
                  <Route path="/longevity/technology" component={() => <LongevityPasswordGate><Technology /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance" component={() => <LongevityPasswordGate><Performance /></LongevityPasswordGate>} />
                  <Route path="/longevity/investors" component={() => <LongevityPasswordGate><Investors /></LongevityPasswordGate>} />
                  <Route path="/longevity/team" component={() => <LongevityPasswordGate><Team /></LongevityPasswordGate>} />
                  <Route path="/longevity/use-of-funds" component={() => <LongevityPasswordGate><UseOfFunds /></LongevityPasswordGate>} />
                  <Route path="/longevity/projections" component={() => <LongevityPasswordGate><Projections /></LongevityPasswordGate>} />
                  <Route path="/longevity/hiring" component={() => <LongevityPasswordGate><Hiring /></LongevityPasswordGate>} />
                  <Route path="/longevity/faq" component={() => <LongevityPasswordGate><FAQ /></LongevityPasswordGate>} />
                  
                  {/* Saltleaf on Estero Bay */}
                  <Route path="/longevity/saltleaf" component={() => <LongevityPasswordGate><Saltleaf /></LongevityPasswordGate>} />
                  <Route path="/longevity/saltleaf/wellness-consultants" component={() => <LongevityPasswordGate><SaltleafWellnessConsultants /></LongevityPasswordGate>} />
                  <Route path="/longevity/saltleaf/longevity-suite" component={() => <LongevityPasswordGate><SaltleafLongevitySuite /></LongevityPasswordGate>} />
                  <Route path="/longevity/saltleaf/fitness-layout" component={() => <LongevityPasswordGate><SaltleafFitnessLayout /></LongevityPasswordGate>} />
                  <Route path="/longevity/saltleaf/level-3-wellness" component={() => <LongevityPasswordGate><SaltleafLevel3Wellness /></LongevityPasswordGate>} />
                  <Route path="/longevity/saltleaf/outdoor-wellness" component={() => <LongevityPasswordGate><SaltleafOutdoorWellness /></LongevityPasswordGate>} />

                  {/* The Estate Model */}
                  <Route path="/longevity/estate" component={() => <LongevityPasswordGate><TheEstate /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/about" component={() => <LongevityPasswordGate><About /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/opportunity" component={() => <LongevityPasswordGate><Opportunity /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/memberships" component={() => <LongevityPasswordGate><Memberships /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/therapeutics" component={() => <LongevityPasswordGate><Therapeutics /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/technology" component={() => <LongevityPasswordGate><Technology /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/projections" component={() => <LongevityPasswordGate><Projections /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/team" component={() => <LongevityPasswordGate><Team /></LongevityPasswordGate>} />
                  <Route path="/longevity/estate/faq" component={() => <LongevityPasswordGate><FAQ /></LongevityPasswordGate>} />

                  {/* Longevity Franchise Portal */}
                  <Route path="/longevity/franchise-portal" component={() => <LongevityPasswordGate><LongevityFranchisePortal /></LongevityPasswordGate>} />

                  {/* Longevity Performance Model */}
                  <Route path="/longevity/performance-model" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/about" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/platform" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/products" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/partnerships" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/diagnostics" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/hospitality" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/performance-model/academy" component={() => <LongevityPasswordGate><LongevityPerformanceModel /></LongevityPasswordGate>} />
                  <Route path="/longevity/data-room" component={() => <LongevityPasswordGate><DataRoom /></LongevityPasswordGate>} />
                  <Route path="/longevity/contact" component={() => <LongevityPasswordGate><Contact /></LongevityPasswordGate>} />
                  
                  {/* Legacy routes (backward compatibility) */}
                  <Route path="/about" component={About} />
                  <Route path="/opportunity" component={Opportunity} />
                  <Route path="/memberships" component={Memberships} />
                  <Route path="/therapeutics" component={Therapeutics} />
                  <Route path="/technology" component={Technology} />
                  <Route path="/technology/ecosystem" component={TechEcosystem} />
                  <Route path="/technology/digital-health-twin" component={DigitalHealthTwin} />
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
