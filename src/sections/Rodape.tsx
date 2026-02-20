import { useState } from 'react';
import { GraduationCap, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTEUDO, CONTATO, SOCIAL_LINKS, NAV_LINKS } from '@/config';
import { Modal } from '@/components/ui/modal';

export function Rodape() {
  const { rodape, legal } = CONTEUDO;
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="inline-flex items-center gap-3 group mb-4"
              aria-label="DONIZETE SANTANA - Serviços Acadêmicos"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-bold">DONIZETE SANTANA</span>
                <span className="block text-sm text-gray-400">Serviços Acadêmicos</span>
              </div>
            </a>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
              Apoio acadêmico completo para trabalhos escolares e universitários.
              Formatação ABNT, revisão e orientação com qualidade e pontualidade.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
                { icon: Mail, href: SOCIAL_LINKS.email, label: 'E-mail' },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-2" role="list">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{CONTATO.whatsappFormatado}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span className="break-all">{CONTATO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>@{CONTATO.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {rodape.direitos}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={legal.politicaPrivacidade.titulo}
      >
        <div dangerouslySetInnerHTML={{ __html: legal.politicaPrivacidade.texto }} />
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title={legal.termosDeUso.titulo}
      >
        <div dangerouslySetInnerHTML={{ __html: legal.termosDeUso.texto }} />
      </Modal>
    </footer>
  );
}
