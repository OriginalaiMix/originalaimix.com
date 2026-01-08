/**
 * Design Philosophy: Ultra-Minimalista Clean
 * - Branco puro e preto apenas
 * - Sem imagens de fundo, cards, shadows
 * - Texto essencial
 * - Layout linear direto
 * - Uma página única com scroll
 */

import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const downloadFiles = [
    {
      name: "PNG - High Resolution",
      description: "300 DPI for printing",
      file: "/images/original-ai-mix-logo-main-hires.png"
    },
    {
      name: "PNG - Web",
      description: "Optimized for web",
      file: "/images/original-ai-mix-logo-main-web.png"
    },
    {
      name: "JPG - Original",
      description: "Original format",
      file: "/images/original-ai-mix-logo-main.jpg"
    }
  ];

  const faqs = [
    {
      question: "Can I use the logo on any type of music?",
      answer: "No. The logo should only be used on music created with Artificial Intelligence. If your music was not created with AI, you should not use the symbol."
    },
    {
      question: "Do I need to ask permission to use the logo?",
      answer: "No. The logo is available for free under a free use license. Simply download and use it according to the terms and conditions."
    },
    {
      question: "Can I modify the logo?",
      answer: "No. You must use the logo exactly as provided. You cannot change colors, shapes, sizes, or any other visual aspect."
    },
    {
      question: "Can I use the logo in commercial projects?",
      answer: "Yes, you can use it on streaming platforms, music sales, and promotional materials. For special commercial uses, contact us."
    },
    {
      question: "Where should I place the logo?",
      answer: "You can place it on the album cover, music description, credits, metadata, or any visible location. The important thing is that it's clear the music was created with AI."
    },
    {
      question: "What should I do if someone uses the logo incorrectly?",
      answer: "Contact us. We want to maintain the integrity of the symbol. If you see misuse, let us know so we can take appropriate action."
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria feita a integração com um serviço de email
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/original-ai-mix-logo-main.jpg" 
              alt="Original AI Mix" 
              className="h-8 w-auto"
            />
            <span className="text-sm font-light tracking-widest">ORIGINAL AI MIX</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-xs tracking-widest">
            <a href="#about" className="hover:opacity-60 transition">ABOUT</a>
            <a href="#gallery" className="hover:opacity-60 transition">GALLERY</a>
            <a href="#terms" className="hover:opacity-60 transition">TERMS</a>
            <a href="#download" className="hover:opacity-60 transition">DOWNLOAD</a>
            <a href="#faqs" className="hover:opacity-60 transition">FAQS</a>
            <a href="#contact" className="hover:opacity-60 transition">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <img 
            src="/images/original-ai-mix-logo-main.jpg" 
            alt="Original AI Mix Logo" 
            className="mx-auto mb-12 w-full max-w-md"
          />
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Music with AI
          </h1>
          
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The official symbol to identify music created with Artificial Intelligence. Transparency in the music industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#download"
              className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest"
            >
              DOWNLOAD
            </a>
            <a 
              href="#terms"
              className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition text-sm font-light tracking-widest"
            >
              TERMS
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            What is it
          </h2>
          
          <p className="text-base md:text-lg text-black/70 mb-6 font-light leading-relaxed">
            Original AI Mix is an identification symbol for music created with Artificial Intelligence. When you see this logo, you know the music was created with the help of AI.
          </p>
          
          <p className="text-base md:text-lg text-black/70 font-light leading-relaxed">
            We believe in transparency. Artists are free to use AI, but they should be honest with their audience.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Gallery
          </h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/images/original-ai-mix-logo-main.jpg" 
              alt="Original AI Mix Logo" 
              className="w-full max-w-md border border-black/10"
            />
          </div>

          <p className="text-center text-black/70 font-light mb-8">
            The official symbol in high quality. Available in multiple formats for printing and web.
          </p>

          <div className="flex justify-center">
            <a 
              href="#download"
              className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              DOWNLOAD NOW
            </a>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Terms and Conditions
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">ALLOWED</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Use on albums, singles and songs</li>
                <li>• Use on streaming platforms</li>
                <li>• Use on social media and promotional materials</li>
                <li>• Use on album covers and artwork</li>
                <li>• Use in credits and metadata</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">NOT ALLOWED</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Modify or alter the logo</li>
                <li>• Register as your own trademark</li>
                <li>• Use for commercial purposes without authorization</li>
                <li>• Sell the logo as a product</li>
                <li>• Remove credits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">OBLIGATIONS</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Credit "Original AI Mix"</li>
                <li>• Maintain the visual integrity of the logo</li>
                <li>• Use only for music created with AI</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-black/10">
              <p className="text-black/70 font-light">
                For special commercial uses, <a href="#contact" className="underline hover:opacity-60">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Download
          </h2>
          
          <div className="space-y-4">
            {downloadFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-6 border border-black/10 hover:border-black/30 transition">
                <div>
                  <h3 className="font-light text-base mb-1">{file.name}</h3>
                  <p className="text-sm text-black/50 font-light">{file.description}</p>
                </div>
                <a 
                  href={file.file} 
                  download
                  className="flex-shrink-0 p-3 hover:opacity-60 transition"
                >
                  <Download className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-black/10">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-black/2 transition text-left"
                >
                  <h3 className="font-light text-base pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-black/70 font-light leading-relaxed border-t border-black/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Founder
          </h2>
          
          <div className="space-y-6 text-black/70 font-light leading-relaxed">
            <p>
              <span className="text-black font-light">Nuno Gonçalo Alóvia de Almeida Ribeiro</span>
              <br />
              <span className="text-sm">Young Entrepreneur, Self-taught and Philanthropist</span>
            </p>
            
            <p>
              Original AI Mix was created by Nuno Gonçalo, a young visionary who believes in the power of technology to democratize music creation.
            </p>

            <p>
              As a self-taught individual, he explored the possibilities of AI in music and realized the need to create a clear and universal identification system.
            </p>

            <p>
              As a philanthropist, he believes that transparency and honesty are fundamental to building a fairer and more accessible music industry.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Newsletter
          </h2>
          
          <p className="text-base text-black/70 mb-8 font-light leading-relaxed">
            Subscribe to receive updates about the project and new versions of the logo.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-black/20 bg-white text-black placeholder-black/50 font-light focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Contact
          </h2>
          
          <p className="text-base md:text-lg text-black/70 mb-8 font-light leading-relaxed">
            Have questions? Need help? Want to use the symbol?
          </p>

          <button className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            SEND MESSAGE
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-xs font-light tracking-widest">
              © 2026 Original AI Mix
            </div>
            <div className="flex gap-8 text-xs font-light tracking-widest">
              <a href="#terms" className="hover:opacity-60 transition">TERMS</a>
              <a href="#faqs" className="hover:opacity-60 transition">FAQS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
