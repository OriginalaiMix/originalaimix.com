/**
 * Design Philosophy: Luxo Contemporâneo
 * - Paleta monocromática: branco puro, preto profundo, cinzentos elegantes
 * - Typography: Playfair Display (display), Lato (body)
 * - Visual elements: espaço branco generoso, linhas finas, minimalismo sofisticado
 * - Animations: fade in, slide up, transições suaves
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Sparkles, Users, Mail, Download, FileText, CheckCircle2, Copyright } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadFiles = [
    {
      name: "Logo Completo (PNG - Alta Resolução)",
      description: "300 DPI - Ideal para impressão e materiais profissionais",
      file: "/images/original-ai-mix-logo-hires.png",
      icon: "🖼️"
    },
    {
      name: "Logo Completo (PNG - Web)",
      description: "Otimizado para web e redes sociais",
      file: "/images/original-ai-mix-logo-web.png",
      icon: "🌐"
    },
    {
      name: "Logo Original (WEBP)",
      description: "Formato original - Máxima qualidade",
      file: "/images/original-ai-mix-logo.webp",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/images/original-ai-mix-logo.webp" 
              alt="Original AI Mix Logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-medium tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Original AI Mix
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'var(--font-accent)' }}>
            <a href="#sobre" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Sobre</a>
            <a href="#termos" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Termos</a>
            <a href="#download" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Download</a>
            <a href="#fundador" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Fundador</a>
            <a href="#contacto" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(/images/hero-background-luxury.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-32">
          <div 
            className="animate-fade-in"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/images/original-ai-mix-logo.webp" 
              alt="Original AI Mix Logo" 
              className="mx-auto mb-12 w-full max-w-md"
            />
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Música com IA
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-6 text-foreground/70 tracking-wide"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            O Símbolo Oficial para Transparência Musical
          </p>
          
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Identifique música criada com Inteligência Artificial. Transparência, inovação e credibilidade na indústria musical.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="mr-2 h-5 w-5" />
              Descarregar Logo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={() => document.getElementById('termos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-5 w-5" />
              Ver Termos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                O Que é o Original AI Mix?
              </h2>
              <div className="w-16 h-px bg-foreground mb-12"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/images/transparency-concept-bw.png" 
                  alt="Conceito de Transparência" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-foreground/80">
                  O <span className="text-foreground font-medium">Original AI Mix</span> é um símbolo de identificação criado para trazer <span className="text-foreground font-medium">transparência</span> à indústria musical. Quando vês este logo num álbum ou música, sabes imediatamente que foi criado com o auxílio de <span className="text-foreground font-medium">Inteligência Artificial</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/80">
                  Num mundo onde a tecnologia redefine a criatividade, acreditamos que os artistas e criadores devem ter a liberdade de usar IA nas suas obras, mas sempre com <span className="text-foreground font-medium">honestidade</span> e <span className="text-foreground font-medium">clareza</span> perante o público.
                </p>

                <div className="flex items-start gap-6 pt-6">
                  <Sparkles className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Missão
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Promover a transparência na música criada com IA, permitindo que criadores identifiquem claramente as suas obras e construam confiança com o seu público.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="termos" className="py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Termos e Condições
              </h2>
              <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-accent)' }}>
                Licença de Uso Gratuito para o Símbolo Original AI Mix
              </p>
            </div>

            <Card className="bg-background border border-border luxury-shadow">
              <CardContent className="p-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <CheckCircle2 className="h-6 w-6 text-foreground" />
                    O Que é Permitido
                  </h3>
                  <ul className="space-y-3 text-lg text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✓</span>
                      <span>Usar o logo em álbuns, singles e músicas publicadas</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✓</span>
                      <span>Incluir o logo em plataformas de streaming (Spotify, Apple Music, etc.)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✓</span>
                      <span>Usar em redes sociais, YouTube e materiais promocionais</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✓</span>
                      <span>Incluir em capas de álbuns, artwork e design gráfico</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✓</span>
                      <span>Usar em créditos, descrições e metadados de música</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-medium mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <span className="text-foreground font-bold">✗</span>
                    O Que Não é Permitido
                  </h3>
                  <ul className="space-y-3 text-lg text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✗</span>
                      <span>Modificar, alterar cores, distorcer ou redesenhar o logo</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✗</span>
                      <span>Registar o logo como marca comercial própria</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✗</span>
                      <span>Usar para fins comerciais sem autorização prévia</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✗</span>
                      <span>Vender o logo ou ficheiros como produto independente</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">✗</span>
                      <span>Remover ou ocultar créditos do Original AI Mix</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Obrigações
                  </h3>
                  <ul className="space-y-3 text-lg text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">•</span>
                      <span><span className="font-medium">Creditar</span> "Original AI Mix" na descrição, créditos ou metadados</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">•</span>
                      <span><span className="font-medium">Manter</span> a integridade visual do logo - sem modificações</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-foreground font-bold">•</span>
                      <span><span className="font-medium">Usar</span> o logo apenas para identificar música criada com IA</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-8 bg-muted/30 p-6 rounded-lg">
                  <p className="text-foreground/70 leading-relaxed">
                    <span className="font-medium">Para usos comerciais especiais ou exceções</span>, por favor contacte-nos. Estamos abertos a discussões sobre parcerias e utilizações criativas do símbolo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Descarregar Logo
              </h2>
              <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-accent)' }}>
                Acesso gratuito aos ficheiros do logo em múltiplos formatos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {downloadFiles.map((file, index) => (
                <Card key={index} className="bg-background border border-border hover:border-foreground/30 transition-all duration-300 luxury-shadow">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl mb-4">{file.icon}</div>
                    <h3 className="text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {file.name}
                    </h3>
                    <p className="text-foreground/70 mb-6 flex-grow">
                      {file.description}
                    </p>
                    <a 
                      href={file.file} 
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-md font-medium"
                    >
                      <Download className="h-4 w-4" />
                      Descarregar
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Como Usar o Logo
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <span className="text-foreground font-bold">1.</span>
                    Descarregar
                  </h4>
                  <p className="text-foreground/70">
                    Escolha o formato que melhor se adequa ao seu projeto (PNG para web, PNG Alta Resolução para impressão).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <span className="text-foreground font-bold">2.</span>
                    Integrar
                  </h4>
                  <p className="text-foreground/70">
                    Adicione o logo à capa do álbum, descrição da música ou metadados da plataforma de streaming.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <span className="text-foreground font-bold">3.</span>
                    Creditar
                  </h4>
                  <p className="text-foreground/70">
                    Mencione "Original AI Mix" nos créditos ou descrição para identificar a música como criada com IA.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <span className="text-foreground font-bold">4.</span>
                    Publicar
                  </h4>
                  <p className="text-foreground/70">
                    Publique sua música com transparência e construa confiança com seu público.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section 
        id="fundador" 
        className="py-32 bg-foreground text-background relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/creator-background-bw.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Fundador do Projeto
              </h2>
              <div className="w-16 h-px bg-background/50 mx-auto mb-8"></div>
            </div>

            <Card className="bg-background/95 backdrop-blur-md border border-background/30 luxury-shadow">
              <CardContent className="p-12 md:p-16">
                <div className="text-center mb-12">
                  <div className="w-32 h-32 bg-foreground/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                    <Users className="h-16 w-16 text-background" />
                  </div>
                  <h3 
                    className="text-3xl md:text-4xl font-medium mb-3 text-foreground tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Nuno Gonçalo Alóvia de Almeida Ribeiro
                  </h3>
                  <p className="text-xl text-foreground/70 font-medium tracking-wide" style={{ fontFamily: 'var(--font-accent)' }}>
                    Jovem Empreendedor, Autodidata e Filantropo
                  </p>
                </div>

                <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    O projeto <span className="text-foreground font-medium">Original AI Mix</span> foi criado por Nuno Gonçalo, um jovem visionário que acredita no poder da tecnologia para democratizar a criação musical.
                  </p>
                  
                  <p>
                    Como <span className="text-foreground font-medium">autodidata</span>, Nuno explorou as possibilidades da Inteligência Artificial na música e percebeu a necessidade de criar um sistema de identificação claro e universal para obras criadas com IA.
                  </p>

                  <p>
                    Enquanto <span className="text-foreground font-medium">filantropo</span>, acredita que a transparência e a honestidade são fundamentais para construir uma indústria musical mais justa e acessível a todos os criadores, independentemente dos seus recursos.
                  </p>

                  <div className="mt-12 pt-8 border-t border-foreground/20">
                    <p className="text-center text-xl font-medium italic text-foreground tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                      "A tecnologia deve servir a criatividade, não escondê-la. Com o Original AI Mix, celebramos a inovação com transparência."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacto" 
        className="py-32 bg-background relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/contact-pattern-bw.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Fale Connosco
              </h2>
              <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-accent)' }}>
                Tens questões? Precisas de ajuda com música criada por IA? Quer usar o símbolo Original AI Mix?
              </p>
            </div>

            <Card className="bg-background border-2 border-foreground/20 luxury-shadow">
              <CardContent className="p-12 md:p-16 text-center">
                <Mail className="h-16 w-16 text-foreground mx-auto mb-8 opacity-60" />
                <h3 className="text-3xl font-medium mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Estamos Aqui Para Ajudar
                </h3>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Entre em contacto connosco para saber mais sobre o projeto, obter suporte ou discutir parcerias e utilizações criativas do símbolo Original AI Mix.
                </p>
                <Button 
                  size="lg"
                  className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                >
                  <Mail className="mr-2 h-6 w-6" />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t border-foreground/20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="/images/original-ai-mix-logo.webp" 
                alt="Original AI Mix Logo" 
                className="h-14 w-auto"
              />
              <div>
                <p className="font-medium text-lg tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                  Original AI Mix
                </p>
                <p className="text-sm text-background/70">
                  Artificial Intelligence Music
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-background/90 mb-2">
                © 2026 Original AI Mix. Todos os direitos reservados.
              </p>
              <p className="text-sm text-background/70">
                Fundado por Nuno Gonçalo Alóvia de Almeida Ribeiro
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
