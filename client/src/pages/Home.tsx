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
      name: "PNG - Alta Resolução",
      description: "300 DPI para impressão",
      file: "/images/original-ai-mix-logo-main-hires.png"
    },
    {
      name: "PNG - Web",
      description: "Otimizado para web",
      file: "/images/original-ai-mix-logo-main-web.png"
    },
    {
      name: "JPG - Original",
      description: "Formato original",
      file: "/images/original-ai-mix-logo-main.jpg"
    }
  ];

  const faqs = [
    {
      question: "Posso usar o logo em qualquer tipo de música?",
      answer: "Não. O logo deve ser usado apenas em música criada com Inteligência Artificial. Se a tua música não foi criada com IA, não deves usar o símbolo."
    },
    {
      question: "Preciso de pedir permissão para usar o logo?",
      answer: "Não. O logo é disponibilizado gratuitamente sob licença de uso livre. Basta descarregar e usar de acordo com os termos e condições."
    },
    {
      question: "Posso modificar o logo?",
      answer: "Não. Deves usar o logo exatamente como fornecido. Não podes alterar cores, formas, tamanhos ou qualquer outro aspecto visual."
    },
    {
      question: "Posso usar o logo em projetos comerciais?",
      answer: "Sim, podes usar em plataformas de streaming, venda de música e materiais promocionais. Para usos comerciais especiais, contacta-nos."
    },
    {
      question: "Onde devo colocar o logo?",
      answer: "Podes colocar na capa do álbum, descrição da música, créditos, metadados ou qualquer local visível. O importante é que seja claro que a música foi criada com IA."
    },
    {
      question: "O que devo fazer se alguém usar o logo incorretamente?",
      answer: "Contacta-nos. Queremos manter a integridade do símbolo. Se vires uso indevido, avisa-nos para que possamos tomar as medidas apropriadas."
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria feita a integração com um serviço de email
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Obrigado pela subscrição!");
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
            <a href="#sobre" className="hover:opacity-60 transition">SOBRE</a>
            <a href="#galeria" className="hover:opacity-60 transition">GALERIA</a>
            <a href="#termos" className="hover:opacity-60 transition">TERMOS</a>
            <a href="#download" className="hover:opacity-60 transition">DOWNLOAD</a>
            <a href="#faqs" className="hover:opacity-60 transition">FAQS</a>
            <a href="#contacto" className="hover:opacity-60 transition">CONTACTO</a>
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
            Música com IA
          </h1>
          
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            O símbolo oficial para identificar música criada com Inteligência Artificial. Transparência na indústria musical.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#download"
              className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest"
            >
              DESCARREGAR
            </a>
            <a 
              href="#termos"
              className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition text-sm font-light tracking-widest"
            >
              TERMOS
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            O Que é
          </h2>
          
          <p className="text-base md:text-lg text-black/70 mb-6 font-light leading-relaxed">
            Original AI Mix é um símbolo de identificação para música criada com Inteligência Artificial. Quando vês este logo, sabes que a música foi criada com o auxílio de IA.
          </p>
          
          <p className="text-base md:text-lg text-black/70 font-light leading-relaxed">
            Acreditamos na transparência. Os artistas têm liberdade de usar IA, mas devem ser honestos com o seu público.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Galeria
          </h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/images/original-ai-mix-logo-main.jpg" 
              alt="Original AI Mix Logo" 
              className="w-full max-w-md border border-black/10"
            />
          </div>

          <p className="text-center text-black/70 font-light mb-8">
            O símbolo oficial em alta qualidade. Disponível em múltiplos formatos para impressão e web.
          </p>

          <div className="flex justify-center">
            <a 
              href="#download"
              className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              DESCARREGAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Termos */}
      <section id="termos" className="py-20 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Termos e Condições
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">PERMITIDO</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Usar em álbuns, singles e músicas</li>
                <li>• Usar em plataformas de streaming</li>
                <li>• Usar em redes sociais e materiais promocionais</li>
                <li>• Usar em capas de álbuns e artwork</li>
                <li>• Usar em créditos e metadados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">NÃO PERMITIDO</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Modificar ou alterar o logo</li>
                <li>• Registar como marca própria</li>
                <li>• Usar para fins comerciais sem autorização</li>
                <li>• Vender o logo como produto</li>
                <li>• Remover créditos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">OBRIGAÇÕES</h3>
              <ul className="space-y-2 text-black/70 font-light">
                <li>• Creditar "Original AI Mix"</li>
                <li>• Manter a integridade visual do logo</li>
                <li>• Usar apenas para música criada com IA</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-black/10">
              <p className="text-black/70 font-light">
                Para usos comerciais especiais, <a href="#contacto" className="underline hover:opacity-60">contacte-nos</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
            Descarregar
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
            Perguntas Frequentes
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

      {/* Fundador */}
      <section className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Fundador
          </h2>
          
          <div className="space-y-6 text-black/70 font-light leading-relaxed">
            <p>
              <span className="text-black font-light">Nuno Gonçalo Alóvia de Almeida Ribeiro</span>
              <br />
              <span className="text-sm">Jovem Empreendedor, Autodidata e Filantropo</span>
            </p>
            
            <p>
              Original AI Mix foi criado por Nuno Gonçalo, um jovem visionário que acredita no poder da tecnologia para democratizar a criação musical.
            </p>

            <p>
              Como autodidata, explorou as possibilidades da IA na música e percebeu a necessidade de criar um sistema de identificação claro e universal.
            </p>

            <p>
              Como filantropo, acredita que transparência e honestidade são fundamentais para construir uma indústria musical mais justa e acessível.
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
            Subscreve para receber atualizações sobre o projeto e novas versões do logo.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="O teu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-black/20 bg-white text-black placeholder-black/50 font-light focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest whitespace-nowrap"
            >
              SUBSCREVER
            </button>
          </form>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 border-t border-black/10 bg-black/2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Contacto
          </h2>
          
          <p className="text-base md:text-lg text-black/70 mb-8 font-light leading-relaxed">
            Tens questões? Precisas de ajuda? Quer usar o símbolo?
          </p>

          <button className="px-8 py-3 bg-black text-white hover:opacity-80 transition text-sm font-light tracking-widest inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            ENVIAR MENSAGEM
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
              <a href="#termos" className="hover:opacity-60 transition">TERMOS</a>
              <a href="#faqs" className="hover:opacity-60 transition">FAQS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
