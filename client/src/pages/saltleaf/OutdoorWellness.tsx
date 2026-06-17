import { useState } from "react";
import LightHero from "../../components/LightHero";
import Layout from "../../components/Layout";

const ACCENT = "#1a3e4c";

const locations = [
  {
    name: "Mandarin Oriental, Abu Dhabi",
    image: "/saltleaf/outdoor/mandarin-oriental-abudhabi.jpg",
    type: "Luxury Resort",
  },
  {
    name: "FIVE Palm Jumeirah, Dubai",
    image: "/saltleaf/outdoor/five-palm-dubai.webp",
    type: "Luxury Resort",
  },
  {
    name: "FIVE Luxe, Dubai",
    image: "/saltleaf/outdoor/five-luxe-dubai.jpg",
    type: "Luxury Resort",
  },
  {
    name: "Cocoon Maldives Resort",
    image: "/saltleaf/outdoor/cocoon-maldives.jpg",
    type: "Luxury Resort",
  },
  {
    name: "LUX Grand Baie, Mauritius",
    image: "/saltleaf/outdoor/lux-grand-baie-mauritius.webp",
    type: "Luxury Residential",
  },
  {
    name: "The Henley, Hong Kong",
    image: "/saltleaf/outdoor/henley-hong-kong.webp",
    type: "Luxury Residential",
  },
  {
    name: "National Museum, Singapore",
    image: "/saltleaf/outdoor/location-singapore.jpg",
    type: "Public Installation",
  },
  {
    name: "Lummus Park, Miami Beach",
    image: "/saltleaf/outdoor/location-miami-beach.webp",
    type: "Public Installation",
  },
  {
    name: "Barceloneta, Barcelona",
    image: "/saltleaf/outdoor/location-barcelona.webp",
    type: "Public Installation",
  },
  {
    name: "The Ellenikon Park, Athens",
    image: "/saltleaf/outdoor/location-athens.webp",
    type: "Public Installation",
  },
  {
    name: "Wellness Park, Madonna di Campiglio",
    image: "/saltleaf/outdoor/location-madonna-campiglio.jpg",
    type: "Public Installation",
  },
  {
    name: "Outdoor Wellness Park, Rimini",
    image: "/saltleaf/outdoor/location-rimini.jpg",
    type: "Public Installation",
  },
];

const solutions = [
  {
    name: "Performance Fitness",
    image: "/saltleaf/outdoor/solution-performance-fitness.jpg",
    description:
      "Fusion of calisthenics and functional training — enhancing strength, coordination, and cardiovascular health through nature-inspired outdoor equipment.",
  },
  {
    name: "Wellness",
    image: "/saltleaf/outdoor/solution-wellness.webp",
    description:
      "Where the path of fitness embraces the nourishment of the soul — a journey where self-discovery begins through mindful outdoor movement.",
  },
  {
    name: "Movability",
    image: "/saltleaf/outdoor/solution-movability.webp",
    description:
      "An innovative approach to enhancing wellbeing outdoors, transforming urban spaces into areas for physical activity and functional movement.",
  },
  {
    name: "Inclusivity",
    image: "/saltleaf/outdoor/solution-inclusivity.jpg",
    description:
      "Accessible training solutions for all abilities — keeping muscles active and helping people cope significantly better with everyday life.",
  },
  {
    name: "Longevity",
    image: "/saltleaf/outdoor/solution-longevity.jpg",
    description:
      "Safely frees physical movements for seniors, providing a complete satisfaction wellness experience designed for active aging.",
  },
  {
    name: "Youth",
    image: "/saltleaf/outdoor/solution-youth.webp",
    description:
      "Innovative training solutions for young athletes (ages 6–12) — structures that develop basic motor patterns typical of growth.",
  },
];

export default function OutdoorWellness() {
  const [activeTab, setActiveTab] = useState<"location" | "solution">("location");
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Outdoor Wellness"
        title="Outdoor Wellness Spaces"
        subtitle="Premium outdoor fitness and wellness installations by MyEquilibria — design-forward, nature-inspired equipment for luxury residential communities."
        accentColor={ACCENT}
      />

      {/* Hero Images — South Beach Installation */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/saltleaf/outdoor/hero-south-beach-1.webp"
              alt="MyEquilibria installation — Lummus Park, South Beach, Miami"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/saltleaf/outdoor/hero-south-beach-2.webp"
              alt="MyEquilibria outdoor fitness — South Beach, Miami at sunset"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4 font-body">MyEquilibria installation — Lummus Park, South Beach, Miami</p>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("location")}
            className={`pb-3 px-4 text-sm font-semibold tracking-wide uppercase transition-all ${
              activeTab === "location"
                ? "border-b-2 text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
            style={activeTab === "location" ? { borderColor: ACCENT } : {}}
          >
            By Location / Property
          </button>
          <button
            onClick={() => setActiveTab("solution")}
            className={`pb-3 px-4 text-sm font-semibold tracking-wide uppercase transition-all ${
              activeTab === "solution"
                ? "border-b-2 text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
            style={activeTab === "solution" ? { borderColor: ACCENT } : {}}
          >
            By Solution
          </button>
        </div>
      </div>

      {/* Location / Property Grid */}
      {activeTab === "location" && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-gray-600 mb-8 max-w-3xl">
            MyEquilibria has delivered 300+ installations across 30 countries. Below are select luxury resort, residential, and public installations that demonstrate the quality and design language applicable to Saltleaf's outdoor amenity spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: ACCENT, color: "white" }}
                  >
                    {loc.type}
                  </span>
                  <h3 className="text-white font-semibold mt-2 text-lg">
                    {loc.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Source attribution */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-3">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Source</span>
            <a
              href="https://myequilibria.com/commercial-luxury-fitness-equipment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              MyEquilibria — Commercial & Luxury
            </a>
            <span className="text-gray-300 mx-1">|</span>
            <a
              href="https://myequilibria.com/public-outdoor-fitness-equipment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              MyEquilibria — Public Outdoor
            </a>
          </div>
        </section>
      )}

      {/* Solution Categories */}
      {activeTab === "solution" && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-gray-600 mb-8 max-w-3xl">
            MyEquilibria organizes their outdoor wellness solutions into six categories. Each represents a distinct approach to outdoor fitness design — all applicable to Saltleaf's amenity programming.
          </p>

          {/* Solution Tab Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {solutions.map((sol, i) => (
              <button
                key={i}
                onClick={() => setActiveSolution(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSolution === i
                    ? "text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={
                  activeSolution === i
                    ? { backgroundColor: ACCENT }
                    : {}
                }
              >
                {sol.name}
              </button>
            ))}
          </div>

          {/* Active Solution Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={solutions[activeSolution].image}
                alt={solutions[activeSolution].name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {solutions[activeSolution].name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {solutions[activeSolution].description}
              </p>
              <div className="mt-6">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}
                >
                  Shawn's Recommendation
                </span>
              </div>
            </div>
          </div>

          {/* All Solutions Overview Grid */}
          <div className="mt-16">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">All Solution Categories</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {solutions.map((sol, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSolution(i)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    activeSolution === i ? "shadow-lg" : "border-transparent hover:border-gray-200"
                  }`}
                  style={activeSolution === i ? { borderColor: ACCENT } : {}}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium text-center py-2 text-gray-700">
                    {sol.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Source attribution */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-3">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Source</span>
            <a
              href="https://myequilibria.com/public-outdoor-fitness-equipment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: ACCENT }}
            >
              MyEquilibria — Public Outdoor Fitness
            </a>
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <section className="py-10 border-t border-gray-100">
        <div className="container max-w-7xl flex justify-between items-center">
          <a href="/longevity/saltleaf/level-3-wellness" className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
            ← Prev: Level 3 Wellness
          </a>
          <a href="/longevity/saltleaf/wellness-consultants" className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
            Next: Wellness Consultants →
          </a>
        </div>
      </section>
    </Layout>
  );
}
