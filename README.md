# 🌟 Portfolio Website - Bartosz Hrycaj

*[Wersja polska poniżej](#wersja-polska)*

A modern, responsive portfolio website built with React, Next.js, and Tailwind CSS, featuring smooth animations and bilingual support (English/Polish).

## 🚀 Live Demo

**Live Site:** [https://bartoszhrycaj.vercel.app/](https://bartoszhrycaj.vercel.app/)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Internationalization](#-internationalization)
- [Animations & Styling](#-animations--styling)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)

## ✨ Features

### Core Features
- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Bilingual Support** - Dynamic language switching between English and Polish
- **Dark Theme** - Modern dark color scheme with gradient accents
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Interactive Navigation** - Dynamic navbar with active section detection
- **Project Showcase** - Filterable project gallery with live previews
- **Contact Integration** - Email copying functionality with visual feedback

### Technical Features
- **Server-Side Rendering** - Built with Next.js for optimal performance
- **Component-Based Architecture** - Modular React components for maintainability
- **Responsive Images** - Optimized image loading with Next.js Image component
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Modern CSS** - Tailwind CSS for rapid development and consistent styling

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Next.js 14** - React framework for production-ready applications
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for React

### UI Libraries
- **Material-UI** - Toggle buttons for language switching
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Icons** - Popular icon library for social media icons
- **Flag Icons** - Country flag icons for language selection

### Additional Libraries
- **React Type Animation** - Typewriter effect animations
- **React Transition Group** - Smooth component transitions

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 🚀 Installation

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/ITbartH/PortfolioWebsite-React-NextJS-TailwindCSS.git
cd PortfolioWebsite-React-NextJS-TailwindCSS
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── AboutSection.jsx       # About me section with tabs
│   │   ├── AchievementsSection.jsx # Stats and achievements
│   │   ├── EmailSection.jsx       # Contact section
│   │   ├── Footer.jsx             # Site footer
│   │   ├── HeroSection.jsx        # Landing hero section
│   │   ├── ImageSlider.jsx        # About section image carousel
│   │   ├── MenuOverlay.jsx        # Mobile menu overlay
│   │   ├── Navbar.jsx             # Main navigation
│   │   ├── NavLink.jsx            # Individual nav link component
│   │   ├── ProjectCard.jsx        # Project showcase card
│   │   ├── ProjectSection.jsx     # Projects grid section
│   │   ├── ProjectTag.jsx         # Project filter tags
│   │   └── TabButton.jsx          # Tab navigation buttons
│   ├── translations/        # Language files
│   │   ├── en/
│   │   │   └── en.json           # English translations
│   │   └── pl/
│   │       └── pl.json           # Polish translations
│   ├── globals.css         # Global styles and animations
│   ├── layout.js           # Root layout component
│   └── page.js             # Main page component
├── public/                 # Static assets
│   ├── images/             # Project and personal images
│   ├── github-icon.svg     # Social media icons
│   ├── linkedin-icon.svg
│   └── Bartosz_Hrycaj_CV.pdf # Downloadable CV
└── README.md
```

## 🧩 Components Overview

### Core Layout Components

#### `Navbar.jsx`
- **Purpose**: Main navigation with language switching
- **Features**: 
  - Responsive design (desktop/mobile)
  - Active section detection
  - Smooth scroll animation effects
  - Language toggle buttons
  - Mobile hamburger menu

#### `HeroSection.jsx`
- **Purpose**: Landing section with personal introduction
- **Features**:
  - Animated typewriter effect
  - Responsive image with glow effects
  - Download CV button
  - Bilingual content support

#### `AboutSection.jsx`
- **Purpose**: Personal information with tabbed content
- **Features**:
  - Image slider carousel
  - Interactive tabs (Skills, Education, Certifications)
  - Smooth tab transitions
  - Responsive layout

#### `ProjectSection.jsx`
- **Purpose**: Showcase of development projects
- **Features**:
  - Filterable project grid
  - Project categories (All, C#, Web, Java)
  - Live preview and GitHub links
  - Staggered animations

#### `EmailSection.jsx`
- **Purpose**: Contact information and interaction
- **Features**:
  - Email copying functionality
  - Social media links
  - Visual feedback animations
  - Bilingual content

### Supporting Components

#### `AchievementsSection.jsx`
- **Purpose**: Display key statistics
- **Features**: Responsive stats cards with achievements

#### `Footer.jsx`
- **Purpose**: Site footer with navigation and social links
- **Features**: Multi-column responsive layout

#### `ImageSlider.jsx`
- **Purpose**: Automated image carousel for about section
- **Features**: Fade transitions, auto-advance

## 🌐 Internationalization

The application supports two languages with dynamic switching:

### Language Structure
- **English**: `src/app/translations/en/en.json`
- **Polish**: `src/app/translations/pl/pl.json`

### Implementation
- Language state managed in main `page.js`
- Props passed down to all components
- Smooth transition effects when switching languages
- Flag icons for visual language selection

### Adding New Languages
1. Create new translation file: `src/app/translations/[lang]/[lang].json`
2. Add language option to toggle buttons in `Navbar.jsx`
3. Update language logic in components

## 🎨 Animations & Styling

### Animation Libraries
- **Framer Motion**: Page transitions, hover effects, scroll animations
- **React Type Animation**: Typewriter effects in hero section
- **CSS Animations**: Custom keyframe animations for backgrounds

### Design System
- **Color Palette**: Dark theme with yellow/gold accents (#f0bc0d)
- **Typography**: Poppins font family for clean, modern look
- **Spacing**: Consistent Tailwind spacing scale
- **Responsive Design**: Mobile-first approach with breakpoints

### Key Animations
- **Navbar**: Scroll-based backdrop blur and border effects
- **Hero**: Floating background elements and image glow
- **Projects**: Staggered card entrance animations
- **Navigation**: Smooth hover states and active indicators

## 🚢 Deployment

### Vercel Deployment (Recommended)
The project is optimized for Vercel deployment:

1. **Connect GitHub repository** to Vercel
2. **Automatic deployments** on main branch pushes
3. **Environment variables** (if needed) set in Vercel dashboard

### Alternative Deployment Options
- **Netlify**: Full Next.js support with automatic deployments
- **GitHub Pages**: Static export (requires `next export`)
- **Self-hosted**: Docker containerization available

### Build Optimization
- Image optimization with Next.js Image component
- CSS purging with Tailwind CSS
- Code splitting and lazy loading
- SEO optimization with proper meta tags

### Development Guidelines
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling consistency
- Add proper TypeScript types if converting to TypeScript
- Test on multiple screen sizes
- Ensure bilingual content is properly translated

## 📞 Contact

**Bartosz Hrycaj**
- **Email**: hrycaj.bartosz@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/bartosz-hrycaj](https://www.linkedin.com/in/bartosz-hrycaj)
- **GitHub**: [https://github.com/ITbartH](https://github.com/ITbartH)

---

# Wersja Polska

## 🌟 Strona Portfolio - Bartosz Hrycaj

Nowoczesna, responsywna strona portfolio zbudowana z React, Next.js i Tailwind CSS, z płynnymi animacjami i obsługą dwóch języków (angielski/polski).

## 🚀 Demo na żywo

**Strona na żywo:** [https://bartoszhrycaj.vercel.app/](bartoszhrycaj.vercel.app/)

## 📋 Spis treści

- [Funkcjonalności](#-funkcjonalności)
- [Stack technologiczny](#-stack-technologiczny)
- [Instalacja](#-instalacja)
- [Struktura projektu](#-struktura-projektu)
- [Przegląd komponentów](#-przegląd-komponentów)
- [Internacjonalizacja](#-internacjonalizacja)
- [Animacje i stylizacja](#-animacje-i-stylizacja)
- [Wdrożenie](#-wdrożenie)
- [Współpraca](#-współpraca)
- [Kontakt](#-kontakt)

## ✨ Funkcjonalności

### Główne funkcjonalności
- **Responsywny design** - Zoptymalizowany dla wszystkich rozmiarów ekranów
- **Obsługa dwóch języków** - Dynamiczne przełączanie między angielskim a polskim
- **Ciemny motyw** - Nowoczesny ciemny schemat kolorów z gradientowymi akcentami
- **Płynne animacje** - Napędzane przez Framer Motion dla angażującego doświadczenia
- **Interaktywna nawigacja** - Dynamiczny navbar z wykrywaniem aktywnej sekcji
- **Prezentacja projektów** - Filtrowana galeria projektów z podglądami na żywo
- **Integracja kontaktu** - Funkcjonalność kopiowania emaila z wizualną reakcją

### Funkcjonalności techniczne
- **Renderowanie po stronie serwera** - Zbudowane z Next.js dla optymalnej wydajności
- **Architektura komponentowa** - Modularne komponenty React dla łatwości utrzymania
- **Responsywne obrazy** - Zoptymalizowane ładowanie obrazów z komponentem Next.js Image
- **Zoptymalizowane SEO** - Odpowiednie meta tagi i semantyczna struktura HTML
- **Nowoczesny CSS** - Tailwind CSS dla szybkiego rozwoju i spójnej stylizacji

## 🛠 Stack technologiczny

### Frontend
- **React 18** - Nowoczesny React z hookami i komponentami funkcyjnymi
- **Next.js 14** - Framework React dla aplikacji gotowych do produkcji
- **Tailwind CSS** - Framework CSS typu utility-first
- **Framer Motion** - Biblioteka animacji dla React

### Biblioteki UI
- **Material-UI** - Przyciski toggle do przełączania języka
- **Heroicons** - Piękne, ręcznie wykonane ikony SVG
- **React Icons** - Popularna biblioteka ikon dla mediów społecznościowych
- **Flag Icons** - Ikony flag krajów dla wyboru języka

### Dodatkowe biblioteki
- **React Type Animation** - Animacje efektu maszyny do pisania
- **React Transition Group** - Płynne przejścia komponentów

## 🚀 Instalacja

### Wymagania wstępne
- Node.js 16.0 lub wyższy
- Menedżer pakietów npm lub yarn

### Instrukcje konfiguracji

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/ITbartH/PortfolioWebsite-React-NextJS-TailwindCSS.git
cd PortfolioWebsite-React-NextJS-TailwindCSS
cd portfolio-website
```

2. **Zainstaluj zależności**
```bash
npm install
# lub
yarn install
```

3. **Uruchom serwer deweloperski**
```bash
npm run dev
# lub
yarn dev
```

4. **Otwórz przeglądarkę**
Przejdź do [http://localhost:3000](http://localhost:3000)

### Build dla produkcji
```bash
npm run build
npm start
# lub
yarn build
yarn start
```

## 📁 Struktura projektu

```
src/
├── app/
│   ├── components/          # Komponenty React
│   │   ├── AboutSection.jsx       # Sekcja "O mnie" z zakładkami
│   │   ├── AchievementsSection.jsx # Statystyki i osiągnięcia
│   │   ├── EmailSection.jsx       # Sekcja kontaktowa
│   │   ├── Footer.jsx             # Stopka strony
│   │   ├── HeroSection.jsx        # Główna sekcja powitalna
│   │   ├── ImageSlider.jsx        # Karuzela obrazów w sekcji "O mnie"
│   │   ├── MenuOverlay.jsx        # Nakładka menu mobilnego
│   │   ├── Navbar.jsx             # Główna nawigacja
│   │   ├── NavLink.jsx            # Komponent pojedynczego linku nav
│   │   ├── ProjectCard.jsx        # Karta prezentacji projektu
│   │   ├── ProjectSection.jsx     # Sekcja siatki projektów
│   │   ├── ProjectTag.jsx         # Tagi filtrów projektów
│   │   └── TabButton.jsx          # Przyciski nawigacji zakładek
│   ├── translations/        # Pliki językowe
│   │   ├── en/
│   │   │   └── en.json           # Tłumaczenia angielskie
│   │   └── pl/
│   │       └── pl.json           # Tłumaczenia polskie
│   ├── globals.css         # Globalne style i animacje
│   ├── layout.js           # Główny komponent layoutu
│   └── page.js             # Główny komponent strony
├── public/                 # Statyczne zasoby
│   ├── images/             # Obrazy projektów i osobiste
│   ├── github-icon.svg     # Ikony mediów społecznościowych
│   ├── linkedin-icon.svg
│   └── Bartosz_Hrycaj_CV.pdf # CV do pobrania
└── README.md
```

## 🧩 Przegląd komponentów

### Główne komponenty layoutu

#### `Navbar.jsx`
- **Cel**: Główna nawigacja z przełączaniem języka
- **Funkcjonalności**:
  - Responsywny design (desktop/mobile)
  - Wykrywanie aktywnej sekcji
  - Płynne efekty animacji przewijania
  - Przyciski przełączania języka
  - Menu hamburger na mobile

#### `HeroSection.jsx`
- **Cel**: Sekcja powitalna z osobistym wprowadzeniem
- **Funkcjonalności**:
  - Animowany efekt maszyny do pisania
  - Responsywny obraz z efektami świecenia
  - Przycisk pobierania CV
  - Obsługa treści dwujęzycznych

#### `AboutSection.jsx`
- **Cel**: Informacje osobiste z treścią w zakładkach
- **Funkcjonalności**:
  - Karuzela slajdów obrazów
  - Interaktywne zakładki (Umiejętności, Edukacja, Certyfikaty)
  - Płynne przejścia między zakładkami
  - Responsywny układ

#### `ProjectSection.jsx`
- **Cel**: Prezentacja projektów deweloperskich
- **Funkcjonalności**:
  - Filtrowana siatka projektów
  - Kategorie projektów (Wszystkie, C#, Web, Java)
  - Linki do podglądu na żywo i GitHub
  - Animacje kaskadowe

#### `EmailSection.jsx`
- **Cel**: Informacje kontaktowe i interakcja
- **Funkcjonalności**:
  - Funkcjonalność kopiowania emaila
  - Linki do mediów społecznościowych
  - Animacje wizualnej reakcji
  - Treść dwujęzyczna

## 🌐 Internacjonalizacja

Aplikacja obsługuje dwa języki z dynamicznym przełączaniem:

### Struktura językowa
- **Angielski**: `src/app/translations/en/en.json`
- **Polski**: `src/app/translations/pl/pl.json`

### Implementacja
- Stan języka zarządzany w głównym `page.js`
- Props przekazywane do wszystkich komponentów
- Płynne efekty przejścia podczas zmiany języka
- Ikony flag dla wizualnej selekcji języka

### Dodawanie nowych języków
1. Utwórz nowy plik tłumaczenia: `src/app/translations/[język]/[język].json`
2. Dodaj opcję języka do przycisków toggle w `Navbar.jsx`
3. Zaktualizuj logikę językową w komponentach

## 🎨 Animacje i stylizacja

### Biblioteki animacji
- **Framer Motion**: Przejścia stron, efekty hover, animacje przewijania
- **React Type Animation**: Efekty maszyny do pisania w sekcji hero
- **Animacje CSS**: Niestandardowe animacje keyframe dla tła

### System designu
- **Paleta kolorów**: Ciemny motyw z żółto-złotymi akcentami (#f0bc0d)
- **Typografia**: Rodzina czcionek Poppins dla czystego, nowoczesnego wyglądu
- **Odstępy**: Spójna skala odstępów Tailwind
- **Responsywny design**: Podejście mobile-first z breakpointami

### Kluczowe animacje
- **Navbar**: Efekty blur i border oparte na przewijaniu
- **Hero**: Pływające elementy tła i świecenie obrazu
- **Projekty**: Kaskadowe animacje wejścia kart
- **Nawigacja**: Płynne stany hover i wskaźniki aktywne

## 🚢 Wdrożenie

### Wdrożenie Vercel (Zalecane)
Projekt jest zoptymalizowany dla wdrożenia Vercel:

1. **Połącz repozytorium GitHub** z Vercel
2. **Automatyczne wdrożenia** przy pushach do głównej gałęzi
3. **Zmienne środowiskowe** (jeśli potrzebne) ustawione w dashboardzie Vercel

### Alternatywne opcje wdrożenia
- **Netlify**: Pełna obsługa Next.js z automatycznymi wdrożeniami
- **GitHub Pages**: Eksport statyczny (wymaga `next export`)
- **Self-hosted**: Dostępna konteneryzacja Docker

### Wytyczne deweloperskie
- Postępuj zgodnie z najlepszymi praktykami React i wzorcami hooks
- Używaj Tailwind CSS dla spójności stylizacji
- Dodaj odpowiednie typy TypeScript jeśli konwertujesz do TypeScript
- Testuj na różnych rozmiarach ekranów
- Upewnij się, że treść dwujęzyczna jest właściwie przetłumaczona

## 📞 Kontakt

**Bartosz Hrycaj**
- **Email**: hrycaj.bartosz@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/bartosz-hrycaj](https://www.linkedin.com/in/bartosz-hrycaj)
- **GitHub**: [https://github.com/ITbartH](https://github.com/ITbartH)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, please consider giving it a star on GitHub!**
