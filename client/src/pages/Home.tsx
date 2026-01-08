/**
 * Design Philosophy: Ultra-Minimalista Clean
 * - Branco puro e preto apenas
 * - Sem imagens de fundo, cards, shadows
 * - Texto essencial
 * - Layout linear direto
 * - Uma página única com scroll
 */

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function Home() {
  const downloadFiles = [
    {
      name: "PNG - Alta Resolução",
      description: "300 DPI para impressão",
      file: "/images/original-ai-mix-logo-hires.png"
    },
    {
      name: "PNG - Web",
      description: "Otimizado para web",
      file: "/images/original-ai-mix-logo-web.png"
    },
    {
      name: "WEBP - Original",
      description: "Máxima qualidade",
      file: "/images/original-ai-mix-logo.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/original-ai-mix-logo.webp" 
              alt="Original AI Mix" 
              className="h-8 w-auto"
            />
            <span className="text-sm font-light tracking-widest">ORIGINAL AI MIX</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-xs tracking-widest">
            <a href="#sobre" className="hover:opacity-60 transition">SOBRE</a>
            <a href="#termos" className="hover:opacity-60 transition">TERMOS</a>
            <a href="#download" className="hover:opacity-60 transition">DOWNLOAD</a>
            <a href="#contacto" className="hover:opacity-60 transition">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <img 
            src="/images/original-ai-mix-logo.webp" 
            alt="Original AI Mix Logo" 
            className="mx-auto mb-12 w-full max-w-xs"
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

      {/* Termos */}
      <section id="termos" className="py-20 px-6 border-t border-black/10 bg-black/2">
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
      <section id="download" className="py-20 px-6 border-t border-black/10">
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

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 border-t border-black/10">
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-light tracking-widest">
          <div>
            © 2026 Original AI Mix
          </div>
          <div>
            Fundado por Nuno Gonçalo Alóvia de Almeida Ribeiro
          </div>
        </div>
      </footer>
    </div>
  );
}
