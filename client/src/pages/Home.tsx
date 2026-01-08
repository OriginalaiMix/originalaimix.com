/**
 * Design Philosophy: Tecno-Futurismo Retro
 * - Synthwave color palette: deep purple, neon pink, electric cyan, golden
 * - Typography: Orbitron (display), Rajdhani (accent), Roboto (body)
 * - Visual elements: perspective grids, neon glows, isometric depth
 * - Animations: glow pulse, float, cinematic transitions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Sparkles, Users, Mail, CheckCircle2, Copyright } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/original-ai-mix-logo.webp" 
              alt="Original AI Mix Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Original AI Mix
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6" style={{ fontFamily: 'var(--font-accent)' }}>
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
            <a href="#como-usar" className="text-foreground/80 hover:text-primary transition-colors">Como Usar</a>
            <a href="#fundador" className="text-foreground/80 hover:text-primary transition-colors">Fundador</a>
            <a href="#contacto" className="text-foreground/80 hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        
        {/* Scanlines effect */}
        <div className="scanlines absolute inset-0"></div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-32">
          <div 
            className="animate-float"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/images/original-ai-mix-logo.webp" 
              alt="Original AI Mix Logo" 
              className="mx-auto mb-8 w-full max-w-2xl animate-glow-pulse"
            />
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-glow text-primary"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Música com IA
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-accent"
            style={{ fontFamily: 'var(--font-accent)', fontWeight: 600 }}
          >
            O Símbolo Oficial para Transparência Musical
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            Identifique música criada com Inteligência Artificial. Transparência, inovação e credibilidade na indústria musical.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 neon-border bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('como-usar')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Music className="mr-2 h-5 w-5" />
              Como Usar o Símbolo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Fale Connosco
            </Button>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/30 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-accent/30 -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/music-ai-visualization.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              O Que é o Original AI Mix?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="/images/transparency-concept.png" 
                alt="Conceito de Transparência" 
                className="rounded-lg shadow-2xl neon-border border-2 border-primary/30"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                O <span className="text-primary font-semibold">Original AI Mix</span> é um símbolo de identificação criado para trazer <span className="text-accent font-semibold">transparência</span> à indústria musical. Quando vês este logo num álbum ou música, sabes imediatamente que foi criado com o auxílio de <span className="text-secondary font-semibold">Inteligência Artificial</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Num mundo onde a tecnologia redefine a criatividade, acreditamos que os artistas e criadores devem ter a liberdade de usar IA nas suas obras, mas sempre com <span className="text-primary font-semibold">honestidade</span> e <span className="text-accent font-semibold">clareza</span> perante o público.
              </p>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-primary/20">
                <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                    Missão
                  </h3>
                  <p className="text-foreground/80">
                    Promover a transparência na música criada com IA, permitindo que criadores identifiquem claramente as suas obras e construam confiança com o seu público.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="como-usar" className="py-24 bg-background relative">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Como Usar o Símbolo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-accent)' }}>
              Se crias música com IA, usa este símbolo para identificar as tuas obras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-card border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  1. Cria com IA
                </h3>
                <p className="text-foreground/80">
                  Usa ferramentas de Inteligência Artificial para criar, produzir ou mixar a tua música.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Copyright className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  2. Adiciona o Logo
                </h3>
                <p className="text-foreground/80">
                  Coloca o símbolo Original AI Mix na capa do álbum, descrição ou créditos da música.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  3. Publica com Transparência
                </h3>
                <p className="text-foreground/80">
                  Lança a tua música identificada, construindo confiança e credibilidade com o teu público.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/30 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  Quantas Músicas Tens na Cabeça?
                </h3>
                <p className="text-lg mb-6 text-foreground/80">
                  Precisas de música com direitos de autor? Tens ideias mas não sabes como concretizá-las? 
                </p>
                <p className="text-xl font-semibold text-accent mb-6" style={{ fontFamily: 'var(--font-accent)' }}>
                  Fala connosco. Ajudamos-te a transformar as tuas ideias em realidade.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground neon-border"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contacto
                </Button>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/original-ai-mix-logo.webp" 
                  alt="Original AI Mix Logo" 
                  className="w-64 h-auto animate-glow-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section 
        id="fundador" 
        className="py-24 bg-card relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/creator-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
        
        <div className="container relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Fundador do Projeto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur-md border-2 border-accent/30 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-background" />
                  </div>
                  <h3 
                    className="text-3xl md:text-4xl font-bold mb-2 text-primary"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Nuno Gonçalo Alóvia de Almeida Ribeiro
                  </h3>
                  <p className="text-xl text-accent font-semibold" style={{ fontFamily: 'var(--font-accent)' }}>
                    Jovem Empreendedor, Autodidata e Filantropo
                  </p>
                </div>

                <div className="space-y-6 text-lg text-foreground/80">
                  <p className="leading-relaxed">
                    O projeto <span className="text-primary font-semibold">Original AI Mix</span> foi criado por Nuno Gonçalo, um jovem visionário que acredita no poder da tecnologia para democratizar a criação musical.
                  </p>
                  
                  <p className="leading-relaxed">
                    Como <span className="text-accent font-semibold">autodidata</span>, Nuno explorou as possibilidades da Inteligência Artificial na música e percebeu a necessidade de criar um sistema de identificação claro e universal para obras criadas com IA.
                  </p>

                  <p className="leading-relaxed">
                    Enquanto <span className="text-secondary font-semibold">filantropo</span>, acredita que a transparência e a honestidade são fundamentais para construir uma indústria musical mais justa e acessível a todos os criadores, independentemente dos seus recursos.
                  </p>

                  <div className="mt-8 p-6 bg-background/50 rounded-lg border border-primary/20">
                    <p className="text-center text-xl font-semibold text-primary" style={{ fontFamily: 'var(--font-accent)' }}>
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
        className="py-24 bg-background relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/contact-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        
        <div className="container relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Fale Connosco
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-accent)' }}>
              Tens questões? Precisas de ajuda com música criada por IA? Quer usar o símbolo Original AI Mix?
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-2 border-primary/30 shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <Mail className="h-16 w-16 text-primary mx-auto mb-6 animate-glow-pulse" />
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-accent)' }}>
                  Estamos Aqui Para Ajudar
                </h3>
                <p className="text-lg text-foreground/80 mb-8">
                  Entre em contacto connosco para saber mais sobre o projeto, obter o logo em alta resolução, ou discutir como podemos ajudar a criar a tua música com IA.
                </p>
                <Button 
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground neon-border"
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
      <footer className="bg-card border-t border-primary/20 py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/original-ai-mix-logo.webp" 
                alt="Original AI Mix Logo" 
                className="h-12 w-auto"
              />
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                  Original AI Mix
                </p>
                <p className="text-sm text-foreground/60">
                  Artificial Intelligence Music
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-foreground/80 mb-2">
                © 2026 Original AI Mix. Todos os direitos reservados.
              </p>
              <p className="text-sm text-foreground/60">
                Fundado por Nuno Gonçalo Alóvia de Almeida Ribeiro
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
