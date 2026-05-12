/*
 * ZeroWheel Product Analysis & GTM Playbook
 * Three Pillars of Superiority, Product Deep Dive, LOB-specific marketing strategies, and strategic recommendations
 * Pricing: $1,095 MSRP | $825 Vertical (max 25% off) | $695 Commercial (max 40% off) | $694 Military/Gov (GSA best)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package, Target, Dumbbell, Building2, Stethoscope, Ship, Shield, Users,
  Zap, CheckCircle2, ArrowRight, Star, Lightbulb, TrendingUp, ChevronDown,
  ChevronUp, Crosshair, MessageSquare, BarChart3, Globe, Layers, Award,
  BookOpen, Megaphone, UserCheck, AlertTriangle, Activity, DollarSign,
  Cpu, Battery, Ruler, Weight, Quote, Heart, Flame, Wind, Waves
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import NextPageCTA from "@/components/NextPageCTA";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "product-deep-dive", label: "Product Deep Dive" },
  { id: "three-pillars", label: "Three Pillars" },
  { id: "competitive-matrix", label: "Competitive Matrix" },
  { id: "validation", label: "Validation" },
  { id: "lob-navigator", label: "LOB Navigator" },
  { id: "lob-playbooks", label: "LOB Playbooks" },
  { id: "leverage-points", label: "Leverage Points" },
  { id: "cross-lob", label: "Cross-LOB Synergies" },
  { id: "recommendations", label: "Recommendations" },
];

/* ─── Product Specs ─── */
const specs = [
  { label: "Weight", value: "12.2 lbs", sub: "5.5 kg", icon: Weight },
  { label: "Dimensions", value: "18\" x 8.4\" x 8.4\"", sub: "L x W x H", icon: Ruler },
  { label: "Max Torque", value: "10.5 N·m", sub: "magnetic resistance", icon: Zap },
  { label: "Battery Life", value: "1 week", sub: "4 hrs continuous", icon: Battery },
  { label: "Technology", value: "CARE", sub: "Connected Adaptive Resistance", icon: Cpu },
  { label: "Compliance", value: "GSA", sub: "Made in USA", icon: Shield },
];

/* ─── Four Intelligent Modes ─── */
const modes = [
  {
    name: "Springback",
    type: "Assistance",
    icon: Heart,
    color: "#4CAF50",
    description: "Braces body weight and springs the user back to starting position. Ideal for beginners and rehabilitation patients who need graduated assistance to safely perform core exercises.",
    audience: "Beginners, rehabilitation patients, deconditioned populations",
  },
  {
    name: "Aero",
    type: "Assistance",
    icon: Wind,
    color: "#2196F3",
    description: "Propels the user through the motion for aerobic, high-volume core training. Enables sustained cardiovascular-focused core work with reduced fatigue accumulation.",
    audience: "Cardio-focused users, group fitness classes, endurance athletes",
  },
  {
    name: "Quicksand",
    type: "Resistance",
    icon: Waves,
    color: "#FF9800",
    description: "Fights against user velocity — the faster you move, the harder it resists. Delivers low-impact, velocity-dependent resistance ideal for seasoned athletes seeking controlled eccentric loading.",
    audience: "Intermediate to advanced athletes, sports performance training",
  },
  {
    name: "Burn",
    type: "Resistance",
    icon: Flame,
    color: "#F44336",
    description: "Generates maximum torque at 10.5 N·m for the most demanding core strength development. The ultimate challenge mode for elite athletes and tactical operators.",
    audience: "Elite athletes, tactical operators, advanced strength training",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Aroldis Chapman",
    title: "Boston Red Sox, 8x MLB All-Star Pitcher",
    quote: "One of the best devices I've been able to try, and it's the one I choose to use.",
    category: "Sports Performance",
  },
  {
    name: "James Mathis",
    title: "US Army, Chief of Sports, Fitness & Aquatics",
    quote: "An exceptional piece of equipment for a diverse population.",
    category: "Military & Government",
  },
  {
    name: "Justin Lovett",
    title: "Los Angeles Rams, Director of S&C",
    quote: "A must-have in any gym setting.",
    category: "Sports Performance",
  },
  {
    name: "Steve Boring, PhD",
    title: "Rochester Athletic Club, Fitness Director",
    quote: "A natural fit for members who don't fit traditional machines.",
    category: "Commercial Clubs",
  },
  {
    name: "Carl Hardwick",
    title: "proof3, Co-founder",
    quote: "Scalable, functional core training better than anything else.",
    category: "Industry Expert",
  },
];

/* ─── Three Pillars Data ─── */
const pillars = [
  {
    number: "01",
    title: "The Rollout Mechanism",
    subtitle: "Anti-Extension",
    icon: Activity,
    color: "#B8860B",
    science: "EMG studies consistently rank the rollout pattern at the top of the hierarchy for core muscle activation. Research published in the Journal of Human Kinetics demonstrated activation levels exceeding 60% of maximal voluntary contraction — dramatically outperforming traditional crunches.",
    why: "The rollout is an anti-extension exercise. Instead of simply flexing the spine, the core must fire maximally to prevent hyperextension as the body lengthens. This eccentric loading recruits more muscle fibers and builds functional stability that translates directly to athletic performance and injury prevention.",
    citations: ["Journal of Human Kinetics, 2017", "American Council on Exercise, 2014"],
    marketingAngle: "\"The most effective core movement pattern in exercise science — and ZeroWheel is the only device that perfects it.\"",
  },
  {
    number: "02",
    title: "Added Resistance",
    subtitle: "Progressive Overload",
    icon: TrendingUp,
    color: "#B8860B",
    science: "The abdominal muscles are skeletal muscles identical in composition to the biceps or chest — they require progressive overload to grow. Studies show that without adding external resistance, users build endurance rather than true strength or hypertrophy. Greatest rectus abdominis activity occurs when external loads are applied.",
    why: "ZeroWheel solves the \"bodyweight ceiling\" problem with a motor providing up to 40 lbs of magnetic resistance. Users can treat core training like any other major lift — systematically increasing load to force continuous adaptation and growth.",
    citations: ["RP Strength, 2024", "International Journal of Environmental Research and Public Health, 2020"],
    marketingAngle: "\"40 lbs of magnetic resistance. Because your core deserves the same progressive overload as every other muscle.\"",
  },
  {
    number: "03",
    title: "Exercise Variance",
    subtitle: "Adaptive Resistance Prevention",
    icon: Layers,
    color: "#B8860B",
    science: "Scientific literature confirms that exercise variation is critical for long-term muscular development. A phenomenon known as 'adaptive resistance' occurs when the body becomes so efficient at a specific movement that it stops adapting. Systematic reviews show that varying exercises promotes superior hypertrophy.",
    why: "A traditional ab roller does one thing. ZeroWheel enables rollouts, planks, pikes, knee tucks, and rotational oblique movements. By changing the angle, load, and movement pattern, ZeroWheel stimulates the core from every vector — preventing plateaus and ensuring continuous progress.",
    citations: ["Sports Medicine, 2022", "PLoS One, 2019"],
    marketingAngle: "\"One device. Infinite variations. Your core never adapts — it only grows.\"",
  },
];

/* ─── LOB Playbook Data ─── */
const lobPlaybooks = [
  {
    icon: Star,
    lob: "Private Clubs",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#B8860B",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "The Fitness Director at luxury private clubs (country clubs, athletic clubs, social clubs), influenced by the Head Golf Professional, Tennis Pro, GM, and Board of Directors. Decision-maker focused on member retention, exclusivity, and delivering personalized, technology-driven experiences.",
    positioning: "A bespoke, data-driven core training experience exclusive to the club. ZeroWheel reinforces the club's technology-forward brand identity while enabling personal trainers to offer premium one-on-one sessions with real-time performance tracking. Uniquely positioned for golf, tennis, and pickleball-specific exercise routines — members at country clubs want to stay healthy so they can continue their favorite activities. ZeroWheel also supports shoulder range-of-motion improvement and rehabilitation. For golfers specifically, core strength is directly linked to increased drive distance — a powerful selling point in the private club environment.",
    painPoints: ["Members expect personalized, technology-driven experiences", "Traditional equipment fails to deliver novelty or exclusivity", "Retention depends on continuously elevating the member experience"],
    keySellingPoints: ["Sleek design and premium aesthetic", "App-driven personalization", "Exclusivity factor for member retention", "Trainer-led programming potential"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Offer your members the most effective core exercise in science — guided, motorized, and exclusive to your club.\"" },
      { pillar: "Progressive Overload", angle: "\"From your newest member to your most elite athlete — one device scales to every level with real-time tracking.\"" },
      { pillar: "Exercise Variance", angle: "\"Keep your programming fresh and exclusive. New exercises, new challenges — a core experience they can't get anywhere else.\"" },
    ],
    channels: ["Direct outreach to club membership directors", "Private club industry events (CMAA, NCA)", "Luxury fitness equipment dealer network", "Trainer certification and programming partnerships", "Exclusive member experience showcase events"],
    salesMotion: "Relationship-led. 60–90 day cycle. Club visit → Trainer demo → 30-day member trial → Fleet order. Target: Membership directors and head trainers.",
    objections: [
      { objection: "\"Our members expect exclusivity, not mass-market equipment.\"", response: "ZeroWheel is the only motorized core device in existence — it's not available at commercial gyms. Position it as a members-only experience with branded programming." },
      { objection: "\"We already have premium core equipment.\"", response: "No existing core equipment offers motorized resistance with connected tracking. This is a category upgrade that drives engagement and creates trainer-led revenue opportunities." },
      { objection: "\"Our trainers won't adopt it.\"", response: "Trainers love it because it gives them a premium tool that justifies higher session rates. Real-time data makes every session measurable and results-driven." },
    ],
    kpis: ["Member engagement rate per unit", "Trainer session revenue uplift", "Member retention impact", "Net Promoter Score from members", "Units per club location"],
  },
  {
    icon: Dumbbell,
    lob: "Commercial Fitness Clubs",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#B8860B",
    marketCategory: "Commercial",
    pricing: "$695/unit (max 40% off list)",
    buyerPersona: "Corporate procurement teams and owner/operators at commercial fitness chains (Equinox, Life Time, Bay Club, Rochester Athletic Club). Decision-makers focused on equipment durability, member engagement, group class programming, and revenue per square foot.",
    positioning: "A durable, motorized core training station that integrates into HIIT classes, personal training, and open floor use. Rochester Athletic Club expanded to 6 units serving 16,000+ members, with plans for fee-based 'core clinics' as a new revenue source. Pickleball programming is a major growth driver at large chains like Life Time — ZeroWheel delivers the core strength and rotational power that directly enhances performance. The device delivers measurable results and will dramatically enhance abs and core definition, driving member satisfaction and retention.",
    painPoints: ["Need equipment that delivers visible results and keeps members engaged", "Members are intimidated by complex machines", "Group class programming needs constant refreshing"],
    keySellingPoints: ["Delivers dramatic core and ab results members can see", "Group class versatility (HIIT, core clinics, pickleball prep)", "Small footprint allows multiple units on the gym floor", "New revenue potential (fee-based core sessions)", "Connected app provides anti-theft and remote device management"],

    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Give your members the #1 EMG-proven core exercise — guided, motorized, and impossible to do wrong.\"" },
      { pillar: "Progressive Overload", angle: "\"40 lbs of magnetic resistance means your advanced members never outgrow it. From beginners to elite — one device.\"" },
      { pillar: "Exercise Variance", angle: "\"Rollouts, planks, pikes, oblique rotations — one compact station replaces an entire core corner.\"" },
    ],
    channels: ["Direct outreach to club operations leadership", "IHRSA / FIBO trade show demos", "Demo day partnerships with top 50 clubs", "Fitness equipment dealer network", "Revenue-share placement model"],
    salesMotion: "Outbound-led. 60–90 day cycle. Demo unit placement → 30-day trial → Fleet order. Target: Fitness directors and club GMs.",
    objections: [
      { objection: "\"We already have core equipment.\"", response: "No existing core equipment offers motorized resistance with progressive overload. This isn't a replacement — it's a category upgrade that drives member engagement metrics." },
      { objection: "\"Our members won't use it.\"", response: "Rochester Athletic Club expanded to 6 units serving 16,000+ members. Connected tracking and guided programs drive 3x engagement vs. passive equipment." },
      { objection: "\"Price is too high for a core device.\"", response: "At $695/unit with revenue-share options, the ROI per square foot exceeds any traditional core equipment. One device replaces 3–4 pieces and creates new revenue streams." },
    ],
    kpis: ["Units placed per quarter", "Member engagement rate per unit", "Repeat usage (sessions/week)", "Revenue per square foot improvement", "Net Promoter Score from club operators"],
  },
  {
    icon: Stethoscope,
    lob: "Medical & Rehabilitation",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#B8860B",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "The Clinical Rehabilitation Director / Lead Physical Therapist and owner/operators at sports medicine clinics and rehabilitation centers. Decision-makers focused on patient safety, clinical efficacy, objective data tracking, and insurance reimbursement potential.",
    positioning: "Clinical-grade core rehabilitation through CKC exercise science. Springback Mode provides graduated assistance for safe core exercise entry, while the connected app tracks every rep for patient progress reports and insurance documentation.",
    painPoints: ["Patients lack strength for traditional core exercises", "Need graduated assistance for safe exercise entry", "Limited options for adding resistance during shoulder rehabilitation and increasing range of motion", "Require objective data tracking for progress reports and insurance documentation"],
    keySellingPoints: ["CKC exercise science (Closed Kinetic Chain)", "Graduated assistance via Springback Mode", "Compact clinical footprint", "Data-driven progress tracking for insurance documentation"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern is the gold standard for spinal stabilization rehab — now with motorized guidance for patient safety.\"" },
      { pillar: "Progressive Overload", angle: "\"Precise resistance increments from 0–40 lbs allow clinicians to prescribe exact load progressions — documented and trackable.\"" },
      { pillar: "Exercise Variance", angle: "\"Multiple movement patterns in one device means a complete core rehab protocol without switching equipment.\"" },
    ],
    channels: ["KOL partnerships with sports medicine physicians", "Medical conference presence (APTA, ACSM)", "Clinical validation study program", "Physical therapy distributor network", "EMR/EHR integration partnerships"],
    salesMotion: "Relationship-led. 90–120 day cycle. Clinical champion identification → Pilot study → Department adoption → Multi-location rollout.",
    objections: [
      { objection: "\"We need clinical evidence.\"", response: "The rollout mechanism has extensive EMG validation. CKC movements enhance proprioception and minimize harmful joint shear forces. We're launching a clinical outcomes study program — early adopters get co-authorship opportunities." },
      { objection: "\"Insurance won't cover it.\"", response: "The device supports CPT-code-aligned protocols. We provide billing guidance for core stabilization therapy codes." },
      { objection: "\"Our patients are too deconditioned.\"", response: "Springback Mode provides graduated assistance — resistance starts at zero. The motorized assist actually makes it safer than bodyweight for deconditioned patients." },
    ],
    kpis: ["Clinical pilot programs launched", "Patient outcome improvement scores", "Clinician adoption rate", "Units per multi-location system", "Insurance reimbursement success rate"],
  },
  {
    icon: Package,
    lob: "Direct-to-Consumer",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#B8860B",
    marketCategory: "DTC",
    pricing: "$1,095/unit (full MSRP)",
    buyerPersona: "The Fitness Tech Enthusiast / Home Gym Optimizer (HHI $200K+). Values premium design, connected features, and science-backed training. Currently owns or has considered Peloton, Tonal, or Mirror.",
    positioning: "The smartest, most versatile home fitness equipment at its price point. Replaces an entire core and resistance training setup in a single 12.2-pound device. At $1,095, significantly more affordable and space-efficient than competitors like Tonal ($3,995) or Mirror ($1,495+).",
    painPoints: ["Home gym space is limited", "Existing smart home gym equipment is expensive ($2,000–$5,000+) and bulky", "Consumers want variety and progression without buying multiple devices"],
    keySellingPoints: ["Price-to-value ratio vs. Tonal/Mirror", "Connected fitness ecosystem with app", "Compact footprint (fits under a bed)", "Progressive difficulty across 4 intelligent modes"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The exercise scientists call it the most effective core movement. We made it perfect for your home.\"" },
      { pillar: "Progressive Overload", angle: "\"Your Peloton builds your legs. Your Tonal builds your upper body. ZeroWheel builds the core that powers everything.\"" },
      { pillar: "Exercise Variance", angle: "\"One sleek device. Dozens of exercises. A complete core training system that fits under your bed.\"" },
    ],
    channels: ["Premium e-commerce storefront", "Instagram/YouTube fitness influencer partnerships", "Podcast sponsorships (Huberman, Attia)", "Facebook/Google performance marketing", "Affiliate program for fitness creators"],
    salesMotion: "Inbound-led. 7–21 day cycle. Content marketing → Social proof → Purchase. Retargeting and email nurture for consideration phase.",
    objections: [
      { objection: "\"$1,095 for a core device?\"", response: "This isn't an ab roller — it's a motorized, connected training system with 40 lbs of resistance, 4 intelligent modes, and unlimited exercise variety. Compare to $3,995 Tonal or $1,495 Mirror." },
      { objection: "\"I can do core exercises for free.\"", response: "You can — but science shows bodyweight core training plateaus quickly. Progressive overload is the only path to real strength and definition." },
      { objection: "\"Will I actually use it?\"", response: "Connected app with guided programs, progress tracking, and new workouts weekly. Our data shows 4.2 sessions/week average usage." },
    ],
    kpis: ["Monthly unit sales", "Customer acquisition cost (CAC)", "Conversion rate by channel", "Subscription attach rate", "Net Promoter Score"],
  },
  {
    icon: Target,
    lob: "Corporate Wellness",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "The Corporate Wellness Program Manager / HR Benefits Director at Fortune 500 companies. Focused on employee engagement, health outcomes ROI, program utilization metrics, and reducing lower back pain costs.",
    positioning: "The antidote to the desk chair. Lower back pain costs US employers over $100 billion annually — core strength directly combats it. ZeroWheel is portable enough for office gyms and break rooms, and the app's gamification features (streaks, goals, competitions) drive sustained employee engagement while providing HR with participation data.",
    painPoints: ["Lower back pain costs US employers over $100 billion annually", "Employees are intimidated by complex gym equipment", "Wellness programs struggle with low participation rates"],
    keySellingPoints: ["Addresses #1 workplace injury (lower back pain)", "App gamification drives sustained engagement", "Portable for office environments and break rooms", "Measurable ROI with usage analytics for HR"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Give your employees access to the most effective core exercise in existence — right in your office fitness center.\"" },
      { pillar: "Progressive Overload", angle: "\"From the intern to the CEO — one device scales to every fitness level. No intimidation, no learning curve.\"" },
      { pillar: "Exercise Variance", angle: "\"Keep your wellness program fresh. Gamified challenges, team competitions, and new exercises keep participation rates high.\"" },
    ],
    channels: ["Corporate wellness platform partnerships (Virgin Pulse, Wellable)", "HR/Benefits conference presence", "Direct outreach to Fortune 500 wellness directors", "Corporate fitness center design firms", "Employee engagement case studies"],
    salesMotion: "Outbound + partner-led. 60–90 day cycle. Wellness director meeting → Pilot in 1 location → Usage data review → Enterprise rollout.",
    objections: [
      { objection: "\"We already have a full gym.\"", response: "ZeroWheel isn't replacing your gym — it's adding the one piece that addresses the #1 workplace injury. Connected tracking proves utilization to leadership." },
      { objection: "\"Budget is tight for wellness.\"", response: "At $825/unit, one ZeroWheel replaces multiple core pieces and provides the usage analytics that justify your entire wellness budget to the CFO. Lower back pain costs $100B+ annually — prevention is the ROI." },
    ],
    kpis: ["Enterprise accounts signed", "Employee utilization rate", "Program renewal rate", "Units per corporate location", "Wellness ROI metrics delivered"],
  },
  {
    icon: Users,
    lob: "Professional Sports",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "The Director of Strength and Conditioning at professional teams, D1 programs, and elite training facilities. Obsessed with marginal gains, eccentric overload capability, and sport-specific movement patterns.",
    positioning: "Elite athletes use ZeroWheel for rotational power and eccentric overload training. Burn and Quicksand modes deliver advanced eccentric overload that challenges the most elite athletes. Wall-based exercises mimic rotational patterns critical for baseball (swing mechanics) and golf (torso rotation). The LA Rams and Aroldis Chapman (8x MLB All-Star) actively use ZeroWheel in their training programs.",
    painPoints: ["Need tools that provide meaningful eccentric overload beyond body weight", "Require portability from weight room to sideline", "Must serve diverse sport-specific movement patterns (rotational, linear, lateral)"],
    keySellingPoints: ["Eccentric overload capability (Burn + Quicksand modes)", "Sport-specific movement patterns", "Elite endorsements (LA Rams, Aroldis Chapman)", "Portability — weight room to sideline for game-day warm-ups"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern builds the functional core stability that prevents injuries and powers athletic performance.\"" },
      { pillar: "Progressive Overload", angle: "\"Track every rep, every resistance level, every progression. Give your athletes the data-driven core training they deserve.\"" },
      { pillar: "Exercise Variance", angle: "\"Program sport-specific core protocols — rotational power for baseball, anti-extension for football, stability for basketball.\"" },
    ],
    channels: ["S&C coach direct outreach program", "NSCA / CSCCa conference presence", "Team sponsorship and equipment deals", "Athlete ambassador partnerships", "Performance data case studies"],
    salesMotion: "Relationship-led. 30–60 day cycle. S&C coach demo → Team trial → Performance data review → Full adoption. One team adoption creates cascading demand.",
    objections: [
      { objection: "\"We have everything we need.\"", response: "The LA Rams and Aroldis Chapman didn't think they needed it either — until they tried it. No existing equipment combines motorized resistance with the rollout pattern." },
      { objection: "\"Our athletes are too advanced.\"", response: "Burn mode at 10.5 N·m of torque at full extension will humble any athlete. The progressive overload ceiling is higher than any bodyweight core exercise." },
    ],
    kpis: ["Teams/programs adopted", "Athlete performance improvement metrics", "Social media mentions by athletes", "Cascading referrals from S&C network", "Content/case study generation"],
  },
  {
    icon: Building2,
    lob: "Hospitality & Amenities",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "Corporate management companies, fitness and spa directors, GMs, and Directors of Rooms at 5-star hotels, luxury resorts, wellness retreats, and premium residential buildings. Decision-makers focused on guest/resident experience differentiation, limited space optimization, and self-guided wellness amenities.",
    positioning: "The premium wellness amenity that elevates the guest fitness experience in a compact footprint (18\" x 8.4\" x 8.4\"). QR code onboarding and intuitive app enable safe, unassisted use — no dedicated staff required. A major opportunity exists in in-room wellness — ZeroWheel is the perfect solution for delivering a premium fitness experience directly in the guest room. Brands like Technogym, Precor, and Peloton have pioneered in-room wellness positioning; ZeroWheel's compact size and self-guided design make it the ideal next-generation in-room wellness amenity.",
    painPoints: ["Limited gym space in luxury buildings and hotel fitness centers", "Equipment must serve beginners and advanced users alike without staff", "Residents and guests expect premium, self-guided experiences"],
    keySellingPoints: ["Compact design — smallest footprint of any core equipment", "Self-guided onboarding via QR code and app", "Broad demographic appeal (all fitness levels)", "Premium aesthetic that elevates property brand"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Offer your guests the most effective core workout in exercise science — guided and personalized to any fitness level.\"" },
      { pillar: "Progressive Overload", angle: "\"From the casual guest to the fitness enthusiast — one device delivers a challenging, satisfying workout for everyone.\"" },
      { pillar: "Exercise Variance", angle: "\"New guests, new workouts. The variety keeps your fitness center feeling fresh and cutting-edge.\"" },
    ],
    channels: ["Hospitality trade shows (HITEC, ALIS, BDNY)", "Luxury hotel chain procurement teams", "Wellness resort design consultants", "Premium residential property management firms", "White-label branding partnerships"],
    salesMotion: "Outbound-led. 90–120 day cycle. Property visit → Pilot installation → Guest/resident feedback data → Chain-wide or portfolio-wide rollout.",
    objections: [
      { objection: "\"Our fitness center is already equipped.\"", response: "ZeroWheel isn't replacing equipment — it's adding a premium, Instagram-worthy piece that guests talk about. At 18\" x 8.4\", it fits anywhere." },
      { objection: "\"Guests won't know how to use it.\"", response: "Built-in guided programs and QR-code onboarding mean any guest can start a workout in 30 seconds. Zero learning curve, zero staff required." },
    ],
    kpis: ["Properties installed", "Guest/resident usage sessions per week", "Social media mentions/shares", "Guest satisfaction score impact", "Chain-wide expansion rate"],
  },
  {
    icon: Shield,
    lob: "Military & Government",
    tier: "Tier 3 — Scale Phase",
    tierColor: "#555",
    marketCategory: "GSA",
    pricing: "$694/unit (GSA best pricing)",
    buyerPersona: "The Tactical Strength and Conditioning Facilitator (TSAC-F) / Installation Fitness Director / DoD Procurement Officer / VA Rehabilitation Program Manager. Also includes Police Department Captains and Chiefs, Fire Department leadership, and Directors of Recreation at community centers. Values durability, portability, GSA compliance, and dual-use capability (training + rehabilitation).",
    positioning: "GSA compliant, portable at 12.2 lbs, and endorsed by James Mathis, Chief of Sports, Fitness & Aquatics for the US Army. Burn mode delivers high-intensity resistance for tactical athletes, while Springback aids in injury rehabilitation. Compact enough for deployment and rugged enough for field conditions.",
    painPoints: ["Need equipment that deploys anywhere — base, field, station, community center", "Must serve diverse populations from recruits to seasoned operators to community members", "Procurement requires GSA compliance and Made in USA", "Police and fire departments need compact, effective fitness solutions for limited station gym space"],
    keySellingPoints: ["GSA compliant, Made in USA", "US Army endorsement (James Mathis)", "Portability at 12.2 lbs for field deployment", "Dual-use: tactical training (Burn) + rehabilitation (Springback)"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern builds the combat-ready core stability that prevents injuries in the field.\"" },
      { pillar: "Progressive Overload", angle: "\"Standardized resistance levels enable consistent PT scoring and rehabilitation protocols across installations.\"" },
      { pillar: "Exercise Variance", angle: "\"Multiple exercise modes support diverse fitness requirements — from combat readiness to post-injury rehabilitation.\"" },
    ],
    channels: ["GSA Schedule listing", "IDIQ contract pursuit", "Military fitness conference presence", "VA rehabilitation program partnerships", "Defense contractor fitness facility programs"],
    salesMotion: "Government procurement-led. 120–180 day cycle. RFI response → Pilot at 2–3 installations → Performance review → Contract award.",
    objections: [
      { objection: "\"Not on GSA Schedule.\"", response: "GSA Schedule listing is in progress. In the interim, we can fulfill through existing micro-purchase thresholds or BPA agreements. GSA compliant and Made in USA." },
      { objection: "\"Durability concerns for military use.\"", response: "Industrial-grade construction with no exposed moving parts. Magnetic resistance motor requires zero maintenance. Designed for 50,000+ session lifecycle." },
    ],
    kpis: ["Installations deployed", "Soldiers/veterans served", "Contract value secured", "Fitness test score improvements", "Rehabilitation outcome metrics"],
  },
  {
    icon: Ship,
    lob: "Cruise & Maritime",
    tier: "Tier 3 — Scale Phase",
    tierColor: "#555",
    marketCategory: "Vertical",
    pricing: "$825/unit (max 25% off list)",
    buyerPersona: "VP of Onboard Experience / VP of Newbuild / Cruise Line Fitness Director / Management companies (e.g., OneSpaWorld) / Superyacht Interior Designer. Cruise lines typically operate through an RFP process. Focused on space efficiency, guest experience, and premium amenity differentiation in space-constrained marine environments.",
    positioning: "The compact, connected core training solution designed for space-constrained marine environments. Premium guest experience in a footprint that fits anywhere on board. No hydraulics, no cables, no consumable parts — magnetic resistance motor requires zero maintenance, ideal for maritime environments. In-cabin wellness is a significant emerging opportunity — ZeroWheel's compact size and self-guided design make it the perfect in-cabin fitness amenity for premium staterooms and suites.",
    painPoints: ["Extremely limited fitness center space on ships", "Equipment must withstand maritime conditions with minimal maintenance", "Need to serve diverse passenger demographics"],
    keySellingPoints: ["Smallest footprint of any comparable core equipment", "Zero-maintenance magnetic resistance (no hydraulics/cables)", "Self-guided for diverse passenger demographics", "Premium amenity differentiation", "In-cabin wellness opportunity for premium staterooms"],
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The most effective core exercise in the smallest possible footprint — perfect for onboard fitness centers.\"" },
      { pillar: "Progressive Overload", angle: "\"One device serves every passenger — from first-time exercisers to elite athletes. No need for multiple core machines.\"" },
      { pillar: "Exercise Variance", angle: "\"Keep passengers engaged across a 7-day voyage with new exercises and challenges every day.\"" },
    ],
    channels: ["Cruise line procurement partnerships", "Seatrade Cruise Global conference", "Marine fitness equipment distributors", "Superyacht dealer network", "Maritime fitness design consultants"],
    salesMotion: "Outbound + partner-led. 120–180 day cycle. Cruise line HQ meeting → Ship pilot → Passenger feedback → Fleet-wide rollout.",
    objections: [
      { objection: "\"Space is too limited.\"", response: "ZeroWheel's footprint is smaller than any comparable core equipment. It stores vertically and requires zero permanent floor space." },
      { objection: "\"Maintenance at sea is a concern.\"", response: "No hydraulics, no cables, no consumable parts. Magnetic resistance motor requires zero maintenance. Ideal for maritime environments." },
    ],
    kpis: ["Ships/yachts installed", "Passenger usage rate", "Guest satisfaction impact", "Fleet-wide expansion", "Maritime distributor partnerships"],
  },
];

export default function ZWProductAnalysis() {
  const [expandedLob, setExpandedLob] = useState<number | null>(null);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          
          eyebrow="WEG Product Assessment"
          title="Product Analysis & Market Positioning"
          description="After extensive hands-on evaluation and market research, this is Well Estate Group's independent assessment of ZeroWheel's product differentiation, competitive positioning, and go-to-market potential. Anchored to three science-backed pillars of core training superiority, this analysis maps the product's unique capabilities to 9 macro lines of business — each with a dedicated GTM playbook."
          stats={[
            { value: "3", label: "Pillars of Superiority" },
            { value: "9", label: "LOB Playbooks" },
            { value: "4", label: "Intelligent Modes" },
          ]}
        />
      </div>

      {/* ═══ PRODUCT DEEP DIVE ═══ */}
      <section id="product-deep-dive" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Product Intelligence
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              CARE Technology & Specifications
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-3xl mx-auto">
              Invented by Dr. Neil Singer (PhD, MIT), ZeroWheel is the first portable device with Connected Adaptive Resistance Exercise (CARE) technology — delivering dynamic, real-time assistance or resistance via an onboard motor and computer.
            </motion.p>
          </motion.div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-2xl border-2 border-[#B8860B]/70 bg-white text-center hover:border-[#B8860B]/70 hover:shadow-md transition-all duration-300"
              >
                <spec.icon className="w-5 h-5 text-[#B8860B] mx-auto mb-2" />
                <p className="font-display text-lg font-bold text-black">{spec.value}</p>
                <p className="font-mono text-[9px] text-black/55 tracking-wider uppercase">{spec.label}</p>
                <p className="font-body text-[10px] text-black/50 mt-0.5">{spec.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Four Intelligent Modes */}
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Four Intelligent Modes
            </motion.span>
            <motion.h3 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-medium mt-4 mb-3 text-black">
              Adaptive Training for Every User
            </motion.h3>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 max-w-2xl mx-auto">
              Two assistance modes and two resistance modes — from rehabilitation patients to elite athletes, ZeroWheel adapts to every user and every training goal.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {modes.map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border-2 border-[#B8860B]/70 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${mode.color}15` }}>
                    <mode.icon className="w-5 h-5" style={{ color: mode.color }} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-black">{mode.name}</h4>
                    <span
                      className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${mode.color}15`, color: mode.color }}
                    >
                      {mode.type}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-black/60 leading-relaxed mb-3">{mode.description}</p>
                <div className="pt-3 border-t border-[#B8860B]/50">
                  <p className="font-mono text-[9px] text-black/50 tracking-wider uppercase mb-1">Ideal For</p>
                  <p className="font-body text-xs text-black/65">{mode.audience}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Science Foundation */}
          <div className="mt-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-[#B8860B]/70 overflow-hidden"
            >
              <div className="bg-[#F5F4F1] p-6">
                <h3 className="font-display text-xl font-semibold text-black mb-1">Core Strength: The Foundation</h3>
                <p className="font-body text-sm text-black/65">Why core training is the single most impactful investment in human performance and longevity</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
                {[
                  { title: "Injury Prevention", desc: "Core strength enhances balance, stability, and power transfer — the foundation of injury prevention across all populations.", source: "Harvard Health" },
                  { title: "Eccentric Overload", desc: "Muscles handle 20–30% more weight eccentrically, leading to greater hypertrophy and lower injury rates. ZeroWheel's motorized resistance enables true eccentric overload.", source: "Exercise Science" },
                  { title: "CKC Exercise Science", desc: "Closed Kinetic Chain movements enhance proprioception and minimize harmful joint shear forces — the safest, most effective training modality.", source: "Clinical Research" },
                  { title: "Longevity Impact", desc: "Strength training significantly lowers mortality risk in older adults. Core strength is the foundation that enables all other movement and independence.", source: "Longevity Research" },
                ].map((item, i) => (
                  <div key={i} className="p-6">
                    <h4 className="font-display text-sm font-semibold text-black mb-2">{item.title}</h4>
                    <p className="font-body text-xs text-black/70 leading-relaxed mb-2">{item.desc}</p>
                    <span className="font-mono text-[9px] text-[#B8860B] tracking-wider uppercase">{item.source}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS OF SUPERIORITY ═══ */}
      <section id="three-pillars" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Science-Backed Positioning
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              The Three Pillars of Core Training Superiority
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-3xl mx-auto">
              The core training market forces consumers to compromise. Traditional ab wheels offer the right mechanism but lack resistance. Machines offer resistance but force unnatural patterns. Bodyweight offers variety but no progressive overload. ZeroWheel is the only product that integrates all three scientifically proven pillars.
            </motion.p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border-2 border-[#B8860B]/70 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-24 bg-[#F5F4F1] flex items-center justify-center py-6 md:py-0">
                    <span className="font-display text-4xl font-bold text-[#B8860B]">{pillar.number}</span>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-3 mb-1">
                      <pillar.icon className="w-6 h-6 text-[#B8860B]" />
                      <h3 className="font-display text-xl font-semibold text-black">{pillar.title}</h3>
                    </div>
                    <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase mb-4">{pillar.subtitle}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-mono text-[10px] text-black/55 tracking-wider uppercase mb-2">The Science</p>
                        <p className="font-body text-sm text-black/65 leading-relaxed">{pillar.science}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {pillar.citations.map((cite, j) => (
                            <span key={j} className="font-mono text-[9px] text-black/50 bg-black/[0.04] px-2 py-1 rounded">{cite}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-black/55 tracking-wider uppercase mb-2">Why It Matters</p>
                        <p className="font-body text-sm text-black/65 leading-relaxed mb-4">{pillar.why}</p>
                        <div className="p-3 rounded-xl bg-[#B8860B]/5 border-2 border-[#B8860B]/50">
                          <p className="font-mono text-[9px] text-[#B8860B] tracking-wider uppercase mb-1">Marketing Angle</p>
                          <p className="font-body text-sm text-black/80 italic">{pillar.marketingAngle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPETITIVE MATRIX ═══ */}
      <section id="competitive-matrix" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Competitive Positioning
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              The ZeroWheel Synthesis
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Every competitor delivers one or two pillars. ZeroWheel is the only device that delivers all three — the complete synthesis of core training science.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-[#B8860B]/70 overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F4F1] text-black">
                    <th className="text-left p-4 font-mono text-xs tracking-wider uppercase">Product Category</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Rollout Mechanism</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Progressive Overload</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Exercise Variance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: "Traditional Ab Wheels", rollout: true, resistance: false, variance: false },
                    { product: "Crunch Machines", rollout: false, resistance: true, variance: false },
                    { product: "Bodyweight Circuits", rollout: false, resistance: false, variance: true },
                    { product: "Cable Machines", rollout: false, resistance: true, variance: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#B8860B]/50">
                      <td className="p-4 font-body text-sm text-black/70 font-medium">{row.product}</td>
                      <td className="p-4 text-center">{row.rollout ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                      <td className="p-4 text-center">{row.resistance ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                      <td className="p-4 text-center">{row.variance ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#B8860B]/10 border-t-2 border-[#B8860B]">
                    <td className="p-4 font-display text-sm text-black font-bold">ZeroWheel</td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#B8860B] mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#B8860B] mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#B8860B] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <p className="font-body text-xs text-black/50 mt-3 text-center italic">
              ZeroWheel is the only product that successfully integrates all three scientifically proven pillars of optimal core development.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VALIDATION & TESTIMONIALS ═══ */}
      <section id="validation" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Market Validation
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Endorsed by Elite Performers
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              From professional athletes to military leadership to clinical experts — ZeroWheel is validated by the most demanding users across every target LOB.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border-2 border-[#B8860B]/70 bg-white hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-6 h-6 text-[#B8860B]/30 mb-3" />
                <p className="font-body text-sm text-black/75 italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="pt-3 border-t border-[#B8860B]/50">
                  <p className="font-display text-sm font-semibold text-black">{t.name}</p>
                  <p className="font-body text-xs text-black/65 mt-0.5">{t.title}</p>
                  <span className="inline-block mt-2 font-mono text-[9px] text-[#B8860B] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#B8860B]/10">
                    {t.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOB NAVIGATOR ═══ */}
      <section id="lob-navigator" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Playbook
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              9 Lines of Business — Systematic Approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-3xl mx-auto">
              Each LOB has a complete playbook: buyer persona, pain points, positioning, pillar-specific messaging, marketing channels, sales motion, objection handling, and KPIs. Organized by launch priority tier.
            </motion.p>
          </motion.div>

          {/* Pricing Anchor */}
          <div className="max-w-3xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-[#B8860B]/70 overflow-hidden"
            >
              <div className="bg-[#F5F4F1] px-6 py-4 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-black">Pricing Structure</span>
                <span className="font-mono text-xs text-[#B8860B]">MSRP $1,095 — All prices end in 5</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.06]">
                {[
                  { label: "DTC / MSRP", price: "$1,095", note: "full list" },
                  { label: "Vertical", price: "$825", note: "max 25% off list" },
                  { label: "Commercial", price: "$695", note: "max 40% off list" },
                  { label: "GSA (Mil/Gov)", price: "$694", note: "best pricing" },
                ].map((tier, i) => (
                  <div key={i} className="p-4 text-center">
                    <p className="font-mono text-[9px] text-black/55 tracking-wider uppercase mb-1">{tier.label}</p>
                    <p className="font-display text-xl font-bold text-black">{tier.price}</p>
                    <p className="font-body text-[10px] text-black/50">{tier.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Priority Tier Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-5xl mx-auto">
            {[
              { label: "Tier 1 — Launch Priority", color: "#B8860B", count: 4 },
              { label: "Tier 2 — Growth Phase", color: "#888", count: 3 },
              { label: "Tier 3 — Scale Phase", color: "#555", count: 2 },
            ].map((tier, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#B8860B]/55 bg-white">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }} />
                <span className="font-mono text-[10px] tracking-wider uppercase text-black/60">{tier.label}</span>
                <span className="font-display text-xs font-bold text-black/55">({tier.count})</span>
              </div>
            ))}
          </div>

          {/* LOB Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {lobPlaybooks.map((lob, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setExpandedLob(i);
                  setTimeout(() => {
                    document.getElementById("lob-playbooks")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 hover:shadow-lg ${
                  expandedLob === i
                    ? "border-[#B8860B] bg-[#B8860B]/5 shadow-md"
                    : "border-[#B8860B]/70 bg-white hover:border-[#B8860B]/70"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <lob.icon className="w-7 h-7 text-[#B8860B]" />
                  <span
                    className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${lob.tierColor}15`, color: lob.tierColor }}
                  >
                    {lob.marketCategory}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-black mb-1">{lob.lob}</h3>
                <p className="font-mono text-[10px] text-black/55">{lob.pricing}</p>
                <div className="flex items-center gap-1 mt-3 text-[#B8860B]">
                  <span className="font-mono text-[10px] tracking-wider uppercase">View Playbook</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOB PLAYBOOKS (Expandable) ═══ */}
      <section id="lob-playbooks" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Detailed Playbooks
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              LOB-Specific Marketing Strategies
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Click any LOB to expand its complete go-to-market playbook — including buyer persona, pain points, key selling points, pillar-specific messaging, channels, sales motion, objection handling, and success metrics.
            </motion.p>
          </motion.div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {lobPlaybooks.map((lob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  expandedLob === i
                    ? "border-[#B8860B] shadow-lg"
                    : "border-[#B8860B]/70 hover:border-[#B8860B]/70"
                }`}
              >
                {/* Header (always visible) */}
                <button
                  onClick={() => setExpandedLob(expandedLob === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#FAFAF8] transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                      <lob.icon className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-black">{lob.lob}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span
                          className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${lob.tierColor}15`, color: lob.tierColor }}
                        >
                          {lob.tier}
                        </span>
                        <span className="font-mono text-[10px] text-black/55">{lob.marketCategory} · {lob.pricing}</span>
                      </div>
                    </div>
                  </div>
                  {expandedLob === i ? (
                    <ChevronUp className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black/45 flex-shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedLob === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 bg-white border-t border-[#B8860B]/50">
                        {/* Row 1: Buyer Persona + Positioning */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border-2 border-[#B8860B]/55">
                            <div className="flex items-center gap-2 mb-3">
                              <UserCheck className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Target Buyer Persona</p>
                            </div>
                            <p className="font-body text-sm text-black/70 leading-relaxed">{lob.buyerPersona}</p>
                          </div>
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border-2 border-[#B8860B]/55">
                            <div className="flex items-center gap-2 mb-3">
                              <Crosshair className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Core Positioning</p>
                            </div>
                            <p className="font-body text-sm text-black/70 leading-relaxed">{lob.positioning}</p>
                          </div>
                        </div>

                        {/* Row 1.5: Pain Points + Key Selling Points */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border-2 border-[#B8860B]/55">
                            <div className="flex items-center gap-2 mb-3">
                              <AlertTriangle className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Pain Points</p>
                            </div>
                            <div className="space-y-2">
                              {lob.painPoints.map((point, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm text-black/65">
                                  <span className="text-[#B8860B] mt-1 flex-shrink-0">•</span>
                                  {point}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border-2 border-[#B8860B]/55">
                            <div className="flex items-center gap-2 mb-3">
                              <Star className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Key Selling Points</p>
                            </div>
                            <div className="space-y-2">
                              {lob.keySellingPoints.map((point, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm text-black/65">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] mt-0.5 flex-shrink-0" />
                                  {point}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Pillar-Specific Messaging */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-4 h-4 text-[#B8860B]" />
                            <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Pillar-Specific Messaging</p>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {lob.messaging.map((msg, j) => (
                              <div key={j} className="p-4 rounded-xl bg-[#FAFAF8] border-2 border-[#B8860B]/55">
                                <p className="font-mono text-[9px] text-black/55 tracking-wider uppercase mb-2">Pillar {j + 1}: {msg.pillar}</p>
                                <p className="font-body text-sm text-black/75 italic leading-relaxed">{msg.angle}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Row 3: Channels + Sales Motion */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Megaphone className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Marketing Channels & Tactics</p>
                            </div>
                            <div className="space-y-2">
                              {lob.channels.map((channel, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm text-black/65">
                                  <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] mt-0.5 flex-shrink-0" />
                                  {channel}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-5 rounded-xl bg-[#F5F4F1] text-black">
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="w-4 h-4 text-[#B8860B]" />
                              <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Sales Motion</p>
                            </div>
                            <p className="font-body text-sm text-white/80 leading-relaxed">{lob.salesMotion}</p>
                          </div>
                        </div>

                        {/* Row 4: Objection Handling */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-4">
                            <AlertTriangle className="w-4 h-4 text-[#B8860B]" />
                            <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Objection Handling</p>
                          </div>
                          <div className="space-y-3">
                            {lob.objections.map((obj, j) => (
                              <div key={j} className="p-4 rounded-xl border-2 border-[#B8860B]/55 bg-[#FAFAF8]">
                                <p className="font-display text-sm font-semibold text-black/80 mb-2">{obj.objection}</p>
                                <p className="font-body text-sm text-black/60 leading-relaxed pl-4 border-l-2 border-[#B8860B]">{obj.response}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Row 5: KPIs */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <BarChart3 className="w-4 h-4 text-[#B8860B]" />
                            <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">Success Metrics & KPIs</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {lob.kpis.map((kpi, j) => (
                              <span key={j} className="font-body text-xs text-black/60 bg-[#FAFAF8] border-2 border-[#B8860B]/55 px-3 py-1.5 rounded-full">
                                {kpi}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEVERAGE POINTS ═══ */}
      <section id="leverage-points" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Strategic Advantages
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Product Leverage Points
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Seven core advantages that apply across every LOB — the foundation of every sales conversation and marketing message.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Only Motorized Core Device", desc: "No direct competitor exists. ZeroWheel creates and owns a new category — motorized progressive resistance core training. First-mover advantage is absolute.", icon: Award },
              { title: "Science-Backed Positioning", desc: "Every marketing claim is anchored to peer-reviewed research. The Three Pillars framework gives sales teams a credible, repeatable story that resonates with clinical and performance buyers.", icon: BookOpen },
              { title: "Universal Scalability", desc: "From rehabilitation patients at 0 lbs to elite athletes at 40 lbs — the same device serves the full spectrum. One SKU covers every LOB and every user.", icon: Users },
              { title: "Four Intelligent Modes", desc: "Springback, Aero, Quicksand, and Burn — two assistance and two resistance modes that adapt to every user, from rehabilitation to elite performance.", icon: Cpu },
              { title: "Connected Data Platform", desc: "Usage tracking, progress analytics, and engagement metrics enable subscription revenue, prove ROI to institutional buyers, and create switching costs.", icon: BarChart3 },
              { title: "Compact Form Factor", desc: "At 12.2 lbs and 18\" x 8.4\" x 8.4\", ZeroWheel has the smallest footprint of any comparable core equipment. Enables placement in space-constrained environments.", icon: Package },
              { title: "Multi-Stream Revenue", desc: "Hardware + subscription + accessories + content licensing = four revenue streams per unit sold. Recurring revenue transforms the business model from transactional to SaaS-like.", icon: DollarSign },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border-2 border-[#B8860B]/70 bg-white hover:border-[#B8860B]/70 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B8860B]/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <span className="font-display text-xs font-bold text-[#B8860B]">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-black mb-2">{point.title}</h3>
                <p className="font-body text-sm text-black/60 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CROSS-LOB SYNERGIES ═══ */}
      <section id="cross-lob" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Network Effects
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Cross-LOB Synergies
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Wins in one LOB create cascading demand across others. The systematic approach ensures each market entry amplifies the next.
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                from: "Professional Sports",
                to: "Fitness Clubs → DTC",
                effect: "Pro team adoption creates aspirational demand. When members see their favorite team using ZeroWheel, clubs want it on their floor — and consumers want it at home. The LA Rams and Aroldis Chapman are already active users.",
              },
              {
                from: "Medical & Rehabilitation",
                to: "Corporate Wellness → Military/Gov",
                effect: "Clinical validation studies provide the evidence base that institutional buyers require. A published outcomes study unlocks corporate wellness budgets and government procurement. CKC science credibility cascades across all verticals.",
              },
              {
                from: "Private & Commercial Clubs",
                to: "Hospitality → Cruise/Maritime",
                effect: "Club floor presence creates brand awareness and user familiarity. Hotels and cruise lines adopt equipment their guests already know and trust from their home gym or club.",
              },
              {
                from: "DTC Success",
                to: "All B2B Channels",
                effect: "Strong DTC sales and social proof (reviews, influencer content, user testimonials) de-risk the purchase decision for every institutional buyer. Consumer demand validates the product for commercial procurement.",
              },
            ].map((synergy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border-2 border-[#B8860B]/70 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div className="w-px h-8 bg-[#B8860B]/20" />
                  <ArrowRight className="w-4 h-4 text-[#B8860B]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-sm font-bold text-black">{synergy.from}</span>
                    <ArrowRight className="w-3 h-3 text-[#B8860B]" />
                    <span className="font-mono text-xs text-[#B8860B]">{synergy.to}</span>
                  </div>
                  <p className="font-body text-sm text-black/60 leading-relaxed">{synergy.effect}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC RECOMMENDATIONS ═══ */}
      <section id="recommendations" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              WEG Recommendations
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Strategic Recommendations
            </motion.h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                priority: "01",
                title: "Lead with the Three Pillars in Every Conversation",
                description: "The Three Pillars framework is the single most powerful sales tool. Every pitch deck, every demo, every piece of content should open with the science. It immediately elevates ZeroWheel from \"another ab roller\" to \"the only complete core training system\" — and it's backed by peer-reviewed research that no competitor can match.",
                action: "Build a 60-second Three Pillars pitch script for every sales rep. Create a one-page leave-behind for in-person demos.",
              },
              {
                priority: "02",
                title: "Launch Tier 1 LOBs Simultaneously — Clubs, Medical, DTC",
                description: "These four Tier 1 LOBs create a reinforcing square. Private club placements drive exclusivity. Commercial club placements drive brand awareness. Medical validation builds credibility. DTC sales generate revenue and social proof. Launching all four in parallel maximizes cross-LOB synergies from day one.",
                action: "Allocate 70% of launch resources to Tier 1. Target 15 private clubs, 25 commercial club placements, 10 clinical pilots, and 500 DTC units in the first 90 days.",
              },
              {
                priority: "03",
                title: "Leverage the Four Intelligent Modes in Every LOB Pitch",
                description: "Each mode maps directly to a buyer persona. Springback for medical/rehab. Burn for sports performance and military. Aero for group fitness and corporate wellness. Quicksand for advanced athletes. The mode-to-persona mapping is the bridge between product capability and buyer need.",
                action: "Create a mode-to-LOB mapping one-pager. Train sales reps to lead with the specific mode that resonates with each buyer persona.",
              },
              {
                priority: "04",
                title: "Invest in Clinical Validation Early",
                description: "A published clinical outcomes study is the single highest-leverage asset for unlocking Tier 2 and Tier 3 LOBs. Corporate wellness, government, and military buyers all require evidence-based justification. CKC exercise science and graduated assistance via Springback Mode provide the clinical foundation.",
                action: "Partner with 2–3 sports medicine clinics for a prospective outcomes study. Budget for IRB approval and publication fees. Target 6–12 month timeline.",
              },
              {
                priority: "05",
                title: "Build the Athlete Ambassador Pipeline",
                description: "One professional athlete posting a ZeroWheel workout creates more demand than $100K in paid advertising. The LA Rams and Aroldis Chapman are already active users — leverage these relationships and expand. The cascading effect — pro team → club floor → consumer — is the most capital-efficient growth engine available.",
                action: "Formalize the LA Rams and Chapman relationships into ambassador deals. Identify 10 additional target athletes across NFL, NBA, and MLB with strong social media presence.",
              },
              {
                priority: "06",
                title: "Systematize the LOB Playbooks into Sales Enablement",
                description: "The playbook data on this page should be converted into actionable sales tools — battle cards, objection handling cheat sheets, buyer persona profiles, and LOB-specific pitch decks. Every sales rep should be able to execute any LOB playbook independently.",
                action: "Create a Sales Enablement Kit with one battle card per LOB. Include in the Sales Enablement tab and distribute to all channel partners.",
              },
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl border-2 border-[#B8860B]/70 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F4F1] flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-bold text-[#B8860B]">{rec.priority}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-black mb-3">{rec.title}</h3>
                    <p className="font-body text-sm text-black/65 leading-relaxed mb-4">{rec.description}</p>
                    <div className="p-4 rounded-xl bg-[#B8860B]/5 border-2 border-[#B8860B]/50">
                      <p className="font-mono text-[9px] text-[#B8860B] tracking-wider uppercase mb-1">Recommended Action</p>
                      <p className="font-body text-sm text-black/75">{rec.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <NextPageCTA label="Lines of Business" href="/gtm/zerowheel/lines-of-business" />
    </Layout>
  );
}
