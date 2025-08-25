"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxY, Reveal } from "@/components/motion/reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ContactCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  color: string; // tailwind gradient "from-.. to-.."
};

const ContactInfo: ContactCard[] = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@bahtiyarkarakoc.com",
    href: "mailto:contact@bahtiyarkarakoc.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+90 (534) 123-4567",
    href: "tel:+905341234567",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Antalya, Turkey",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
];

const SocialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Darkksideyoda",
    color: "#333",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bahtiyar-karakoc-4763b31a1/",
    color: "#0077B5",
  },
];

export const ContactSection: React.FC<{ id?: string }> = ({ id = "contact" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-bot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  // Gmail compose link oluştur
  const createGmailLink = (name = "", email = "", subject = "", message = "") => {
    const params = new URLSearchParams();
    params.append('view', 'cm');
    params.append('fs', '1');
    params.append('to', 'contact@bahtiyarkarakoc.com');
    
    if (subject || name) {
      params.append('su', subject || `Message from ${name || 'Website Visitor'}`);
    }
    
    if (message || name || email) {
      let body = '';
      if (name) body += `Name: ${name}\n`;
      if (email) body += `Email: ${email}\n`;
      if (message) body += `\nMessage:\n${message}`;
      if (body) params.append('body', body);
    }
    
    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  // Outlook compose link oluştur
  const createOutlookLink = (name = "", email = "", subject = "", message = "") => {
    const params = new URLSearchParams();
    params.append('to', 'contact@bahtiyarkarakoc.com');
    
    if (subject || name) {
      params.append('subject', subject || `Message from ${name || 'Website Visitor'}`);
    }
    
    if (message || name || email) {
      let body = '';
      if (name) body += `Name: ${name}\n`;
      if (email) body += `Email: ${email}\n`;
      if (message) body += `\nMessage:\n${message}`;
      if (body) params.append('body', body);
    }
    
    return `https://outlook.live.com/owa/?${params.toString()}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot

    setIsSubmitting(true);

    // Burayı gerçek bir endpoint'e bağlayabilirsin (ör. /api/contact)
    await new Promise((r) => setTimeout(r, 1200));

    setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  // Email click handler - alternatif seçenekler göster
  const handleEmailClick = () => {
    setShowEmailOptions(true);
  };

  // Copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('contact@bahtiyarkarakoc.com');
      alert('Email address copied to clipboard!');
      setShowEmailOptions(false);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'contact@bahtiyarkarakoc.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Email address copied to clipboard!');
      setShowEmailOptions(false);
    }
  };

  // Detect user's platform and suggest appropriate actions
  const getSystemMailOptions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMac = userAgent.includes('mac');
    const isWindows = userAgent.includes('win');
    const isAndroid = userAgent.includes('android');
    const isIOS = userAgent.includes('iphone') || userAgent.includes('ipad');
    
    if (isMac) {
      return {
        name: 'Mail (macOS)',
        instruction: 'Press Cmd+Space, type "Mail", then create new email'
      };
    } else if (isWindows) {
      return {
        name: 'Mail (Windows)',
        instruction: 'Press Win+S, type "Mail", then create new email'
      };
    } else if (isAndroid) {
      return {
        name: 'Gmail/Email App',
        instruction: 'Open your email app and create new email'
      };
    } else if (isIOS) {
      return {
        name: 'Mail (iOS)',
        instruction: 'Open Mail app and create new email'
      };
    } else {
      return {
        name: 'Email App',
        instruction: 'Open your email application and create new email'
      };
    }
  };

  // Enhanced default mail app handler
  const tryDefaultMailApp = () => {
    const subject = encodeURIComponent(formData.subject || 'Website Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:contact@bahtiyarkarakoc.com?subject=${subject}&body=${body}`;
    
    // Method 1: Try with window.location.href (more reliable than window.open)
    try {
      window.location.href = mailtoUrl;
      setShowEmailOptions(false);
      return true;
    } catch (err) {
      // Method 2: Try with a temporary anchor element
      try {
        const tempLink = document.createElement('a');
        tempLink.href = mailtoUrl;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        setShowEmailOptions(false);
        return true;
      } catch (err2) {
        // Method 3: Show platform-specific instructions
        const systemMail = getSystemMailOptions();
        const instructions = 
          `Cannot open ${systemMail.name} automatically.\n\n` +
          `Manual steps:\n` +
          `1. ${systemMail.instruction}\n` +
          `2. Send to: contact@bahtiyarkarakoc.com\n` +
          `3. Subject: ${formData.subject || 'Website Contact'}\n\n` +
          `(Email address will be copied to clipboard)`;
        
        alert(instructions);
        copyEmailToClipboard();
        return false;
      }
    }
  };

  const isHttp = (href: string) => href.startsWith("http://") || href.startsWith("https://");

  const handleContactClick = (info: ContactCard) => {
    if (info.label === 'Email') {
      handleEmailClick();
    } else if (info.label === 'Location') {
      // Location için hiçbir şey yapma ya da harita açabilirsin
      return;
    } else {
      // Tel ve diğer linkler için
      window.open(info.href);
    }
  };

  return (
    <section
      id={id}
      className="relative w-full py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ParallaxY from={20} to={-10}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </ParallaxY>
          <ParallaxY from={12} to={-6} className="mt-4">
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-300">
              Let&apos;s discuss your next project or explore opportunities to work together
            </p>
          </ParallaxY>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            </Reveal>

            <div className="space-y-4">
              {ContactInfo.map((info) => (
                <Reveal key={info.label} className="block">
                  <m.button
                    onClick={() => handleContactClick(info)}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 md:backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] w-full text-left"
                  >
                    <div className={`rounded-lg bg-gradient-to-r ${info.color} p-3`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </m.button>
                </Reveal>
              ))}
            </div>

            {/* Social */}
            <Reveal>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {SocialLinks.map((social) => (
                  <m.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] md:backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {social.label}
                    </div>
                  </m.a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            </Reveal>

            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/50 md:backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/50 md:backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/50 md:backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/50 md:backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-400/20 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-medium shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:backdrop-blur-sm">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-blue-400" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects.
              Whether you need a full-stack developer, AI consultant, or technical advisor,
              let&apos;s discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowEmailOptions(true)}
                className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl border border-white/10 p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-white mb-4">Choose Email Option</h3>
            <div className="space-y-3">
              <button
                onClick={copyEmailToClipboard}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white transition-colors"
              >
                <Copy className="h-5 w-5" />
                Copy Email Address
              </button>
              <a
                href={createGmailLink(formData.name, formData.email, formData.subject, formData.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowEmailOptions(false)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Open Gmail
              </a>
              <a
                href={createOutlookLink(formData.name, formData.email, formData.subject, formData.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowEmailOptions(false)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Open Outlook
              </a>
              <button
                onClick={tryDefaultMailApp}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                Try Default Mail App
              </button>
            </div>
            <button
              onClick={() => setShowEmailOptions(false)}
              className="w-full mt-4 p-2 text-white/60 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </m.div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;