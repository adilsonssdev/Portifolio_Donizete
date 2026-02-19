import { Navigation } from '@/components/custom/Navigation';
import { Hero } from '@/sections/Hero';
import { Sobre } from '@/sections/Sobre';
import { Servicos } from '@/sections/Servicos';
import { Diferenciais } from '@/sections/Diferenciais';
import { Depoimentos } from '@/sections/Depoimentos';
import { FAQ } from '@/sections/FAQ';
import { Contato } from '@/sections/Contato';
import { Rodape } from '@/sections/Rodape';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="conteudo-principal">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <Sobre />

        {/* Services Section */}
        <Servicos />

        {/* Differentials Section */}
        <Diferenciais />

        {/* Testimonials Section */}
        <Depoimentos />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contato />
      </main>

      {/* Footer */}
      <Rodape />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        theme="system"
        toastOptions={{
          style: {
            background: '#ffc107',
            color: '#000',
            border: 'none',
          },
        }}
      />
    </div>
  );
}

export default App;
