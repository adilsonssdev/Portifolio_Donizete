import { useEffect, useRef } from 'react';
import { Star, Quote, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CONTEUDO } from '@/config';

export function Depoimentos() {
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

  const { depoimentos } = CONTEUDO;

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-muted/30 dark:bg-muted/10 transition-colors"
      aria-labelledby="depoimentos-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-verde/10 text-verde text-sm font-semibold mb-4">
            {depoimentos.subtitulo}
          </span>
          <h2
            id="depoimentos-title"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {depoimentos.titulo}
          </h2>
          <p className="reveal text-gray-600 dark:text-gray-300 text-lg">
            Veja o que meus clientes dizem sobre o trabalho realizado
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.itens.map((depoimento, index) => (
            <Card
              key={index}
              className="reveal shadow-card hover:shadow-card-hover transition-all duration-300 border-0 relative dark:bg-slate-900"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-verde rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" aria-hidden="true" />
              </div>

              <CardContent className="p-6 pt-8">
                {/* Rating */}
                <div
                  className="flex gap-1 mb-4"
                  role="img"
                  aria-label={`Avaliação: ${depoimento.avaliacao} de 5 estrelas`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < depoimento.avaliacao
                          ? 'text-amarelo fill-amarelo'
                          : 'text-gray-300'
                        }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{depoimento.texto}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-verde to-azul flex items-center justify-center">
                    <User className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{depoimento.nome}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{depoimento.curso}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Trabalhos Entregues' },
            { value: '98%', label: 'Clientes Satisfeitos' },
            { value: '12+', label: 'Anos de Experiência' },
            { value: '5.0', label: 'Avaliação Média' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <p className="text-3xl lg:text-4xl font-bold text-verde mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
