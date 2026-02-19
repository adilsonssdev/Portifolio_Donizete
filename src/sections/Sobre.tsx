import { useEffect, useRef } from 'react';
import { Award, Clock, Shield, GraduationCap, BookOpen, Bookmark } from 'lucide-react';
import { CONTEUDO, CONTATO } from '@/config';

export function Sobre() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const { sobre } = CONTEUDO;
  const { formacoes } = sobre;

  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '12+' },
    { icon: Clock, label: 'Trabalhos Entregues', value: '500+' },
    { icon: Shield, label: 'Clientes Satisfeitos', value: '100%' },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="sobre-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Side - Image Profile */}
          <div className="reveal relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-primary/20">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {/* Photo with Modern Effect */}
                  <img
                    src="/img/donizete.jpg"
                    alt={CONTATO.nome}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback in case image is missing
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-primary', 'to-secondary');
                    }}
                  />

                  {/* Glass Overlay on Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {CONTATO.nome}
                    </h3>
                    <p className="text-primary font-medium text-sm tracking-wider uppercase">
                      {CONTEUDO.sobre.subtitulo}
                    </p>
                  </div>

                  {/* Modern Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-xl -z-10" />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-8 bg-card rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">12+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Anos de Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Bio Content */}
          <div>
            <div className="reveal">
              <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-bold mb-4 tracking-wide uppercase">
                {sobre.subtitulo}
              </span>
            </div>

            <h2
              id="sobre-title"
              className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {sobre.titulo}{' '}
              <span className="text-primary">{CONTATO.nome}</span>
            </h2>

            <div className="reveal space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {sobre.texto.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-verde/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-verde" aria-hidden="true" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Formations Card - Independent Row */}
        <div className="reveal max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 border border-primary/10 dark:border-primary/20 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <GraduationCap className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{formacoes.titulo}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Experience */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-relaxed">
                  {formacoes.experiencia}
                </p>
              </div>

              {/* Master's Degree */}
              <div className="flex items-start gap-4 p-5 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-azul/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-azul" aria-hidden="true" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{formacoes.mestrado}</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Graduations */}
              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                  Graduações
                </p>
                <div className="flex flex-wrap gap-2">
                  {formacoes.graduacoes.map((grad, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-verde/10 text-verde text-sm font-medium rounded-xl hover:bg-verde/20 transition-colors"
                    >
                      <Bookmark className="w-4 h-4" aria-hidden="true" />
                      {grad}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post-Graduations */}
              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                  Pós-Graduações
                </p>
                <div className="flex flex-wrap gap-2">
                  {formacoes.posGraduacoes.map((pos, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-azul/10 text-azul text-sm font-medium rounded-xl hover:bg-azul/20 transition-colors"
                    >
                      <Bookmark className="w-4 h-4" aria-hidden="true" />
                      {pos}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
