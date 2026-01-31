/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Advisory Board page - Clinical advisory board profiles
 */

import { motion } from "framer-motion";
import { Linkedin, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Team() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              ADVISORY BOARD
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Physician-Led Excellence
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              World-class clinical advisors guiding Lumastem's protocols, research, and physician education.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Members */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Dr. Pradeep Albert",
                title: "Chair, Physician Advisory Board",
                image: "/images/dr-pradeep-albert.png",
                credentials: "MD",
                linkedin: "https://www.linkedin.com/in/pradeep-albert-md-8301ab9/",
                bio: "One of the most experienced regenerative medicine physicians in the world, with over 40,000 stem cell and biologic procedures performed. Bestselling author of 'Exosomes, PRP, and Stem Cells in Musculoskeletal Medicine' and co-author of 'Lifespan Decoded'. Founder of Longerton University with contributions to stem cell policy across the Caribbean, Latin America, and Europe.",
                highlights: [
                  "40,000+ stem cell procedures",
                  "Global protocol design leader",
                  "Bestselling medical author"
                ]
              },
              {
                name: "Dr. Gus Vickery",
                title: "Chair, Peptide & Precision Hormone Program",
                image: "/images/dr-gus-vickery.png",
                credentials: "MD",
                linkedin: "https://www.linkedin.com/in/gus-vickery-b5301b15a/",
                bio: "Board-certified family physician and nationally recognized leader in precision medicine, hormone optimization, and peptide therapeutics. Founder of Vickery Family Medicine and The Clinic at Biltmore. At Lumastem, designs personalized longevity protocols using genomic data, advanced lab panels, and targeted hormone therapies. Leads integration of the GeneMetrics™ diagnostic platform.",
                highlights: [
                  "Precision medicine pioneer",
                  "GeneMetrics™ integration lead",
                  "Author of 'Authentic Health'"
                ]
              },
              {
                name: "Linda McIver",
                title: "Director, Peptide Program",
                image: "/images/linda-mciver.png",
                credentials: "FNP-C, ABAAHP",
                linkedin: "https://www.linkedin.com/in/linda-mciver-fnp-c-abaahp-882b4a38/",
                bio: "Board-certified family nurse practitioner with nearly 30 years of clinical experience in peptide therapy, hormone optimization, and functional medicine. Completed the A4M Fellowship and holds advanced certifications from the International Peptide Society. Leads clinical execution of the Peptide Program, managing protocol-driven delivery of hormone and peptide therapies under Dr. Gus Vickery's direction.",
                highlights: [
                  "30 years clinical experience",
                  "A4M Fellowship graduate",
                  "International Peptide Society certified"
                ]
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-primary/50 transition-colors">
                  <div className="h-56 overflow-hidden flex items-center justify-center bg-muted/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-auto h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-display text-2xl font-medium">{member.name}</h3>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 flex items-center justify-center transition-colors group"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                    <p className="font-body text-primary mb-1">{member.title}</p>
                    <p className="font-mono text-xs text-muted-foreground mb-4">{member.credentials}</p>
                    <p className="font-body text-muted-foreground mb-6">{member.bio}</p>
                    <ul className="space-y-2">
                      {member.highlights.map((highlight, i) => (
                        <li key={i} className="font-body text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extended Advisory Network */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-primary text-sm tracking-wider">
                EXTENDED NETWORK
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Advisory Expertise
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-12">
                Beyond our core advisory board, Lumastem has access to a network of specialists 
                across key domains.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { area: "Clinical Research", count: "5+" },
                { area: "Healthcare Operations", count: "3+" },
                { area: "Regulatory Affairs", count: "2+" },
                { area: "Strategic Growth", count: "4+" }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{item.count}</span>
                  <p className="font-body text-sm text-muted-foreground mt-2">{item.area}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                OUR VALUES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Guiding Principles
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Physician-First",
                  description: "Every protocol is designed and overseen by board-certified physicians, ensuring the highest standards of care."
                },
                {
                  title: "Science-Driven",
                  description: "We invest in research and only offer treatments backed by clinical evidence and rigorous safety data."
                },
                {
                  title: "Patient-Centered",
                  description: "Our 90% at-home care model puts patient convenience and outcomes at the center of everything we do."
                },
                {
                  title: "Ethical Excellence",
                  description: "Full transparency, informed consent, and compliance with all regulatory frameworks guide our operations."
                }
              ].map((value, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
                  <h4 className="font-display text-xl font-medium mb-3">{value.title}</h4>
                  <p className="font-body text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
