import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { NAV_LINKS, SOCIAL_LINKS } from '@/config';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip Link para Acessibilidade */}
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navegação principal">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-2 group"
              aria-label="DONIZETE SANTANA - Serviços Acadêmicos - Voltar ao início"
            >
              <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'
                }`}>
                <GraduationCap className={`w-6 h-6 ${isScrolled ? 'text-primary-foreground' : 'text-white'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'
                  }`}>
                  DONIZETE
                </span>
                <span className={`text-xs leading-tight transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white/80'
                  }`}>
                  Serviços Acadêmicos
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.replace('#', '')
                    ? isScrolled
                      ? 'text-primary bg-primary/10'
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-900'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button
                asChild
                className={`font-semibold shadow-md transition-all ${isScrolled
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'bg-white text-primary-accent hover:bg-white/90'
                  }`}
              >
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar orçamento pelo WhatsApp"
                >
                  Solicitar Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                  }`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
              }`}
          >
            <div className={`rounded-xl p-4 space-y-2 ${isScrolled ? 'bg-gray-50 dark:bg-slate-900' : 'bg-white/10 backdrop-blur-md'
              }`}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.replace('#', '')
                    ? isScrolled
                      ? 'bg-verde text-white'
                      : 'bg-white/30 text-white'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-200'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-colors ${isScrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-white text-primary-accent hover:bg-white/90'
                  }`}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
