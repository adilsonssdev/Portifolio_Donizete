import { useEffect, useRef } from 'react';
import { HelpCircle, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CONTEUDO, SOCIAL_LINKS } from '@/config';

export function FAQ() {
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

  const { faq } = CONTEUDO;

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="faq-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <span className="reveal inline-block px-4 py-1.5 rounded-full bg-azul/10 text-azul text-sm font-semibold mb-4">
                {faq.subtitulo}
              </span>
              <h2
                id="faq-title"
                className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {faq.titulo}
              </h2>
              <p className="reveal text-gray-600 dark:text-gray-300 mb-8">
                Aqui estão as respostas para as perguntas mais comuns.
                Se não encontrar o que procura, entre em contato!
              </p>

              {/* Contact CTA */}
              <div className="reveal bg-gradient-to-br from-verde/5 to-azul/5 dark:from-verde/10 dark:to-azul/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-verde flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Ainda tem dúvidas?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Estou disponível para esclarecer qualquer questão sobre os serviços.
                </p>
                <Button
                  asChild
                  className="w-full bg-verde hover:bg-verde/90 text-white"
                >
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Falar no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.itens.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="reveal border border-gray-200 dark:border-gray-800 rounded-xl px-6 data-[state=open]:border-verde/30 data-[state=open]:bg-verde/5 dark:data-[state=open]:bg-verde/10 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-verde py-4 [&[data-state=open]>svg]:rotate-180">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 leading-relaxed">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
