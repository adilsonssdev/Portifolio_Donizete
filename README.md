# 🎓 DONIZETE SANTANA - Portfólio Profissional

Site de portfólio profissional moderno para **Donizete Santana**, especializado em serviços acadêmicos, formatação ABNT, revisão ortográfica e orientação metodológica.

![Versão](https://img.shields.io/badge/versão-1.1.0-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![Status](https://img.shields.io/badge/status-otimizado-brightgreen)

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura](#estrutura)
- [Personalização](#personalização)
- [Instalação](#instalação)
- [Deploy](#deploy)

## 🎯 Sobre

Este projeto é um portfólio de alta performance, desenvolvido com foco em conversão e autoridade profissional. Apresenta uma interface limpa, animações fluidas e suporte completo a temas.

### Seções Inclusas:
- **Hero**: Chamada de impacto com CTAs diretos.
- **Sobre**: Bio profissional com foto personalizada e formação acadêmica centralizada.
- **Serviços**: Detalhamento de trabalhos e processos acadêmicos.
- **Diferenciais**: Por que escolher os serviços de Donizete Santana.
- **Depoimentos**: Prova social de clientes satisfeitos.
- **FAQ**: Dúvidas frequentes (incluindo benefícios do Modo Escuro).
- **Contato**: Formulário funcional e integração com WhatsApp.

## 🚀 Tecnologias

- **React 18** + **Vite** (Build ultra-rápido)
- **TypeScript** (Segurança e escalabilidade)
- **Tailwind CSS** (Estilização moderna e responsiva)
- **shadcn/ui** (Componentes de alta qualidade)
- **next-themes** (Gestão inteligente de temas Light/Dark)
- **Lucide React** (Ícones semânticos)

## ✨ Novidades desta Versão

- 🌙 **Modo Escuro Completo**: Suporte a temas claro, escuro e sistema.
- 🖼️ **Foto Dinâmica**: Sua foto profissional com efeitos modernos de vidro e brilho.
- 📏 **Layout Otimizado**: Seção de formação acadêmica redesenhada para melhor visualização em desktops.
- 🧹 **Código Limpo**: Purga de componentes não utilizados e otimização de assets.

## 📁 Estrutura Simplificada

```
├── public/
│   ├── img/                # Sua foto (donizete.jpg)
│   ├── robots.txt          # SEO
│   └── sitemap.xml         # SEO
├── src/
│   ├── components/
│   │   ├── custom/         # Navigation, ThemeToggle
│   │   └── ui/             # Componentes essenciais (Button, Card, etc)
│   ├── sections/           # Seções modulares da página
│   ├── config.ts           # CENTRAL DE CONTEÚDO (Edite tudo aqui!)
│   ├── App.tsx             # Orquestrador das seções
│   └── index.css           # Variáveis de cores e globais
```

## 🎨 Personalização

### 1. Editar Textos e Contatos
Quase todo o site pode ser editado em um único arquivo: `src/config.ts`.
- Altere seu WhatsApp, E-mail e redes sociais no objeto `CONTATO`.
- Altere os textos das seções, depoimentos e perguntas do FAQ no objeto `CONTEUDO`.

### 2. Trocar a Foto de Perfil
Para trocar sua foto:
1. Vá na pasta `public/img/`.
2. Substitua o arquivo `donizete.jpg` por sua nova foto (mantenha exatamente o mesmo nome).
3. O site atualizará automaticamente com os efeitos modernos aplicados!

### 3. Ajustar Cores
As cores principais da sua marca (Verde, Amarelo e Azul) podem ser ajustadas em `src/index.css` alterando as variáveis de HSL no `:root`.

## 💻 Instalação Local

1. Instale as dependências: `npm install`
2. Inicie o desenvolvimento: `npm run dev`
3. Gere a versão final: `npm run build`

## 🚀 Deploy

Recomendamos **Vercel** ou **Netlify**. Basta conectar o repositório e configurar:
- Build command: `npm run build`
- Output directory: `dist`

---

<p align="center">
  Desenvolvido com foco em excelência acadêmica.
</p>
