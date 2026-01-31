/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Contact page - Data room access request with functional form
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe, User, Building2, DollarSign, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { toast } from "sonner";

export default function Contact() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    investmentRange: "",
    investorType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.investmentRange) {
      toast.error("Missing Information", {
        description: "Please fill in all required fields."
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid Email", {
        description: "Please enter a valid email address."
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (in production, this would send to a backend)
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Data Room Access Request - ${formData.company}`);
      const body = encodeURIComponent(`
Data Room Access Request

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Title: ${formData.title || 'Not provided'}
Investor Type: ${formData.investorType || 'Not specified'}
Investment Range: ${formData.investmentRange}

Message:
${formData.message || 'No additional message provided.'}
      `);

      // Open mailto link
      window.location.href = `mailto:invest@lumastem.com?subject=${subject}&body=${body}`;

      // Show success state
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      
      toast.success("Request Submitted", {
        description: "Your email client has been opened. Please send the email to complete your request."
      });
    } catch {
      toast.error("Submission Error", {
        description: "There was an error processing your request. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/biologics-abstract.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              INVESTOR ACCESS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Request <span className="text-gradient">Data Room</span> Access
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Complete the form below to request access to our investor data room containing 
              detailed financials, due diligence materials, and investment terms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Data Room Request Form */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-5 gap-8">
              {/* Form */}
              <motion.div variants={fadeInUp} className="md:col-span-3">
                {isSubmitted ? (
                  <div className="bg-card border border-emerald-500/30 rounded-2xl p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="font-display text-2xl font-medium mb-4">Request Submitted</h3>
                    <p className="font-body text-muted-foreground mb-6">
                      Thank you for your interest in Lumastem. Our investor relations team will review your 
                      request and respond within 24-48 hours with data room access credentials.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          company: "",
                          title: "",
                          investmentRange: "",
                          investorType: "",
                          message: ""
                        });
                      }}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Investor Information
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Name Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-sm text-muted-foreground mb-2">
                            First Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-muted-foreground mb-2">
                            Last Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Smith"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-body text-sm text-muted-foreground mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      {/* Company & Title */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-sm text-muted-foreground mb-2">
                            Company / Fund <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Acme Ventures"
                            required
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-muted-foreground mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Partner"
                          />
                        </div>
                      </div>

                      {/* Investor Type */}
                      <div>
                        <label className="block font-body text-sm text-muted-foreground mb-2">
                          Investor Type
                        </label>
                        <select
                          name="investorType"
                          value={formData.investorType}
                          onChange={handleInputChange}
                          className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select investor type...</option>
                          <option value="vc">Venture Capital</option>
                          <option value="pe">Private Equity</option>
                          <option value="family-office">Family Office</option>
                          <option value="strategic">Strategic / Corporate</option>
                          <option value="angel">Angel Investor</option>
                          <option value="institutional">Institutional Investor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Investment Range */}
                      <div>
                        <label className="block font-body text-sm text-muted-foreground mb-2">
                          Anticipated Investment Range <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="investmentRange"
                          value={formData.investmentRange}
                          onChange={handleInputChange}
                          className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                          required
                        >
                          <option value="">Select investment range...</option>
                          <option value="under-500k">Under $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m-25m">$10M - $25M</option>
                          <option value="25m-plus">$25M+</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-body text-sm text-muted-foreground mb-2">
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                          placeholder="Tell us about your investment thesis or any specific questions..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg py-6 glow-gold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Request Data Room Access
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Sidebar */}
              <motion.div variants={fadeInUp} className="md:col-span-2 space-y-6">
                {/* Contact Info */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Direct Contact
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Prefer to reach out directly? Contact our investor relations team.
                  </p>
                  <a 
                    href="mailto:invest@lumastem.com" 
                    className="font-mono text-sm text-primary hover:text-accent transition-colors"
                  >
                    invest@lumastem.com
                  </a>
                </div>

                {/* What's in the Data Room */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    Data Room Contents
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Historical financials & projections",
                      "Unit economics model",
                      "Cap table & term sheet",
                      "Corporate structure & IP",
                      "Regulatory filings",
                      "Market research & competitive analysis",
                      "Team bios & references"
                    ].map((item, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment Highlights */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Investment Highlights
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Round Size", value: "$50M Series A" },
                      { label: "Valuation", value: "$200M Post-Money" },
                      { label: "2031 Target", value: "$327M Revenue" },
                      { label: "Exit Multiple", value: "20x EBITDA" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-sm font-medium text-primary">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
