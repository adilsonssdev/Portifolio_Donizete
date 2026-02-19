import { useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Send,
  MapPin,
  Check,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CONTEUDO, CONTATO, SOCIAL_LINKS } from '@/config';

export function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatar mensagem para o WhatsApp
    const message = `Olá, meu nome é ${formData.nome}.
E-mail: ${formData.email}
Mensagem: ${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTATO.whatsapp}?text=${encodedMessage}`;

    // Simulação de delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 800));

    toast({
      title: "Redirecionando!",
      description: "Abrindo o WhatsApp para enviar sua mensagem...",
      duration: 3000,
    });

    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');

    setFormData({ nome: '', email: '', mensagem: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const { contato } = CONTEUDO;

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: CONTATO.whatsappFormatado,
      href: SOCIAL_LINKS.whatsapp,
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: CONTATO.email,
      href: SOCIAL_LINKS.email,
      color: 'bg-azul',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: `@${CONTATO.instagram}`,
      href: SOCIAL_LINKS.instagram,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: CONTATO.facebook,
      href: SOCIAL_LINKS.facebook,
      color: 'bg-blue-600',
    },
  ];

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-muted/30 dark:bg-muted/10 transition-colors"
      aria-labelledby="contato-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {contato.subtitulo}
          </span>
          <h2
            id="contato-title"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {contato.titulo}
          </h2>
          <p className="reveal text-gray-600 dark:text-gray-300 text-lg">
            {contato.descricao}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Methods */}
            <div className="reveal grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-border hover:border-primary/20"
                  aria-label={`Contato via ${method.label}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color === 'bg-verde' || method.color === 'bg-azul' ? 'bg-primary' : method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-white truncate">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location Card */}
            <Card className="reveal border-0 shadow-sm bg-primary/5 dark:bg-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Atendimento Online</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Atendo clientes de todo o Brasil de forma 100% online.
                      Não importa sua cidade, posso ajudar com seu trabalho acadêmico!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <div className="reveal flex items-center gap-3 p-4 bg-amarelo/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-amarelo flex items-center justify-center">
                <Check className="w-4 h-4 text-gray-900" aria-hidden="true" />
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Resposta rápida:</span> Entro em contato em até 24h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="reveal lg:col-span-3 border-0 shadow-card">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {contato.formulario.titulo}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-gray-700 dark:text-gray-300">
                      {contato.formulario.nome}
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="h-12 border-gray-200 focus:border-primary focus:ring-primary"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      {contato.formulario.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-12 border-gray-200 focus:border-primary focus:ring-primary"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-gray-700 dark:text-gray-300">
                    {contato.formulario.mensagem}
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu trabalho, prazo e necessidades específicas..."
                    rows={5}
                    className="border-gray-200 focus:border-primary focus:ring-primary resize-none"
                    aria-required="true"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      {contato.formulario.botao}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
