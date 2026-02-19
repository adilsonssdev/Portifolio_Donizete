import { useEffect, useRef } from 'react';
import { MessageCircle, Mail, Check, MapPin, GraduationCap, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTEUDO, SOCIAL_LINKS } from '@/config';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const { hero } = CONTEUDO;

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero dark:opacity-90" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <GraduationCap className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <BookOpen className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <FileText className="w-14 h-14 text-white" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <MapPin className="w-4 h-4 text-amarelo" aria-hidden="true" />
            <span className="text-white/90 text-sm font-medium">
              {hero.atendimento}
            </span>
          </div>

          {/* Main Title */}
          <h1 id="hero-title" className="reveal mb-4">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
              {hero.titulo}
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-2 tracking-widest uppercase">
              {hero.subtitulo}
            </span>
          </h1>

          {/* Headline */}
          <p className="reveal text-xl sm:text-2xl md:text-3xl font-medium text-white/95 mb-4">
            {hero.headline}
          </p>

          {/* Description */}
          <p className="reveal text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {hero.descricao}
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse-soft"
            >
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                {hero.ctaPrimario}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold text-base px-8 py-6 rounded-xl transition-all"
            >
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Enviar e-mail"
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                {hero.ctaSecundario}
              </a>
            </Button>
          </div>

          {/* Observation */}
          <div className="reveal flex items-center justify-center gap-2 text-white/70 text-sm">
            <Check className="w-4 h-4 text-amarelo" aria-hidden="true" />
            <span>{hero.observacao}</span>
          </div>

          {/* Trust Badges */}
          <div className="reveal mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Confiado por estudantes de todo o Brasil</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amarelo" aria-hidden="true" />
                <span className="text-sm font-medium">Formatação ABNT</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amarelo" aria-hidden="true" />
                <span className="text-sm font-medium">Revisão Completa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amarelo" aria-hidden="true" />
                <span className="text-sm font-medium">Orientação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background transition-colors duration-300"
          />
        </svg>
      </div>
    </section>
  );
}
