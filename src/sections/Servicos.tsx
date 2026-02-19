import { useEffect, useRef } from 'react';
import {
  FileText,
  BookOpen,
  GraduationCap,
  ScrollText,
  Library,
  ClipboardList,
  CaseSensitive,
  Check
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTEUDO, SOCIAL_LINKS } from '@/config';

export function Servicos() {
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
      (el as HTMLElement).style.animationDelay = `${index * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const { servicos } = CONTEUDO;

  const tiposTrabalhoIcons = [FileText, BookOpen, GraduationCap, ScrollText, Library, ClipboardList, FileText, CaseSensitive];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-muted/30 dark:bg-muted/10"
      aria-labelledby="servicos-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {servicos.subtitulo}
          </span>
          <h2
            id="servicos-title"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {servicos.titulo}
          </h2>
          <p className="reveal text-gray-600 dark:text-gray-300 text-lg">
            Ofereço soluções completas para todas as etapas do seu trabalho acadêmico,
            desde a formatação até a orientação metodológica.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tipos de Trabalho */}
          <Card className="reveal shadow-card hover:shadow-card-hover transition-shadow border-0 p-0 overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground pb-6 pt-6">
              <CardTitle className="flex items-center gap-3 text-xl">
                <GraduationCap className="w-6 h-6" aria-hidden="true" />
                {servicos.tiposTrabalho.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3" role="list">
                {servicos.tiposTrabalho.itens.map((item, index) => {
                  const IconComponent = tiposTrabalhoIcons[index] || FileText;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          {/* Serviços Oferecidos */}
          <Card className="reveal shadow-card hover:shadow-card-hover transition-shadow border-0 p-0 overflow-hidden">
            <CardHeader className="bg-secondary text-secondary-foreground pb-6 pt-6">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Check className="w-6 h-6" aria-hidden="true" />
                {servicos.servicosOferecidos.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3" role="list">
                {servicos.servicosOferecidos.itens.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-gray-900 dark:text-white font-semibold block">{item.titulo}</span>
                      <span className="text-gray-500 dark:text-gray-300 text-sm">{item.descricao}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Não encontrou o que procura? Entre em contato para discutirmos seu projeto específico.
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-verde font-semibold hover:underline"
          >
            Falar no WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
