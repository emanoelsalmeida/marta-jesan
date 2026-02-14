import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Star, Menu, X, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-amber-200 selection:text-slate-900">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-wide text-slate-900">
            MARTA JESAN<span className="text-amber-600">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('metodo')} className="text-sm font-medium hover:text-amber-600 transition-colors">O Método</button>
            <button onClick={() => scrollToSection('sobre')} className="text-sm font-medium hover:text-amber-600 transition-colors">Sobre Mim</button>
            <button onClick={() => scrollToSection('contato')} className="bg-slate-900 text-white px-6 py-2 rounded-none hover:bg-amber-600 transition-colors duration-300 text-sm tracking-wider uppercase">
              Aplicar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('metodo')} className="text-left py-2 border-b border-slate-100">O Método</button>
            <button onClick={() => scrollToSection('sobre')} className="text-left py-2 border-b border-slate-100">Sobre Mim</button>
            <button onClick={() => scrollToSection('contato')} className="text-left py-2 font-bold text-amber-600">Começar Agora</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block border-l-4 border-amber-500 pl-4 py-1">
              <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Liderança & Posicionamento</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight">
              Você não precisa de força. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Precisa de fundamento.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
              O respeito não vem do esforço exagerado para ser notada, mas da segurança com que você ocupa o seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('contato')} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2">
                Destravar minha liderança <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Image Placeholder intended for Marta */}
          <div className="relative hidden md:block h-[600px] w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-full bg-slate-800 rounded-tl-[100px] overflow-hidden border-4 border-slate-700 shadow-2xl">
              <img
                src="https://genestudio.site/wp-content/uploads/2026/02/1.jpg"
                alt="Marta Jesan - Liderança e Posicionamento"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-10 right-10 bg-white text-slate-900 p-6 shadow-xl max-w-xs z-20 border-l-4 border-amber-500">
              <p className="font-serif italic text-lg">"Liderar com firmeza sem precisar provar seu valor o tempo todo."</p>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem / Insight Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Cansada de fazer força para ser ouvida?
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Muitas mulheres no corporativo acreditam que precisam trabalhar o dobro para ter metade do reconhecimento.
              Depois de <span className="font-bold text-slate-900">27 anos de experiência</span>, eu descobri que essa equação está errada.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Quando você tenta "provar" seu valor o tempo todo, você transmite insegurança.
              A verdadeira autoridade é silenciosa, estratégica e fundamentada.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section id="metodo" className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">A Metodologia</span>
            <h2 className="font-serif text-4xl mt-3 text-slate-900">Os 3 Pilares do Posicionamento</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-slate-900 group">
              <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-600">1</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Clareza</h3>
              <p className="text-slate-600 leading-relaxed">
                Para decidir com assertividade. Elimine a dúvida e a hesitação. Quem sabe onde quer chegar inspira confiança imediata na equipe e nos superiores.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 group relative -mt-4 md:-mt-8 z-10">
              <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-600">2</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Presença</h3>
              <p className="text-slate-600 leading-relaxed">
                Para comunicar autoridade antes mesmo de falar. Sua postura, sua energia e a forma como você ocupa o ambiente definem como você será tratada.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-slate-900 group">
              <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-600">3</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Posicionamento</h3>
              <p className="text-slate-600 leading-relaxed">
                Para ocupar seu lugar no topo com segurança. Deixe de ser operacional e torne-se estratégica. Seja a líder que não apenas executa, mas direciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
              <img
                src="https://genestudio.site/wp-content/uploads/2026/02/1.jpg"
                alt="Marta Jesan"
                className="relative rounded-lg shadow-xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 shadow-lg hidden md:block">
                <p className="font-bold text-3xl text-amber-500">27+</p>
                <p className="text-sm uppercase tracking-widest">Anos de Carreira</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-serif text-4xl text-slate-900">Olá, eu sou Marta Jesan.</h2>
              <h3 className="text-xl text-amber-600 font-medium">Mentora de Liderança e Posicionamento de Carreira</h3>

              <p className="text-slate-600 leading-relaxed">
                Passei quase três décadas no mundo corporativo. Vivi na pele os desafios, as políticas internas e a pressão constante por resultados.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Entendi que muitas mulheres brilhantes ficam estagnadas não por falta de competência técnica, mas por falta de <span className="font-bold text-slate-900">posicionamento estratégico</span>.
              </p>

              <blockquote className="border-l-4 border-amber-500 pl-6 italic text-slate-800 text-lg py-2 bg-slate-50">
                "Este é o meu compromisso aqui: destravar a sua liderança."
              </blockquote>

              <div className="pt-4">
                <p className="font-bold text-slate-900 mb-2">Vamos juntas?</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Assinatura" className="h-12 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contato" className="py-24 bg-slate-900 text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-slate-800 to-slate-900">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Pronta para ocupar seu lugar no topo?
              </h2>
              <p className="text-slate-300 text-lg">
                Agende uma sessão de diagnóstico ou inscreva-se na lista de espera para a próxima mentoria.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-amber-400">
                  <CheckCircle size={20} />
                  <span className="text-slate-200">Mentoria Individual</span>
                </li>
                <li className="flex items-center gap-3 text-amber-400">
                  <CheckCircle size={20} />
                  <span className="text-slate-200">Consultoria Corporativa</span>
                </li>
                <li className="flex items-center gap-3 text-amber-400">
                  <CheckCircle size={20} />
                  <span className="text-slate-200">Palestras e Workshops</span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 bg-white p-10 md:p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Momento Atual</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded text-slate-900 focus:outline-none focus:border-amber-500 transition-colors">
                    <option>Busco promoção para liderança</option>
                    <option>Já sou líder, mas sinto insegurança</option>
                    <option>Quero melhorar minha imagem executiva</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded transition-all transform hover:-translate-y-1 shadow-lg">
                  Solicitar Contato
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-serif text-xl font-bold text-white">MARTA JESAN<span className="text-amber-600">.</span></span>
              <p className="text-sm mt-2">Liderança & Posicionamento Estratégico.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          <div className="mt-12 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Marta Jesan. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
