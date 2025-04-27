import type React from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import {
  ArrowRight,
  LayoutGrid,
  MessageSquare,
  Shield
} from "components/icons";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-primary bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img
              src="/apple-touch-icon.png"
              alt="LISA AI Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary">LISA AI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Cómo funciona
            </a>
            <a
              href="#color-palette"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Identidad visual
            </a>
          </nav>
          <div className="flex items-center">
            <Link to="/chat">
              <Button className="bg-primary hover:bg-dark">Comenzar</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    LISA AI
                  </h1>
                  <p className="text-xl text-primary font-medium">
                    Diseña tu vida, un paso a la vez.
                  </p>
                </div>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  LISA AI es tu asistente inteligente para crear un estilo de
                  vida equilibrado, saludable y pleno, combinando diseño
                  minimalista con tecnología de vanguardia.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/chat">
                    <Button className="bg-primary hover:bg-primary-800">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline">Ver demostración</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary-50 rounded-3xl transform rotate-3 scale-105 opacity-70"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-secondary">
                  <div className="aspect-video w-full max-w-[500px] overflow-hidden rounded-lg bg-primary-50 flex items-center justify-center">
                    <img
                      src="/apple-touch-icon.png"
                      alt="LISA AI Logo"
                      className="h-24 w-24 opacity-50"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 w-3/4 bg-secondary rounded"></div>
                    <div className="h-4 w-1/2 bg-secondary rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Diseñado para simplificar tu vida
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  LISA AI combina inteligencia artificial con diseño minimalista
                  para ayudarte a crear un estilo de vida equilibrado y pleno.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Organización inteligente
                </h3>
                <p className="text-center text-gray-600">
                  Organiza tus tareas, hábitos y metas con un sistema intuitivo
                  y adaptable.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Asistente conversacional
                </h3>
                <p className="text-center text-gray-600">
                  Interactúa naturalmente con LISA AI para recibir consejos
                  personalizados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Privacidad garantizada
                </h3>
                <p className="text-center text-gray-600">
                  Tus datos están seguros con nuestro sistema de encriptación
                  avanzado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                  Cómo funciona
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Simplifica tu vida en tres pasos
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  LISA AI se adapta a tus necesidades y te ayuda a crear un
                  estilo de vida equilibrado.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary">Comenzar</h3>
                <p className="text-center text-gray-600">
                  Click en comenzar ahora para chatear con LISA AI
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary">Personaliza</h3>
                <p className="text-center text-gray-600">
                  El chat te guiara para configurar tus preferencias y objetivos
                  para una experiencia a medida.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary">Transforma</h3>
                <p className="text-center text-gray-600">
                  Observa cómo tu vida se transforma con las recomendaciones de
                  LISA AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comienza tu transformación hoy
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Únete a miles de personas que ya están diseñando una vida
                  mejor con LISA AI.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/chat">
                  <Button className="bg-dark text-primary hover:bg-gray-100">
                    Comenzar gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-secondary"
                >
                  Conocer más
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Color Palette Section */}
        <section id="color-palette" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                  Identidad visual
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Nuestra paleta de colores
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Colores cuidadosamente seleccionados que reflejan la esencia
                  minimalista y elegante de LISA AI.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {/* Color 1 - Azul Profundo */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-primary"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Azul Profundo</h3>
                  <p className="text-sm text-gray-600">Color principal</p>
                  <p className="mt-2 font-mono text-sm">#0F2A4A</p>
                </div>
              </div>

              {/* Color 2 - Azul Medio */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-secondary"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Azul Medio</h3>
                  <p className="text-sm text-gray-600">Acentos y hover</p>
                  <p className="mt-2 font-mono text-sm">#1A365D</p>
                </div>
              </div>

              {/* Color 3 - Azul Claro */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-blue-100"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Azul Claro</h3>
                  <p className="text-sm text-gray-600">Fondos y bordes</p>
                  <p className="mt-2 font-mono text-sm">#D9E2F5</p>
                </div>
              </div>

              {/* Color 4 - Azul Pálido */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-blue-50"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Azul Pálido</h3>
                  <p className="text-sm text-gray-600">Fondos sutiles</p>
                  <p className="mt-2 font-mono text-sm">#F0F4FA</p>
                </div>
              </div>

              {/* Color 5 - Blanco */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-white"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Blanco</h3>
                  <p className="text-sm text-gray-600">Fondos principales</p>
                  <p className="mt-2 font-mono text-sm">#FFFFFF</p>
                </div>
              </div>

              {/* Color 6 - Gris Claro */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-gray-50"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Gris Claro</h3>
                  <p className="text-sm text-gray-600">Fondos secundarios</p>
                  <p className="mt-2 font-mono text-sm">#F9FAFB</p>
                </div>
              </div>

              {/* Color 7 - Gris Medio */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-gray-500"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Gris Medio</h3>
                  <p className="text-sm text-gray-600">Texto secundario</p>
                  <p className="mt-2 font-mono text-sm">#6B7280</p>
                </div>
              </div>

              {/* Color 8 - Gris Oscuro */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="h-32 bg-gray-800"></div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">Gris Oscuro</h3>
                  <p className="text-sm text-gray-600">Texto principal</p>
                  <p className="mt-2 font-mono text-sm">#1F2937</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Estos colores están diseñados para crear una experiencia visual
                coherente y agradable en todas las interfaces de LISA AI.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/apple-touch-icon.png"
                alt="LISA AI Logo"
                className="h-6 w-6"
              />
              <span className="text-xl font-bold text-primary">LISA AI</span>
            </div>
            <nav className="flex gap-4 md:gap-6">
              <a
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Términos
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Contacto
              </a>
            </nav>
          </div>
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} LISA AI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
