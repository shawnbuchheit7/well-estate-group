import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

// Recommendation 1: Dynamic imports for code-splitting
// Home page loads immediately for fast initial load
import Home from "./pages/Home";

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

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground font-body text-sm">Loading...</p>
      </div>
    </div>
  );
}

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
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
  );
}

function App() {
  // Get base path from Vite config for GitHub Pages deployment
  const basePath = import.meta.env.BASE_URL || "/";
  // Remove trailing slash for wouter base
  const base = basePath.endsWith('/') && basePath.length > 1 ? basePath.slice(0, -1) : basePath;
  
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={base === "/" ? "" : base}>
            <ScrollToTop />
            <Routes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
