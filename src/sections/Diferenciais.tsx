import { useEffect, useRef } from 'react';
import {
  Clock,
  Shield,
  UserCheck,
  CheckCircle,
  MessageCircle,
  Award,
  type LucideIcon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CONTEUDO } from '@/config';

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Shield,
  UserCheck,
  CheckCircle,
  MessageCircle,
  Award,
};

export function Diferenciais() {
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

  const { diferenciais } = CONTEUDO;

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="diferenciais-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {diferenciais.subtitulo}
          </span>
          <h2
            id="diferenciais-title"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {diferenciais.titulo}
          </h2>
          <p className="reveal text-gray-600 dark:text-gray-300 text-lg">
            Compromisso com excelência e resultados que superam expectativas
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.itens.map((item, index) => {
            const IconComponent = iconMap[item.icone] || Award;
            return (
              <Card
                key={index}
                className="reveal group shadow-card hover:shadow-card-hover transition-all duration-300 border-0 dark:bg-slate-900 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.descricao}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="reveal mt-16 bg-gradient-to-r from-verde/5 via-azul/5 to-amarelo/5 dark:from-verde/10 dark:via-azul/10 dark:to-amarelo/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Garantia de Satisfação
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Seu trabalho acadêmico merece atenção especial. Por isso, ofereço
                compromisso total com a qualidade e prazos. Se não ficar satisfeito,
                trabalhamos até ajustar conforme suas expectativas.
              </p>
              <ul className="space-y-2" role="list">
                {[
                  'Revisões incluídas no valor',
                  'Suporte durante todo o processo',
                  'Entrega no prazo combinado',
                  'Confidencialidade garantida',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                      <Award className="w-12 h-12 text-primary-foreground" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
