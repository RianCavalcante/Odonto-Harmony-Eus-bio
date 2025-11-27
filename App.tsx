import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, NAV_LINKS, SERVICES, TESTIMONIALS, ICONS } from './constants';
import { Service } from './types';
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; 
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const getWhatsAppLink = (text?: string) => {
    const msg = text ? `&text=${encodeURIComponent(text)}` : '';
    return `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}${msg}`;
  };

  return (
    <div className="font-sans text-gray-800 bg-brand-light selection:bg-brand-gold selection:text-white">
      
      {/* --- HEADER --- */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3 border-gray-100' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-2xl transition-all duration-300 relative overflow-hidden ${
              scrolled ? 'border-brand-blue text-brand-blue' : 'border-white text-white'
            }`}>
              <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="group-hover:scale-110 transition-transform duration-300 relative z-10">OH</span>
            </div>
            <div className={`leading-tight font-bold transition-colors duration-300 ${
              scrolled ? 'text-brand-blue' : 'text-white'
            }`}>
              <h1 className="text-lg uppercase tracking-wide font-extrabold">Odonto Harmony</h1>
              <span className={`text-[10px] font-bold block uppercase tracking-[0.2em] ${
                scrolled ? 'text-brand-gold' : 'text-gray-200'
              }`}>Eusébio</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-sm font-semibold uppercase tracking-wider relative group py-2 ${
                  scrolled ? 'text-brand-blue' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-brand-blue' : 'bg-brand-gold'
                }`}></span>
              </a>
            ))}
            <a 
              href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:scale-105 hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-brand-green text-white hover:bg-green-600 hover:shadow-green-500/30' 
                  : 'bg-white text-brand-blue hover:bg-gray-100'
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className={`lg:hidden transition-colors ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
            <div className="w-8 h-8 flex items-center justify-center">
              {React.createElement(ICONS['menu'], { className: "w-8 h-8" })}
            </div>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-blue/95 backdrop-blur-xl border-t border-white/10 shadow-xl flex flex-col p-6 gap-4 lg:hidden animate-fade-in-up h-screen">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl font-medium border-b border-white/10 pb-4 hover:text-brand-gold transition px-2"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={getWhatsAppLink()}
              className="bg-brand-green text-white py-4 rounded-xl font-bold text-center flex justify-center items-center gap-2 mt-4 shadow-lg active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Agendar Agora
            </a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        {/* Background with Parallax Feel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
            alt="Consultório Odontológico Premium" 
            className="w-full h-full object-cover animate-pan-slow scale-105"
          />
          {/* Enhanced Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16 mt-10">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8 hover:bg-white/20 transition-colors cursor-default">
              <span className="text-brand-gold text-lg">★★★★★</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-100">Referência em Eusébio</span>
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-xl">
              Sorria com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-300 relative inline-block">
                Exclusividade
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 9.36199 55.9159 0.644558 56.6693 2.60463C44.337 7.03612 116.18 5.48517 197.999 2.00001" stroke="currentColor" strokeWidth="3"/></svg>
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-md">
              A união perfeita entre ciência e arte. Clínica liderada por <span className="font-semibold text-white">PhDs</span> com tecnologia de ponta para o seu conforto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <a 
                href={getWhatsAppLink("Quero agendar uma consulta inicial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-green text-white h-14 rounded-xl font-bold text-base hover:bg-green-600 transition-all shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-[260px]"
              >
                <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                Agendar Consulta
              </a>
              <a 
                href="#servicos" 
                className="h-14 rounded-xl font-bold text-base border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-[260px]"
              >
                Nossos Tratamentos
              </a>
            </div>
          </div>
          
          {/* Hero Image Composition */}
          <div className="hidden lg:block flex-1 relative animate-float">
             <div className="relative z-10 mx-auto max-w-lg">
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-brand-blue/60 to-brand-green/30 rounded-full blur-[90px]"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sorriso radiante" 
                  className="relative rounded-[2.5rem] shadow-2xl border-[6px] border-white/10 mask-image-gradient object-cover h-[500px] w-full" 
                />
                
                {/* Floating Badge Premium */}
                <div className="absolute -bottom-8 -left-8 glass-dark p-6 rounded-2xl shadow-2xl border border-white/10 animate-fade-in-up backdrop-blur-xl" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        5.0
                      </div>
                      <div className="absolute -top-1 -right-1 bg-brand-gold w-4 h-4 rounded-full border-2 border-brand-blue"></div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Excelência</p>
                      <p className="text-xs text-blue-200 uppercase tracking-wider">Google Reviews</p>
                    </div>
                  </div>
                </div>

                 {/* Floating Badge 2 */}
                <div className="absolute top-10 -right-10 glass-dark p-4 rounded-xl shadow-xl border border-white/10 animate-fade-in-up flex gap-3 items-center backdrop-blur-xl" style={{animationDelay: '0.6s'}}>
                    <div className="bg-white/10 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="text-white">
                        <p className="font-bold text-sm">Tecnologia 3D</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-[calc(100%+1.3px)] h-[100px] text-brand-light" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="servicos" className="py-24 bg-brand-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] mb-3 text-xs">Nossas Especialidades</h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">Tratamentos de Alto Padrão</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-brand-blue rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg font-light">
              Protocolos exclusivos e personalizados para transformar a sua saúde bucal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                onClick={() => openServiceModal(service)}
                className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Premium Hover Effect Borders */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/20 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

                {/* Decorative gradient blob on hover */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>

                <div className="w-18 h-18 bg-brand-light rounded-2xl flex items-center justify-center mb-8 w-fit p-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-brand-blue/30">
                  {React.createElement(ICONS[service.iconName], { className: "w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" })}
                </div>
                
                <h4 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-green transition-colors">{service.title}</h4>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">{service.shortDescription}</p>
                
                <div className="flex items-center text-brand-gold font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Detalhes do Protocolo 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STORIES/TESTIMONIALS --- */}
      <section id="depoimentos" className="py-24 bg-brand-blue relative overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
            <div>
              <h3 className="text-brand-green font-bold uppercase tracking-widest mb-3 text-sm">Experiência do Paciente</h3>
              <h2 className="text-4xl font-bold text-white">Histórias Reais</h2>
            </div>
            <a 
               href={CONTACT_INFO.instagram}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-white/90 hover:text-white transition group bg-white/5 border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 hover:border-brand-gold/50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Seguir no Instagram
            </a>
          </div>

          {/* Stories Scroll Container */}
          <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory px-4 -mx-4">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[350px] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-[2rem] p-8 snap-center border border-white/10 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="mb-8 relative">
                   {/* Quote Icon Background */}
                   <div className="absolute -top-4 -left-2 text-white/5 text-6xl font-serif">"</div>
                  <div className="flex items-center gap-1 text-brand-gold mb-4 text-xl">★★★★★</div>
                  <p className="italic text-blue-50 text-lg leading-relaxed relative z-10 font-light">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="relative">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full border-2 border-brand-green object-cover p-0.5 bg-brand-blue"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-brand-green text-white text-[10px] px-1.5 py-0.5 rounded-full border border-brand-blue">
                      Verified
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg group-hover:text-brand-gold transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call to Action Card in Slider */}
             <div className="min-w-[320px] bg-gradient-to-br from-brand-green to-emerald-600 rounded-[2rem] p-8 snap-center flex flex-col justify-center items-center text-center text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Sua história começa aqui</h3>
                <p className="mb-8 opacity-90 font-light">Venha transformar seu sorriso com quem entende do assunto.</p>
                <a 
                  href={getWhatsAppLink()}
                  className="bg-white text-brand-green px-8 py-4 rounded-xl font-bold hover:scale-105 transition shadow-lg w-full"
                >
                  Agendar Agora
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Image Composition */}
            <div className="lg:w-1/2 relative">
               <div className="absolute -left-10 -top-10 w-56 h-56 bg-brand-gold/10 rounded-full blur-3xl"></div>
               <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-brand-blue/5 rounded-full blur-3xl"></div>
               
               <div className="relative group perspective-1000">
                 <img 
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop" 
                    className="rounded-3xl shadow-2xl w-[85%] relative z-10 transition-transform duration-500 group-hover:scale-[1.01]" 
                    alt="Clínica Interna" 
                 />
                 <div className="absolute -bottom-12 -right-4 w-[55%] z-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <div className="p-2 bg-white rounded-[2rem] shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
                            className="rounded-[1.5rem] object-cover h-full w-full" 
                            alt="Equipe" 
                        />
                    </div>
                 </div>
                 
                 {/* Decorative elements */}
                 <div className="absolute -z-10 top-10 -right-10 text-brand-blue/5 animate-spin-slow">
                    <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#dots)" />
                    </svg>
                 </div>
               </div>
            </div>

            <div className="lg:w-1/2 mt-16 lg:mt-0">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-brand-green"></div>
                  <h3 className="text-brand-green font-bold uppercase tracking-widest text-sm">Sobre Nós</h3>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-8 leading-tight">
                Excelência, Ciência e <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">Tecnologia Avançada.</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="leading-relaxed font-light">
                  Localizada no prestigiado <strong>Office e Medical Center Eusébio</strong>, a Odonto Harmony não é apenas uma clínica, é um centro de reabilitação oral avançada.
                </p>
                <p className="leading-relaxed mt-4 font-light">
                  Nossa equipe é liderada por <strong>Doutores e Mestres (PhDs)</strong>, garantindo que você receba um tratamento baseado nas mais recentes evidências científicas, com o toque humano que você merece.
                </p>
              </div>
              
              {/* Premium Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Equipe de PhDs', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
                  { title: 'Scanner Intraoral 3D', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
                  { title: 'Sedação Consciente', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
                  { title: 'Localização Premium', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all cursor-default group">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                    </div>
                    <span className="font-bold text-gray-700 text-sm group-hover:text-brand-blue transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & MAP --- */}
      <section id="contato" className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative group">
            
            <div className="lg:w-1/3 p-12 bg-brand-blue text-white flex flex-col justify-center relative overflow-hidden">
               {/* Decorative Circles */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border-[30px] border-white/5 opacity-50"></div>
               <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 rounded-full bg-brand-green/20 blur-[60px]"></div>

              <h2 className="text-3xl font-bold mb-10 relative z-10 border-l-4 border-brand-green pl-6">Fale Conosco</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-inner">
                    {React.createElement(ICONS['location'], { className: "w-6 h-6 text-brand-gold" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Endereço</h4>
                    <p className="opacity-80 text-sm leading-relaxed font-light">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-inner">
                    <WhatsAppIcon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">WhatsApp</h4>
                    <p className="opacity-70 text-sm mb-1 uppercase tracking-wide text-xs">Agendamentos</p>
                    <a href={getWhatsAppLink()} className="text-2xl font-bold hover:text-brand-green transition tracking-tight">
                      {CONTACT_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-14 relative z-10">
                 <a 
                   href={getWhatsAppLink("Olá, vi o site e quero marcar um horário.")}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full text-center bg-brand-green text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition shadow-lg transform hover:-translate-y-1 hover:shadow-green-500/30"
                 >
                   Iniciar Conversa
                 </a>
              </div>
            </div>

            <div className="lg:w-2/3 min-h-[500px] relative">
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
              <iframe 
                src={CONTACT_INFO.mapEmbedUrl} 
                className="absolute inset-0 w-full h-full z-10 grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-blue text-white pt-24 pb-10 border-t border-blue-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-xl">OH</div>
                <div>
                   <h2 className="text-2xl font-bold uppercase tracking-wider">Odonto Harmony</h2>
                   <p className="text-xs text-brand-gold tracking-[0.3em] uppercase font-bold">Eusébio</p>
                </div>
              </div>
              <p className="text-blue-100/80 max-w-sm leading-relaxed mb-8 font-light">
                Transformando sorrisos e elevando a autoestima com a mais alta tecnologia e qualificação profissional do mercado.
              </p>
              <div className="flex gap-4">
                  <a href={CONTACT_INFO.instagram} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-gold uppercase tracking-wider text-xs">Navegação</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-blue-100 hover:text-white hover:translate-x-1 transition-transform inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-gold uppercase tracking-wider text-xs">Atendimento</h4>
              <ul className="space-y-4 text-blue-100 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Seg - Sex:</span>
                  <span className="font-bold text-white">08h - 18h</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sábado:</span>
                  <span className="font-bold text-white">08h - 12h</span>
                </li>
                <li className="flex justify-between text-blue-300">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
            <div>
              &copy; {new Date().getFullYear()} Odonto Harmony Eusébio. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 font-semibold">
               <a href="#" className="hover:text-white transition">Política de Privacidade</a>
               <a href="#" className="hover:text-white transition">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- SERVICE MODAL --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-blue/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up">
            
            {/* Modal Header Image/Gradient */}
            <div className="h-40 bg-gradient-to-br from-brand-blue to-blue-800 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl"></div>
               <div className="absolute top-10 left-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>
               
               <button 
                onClick={closeServiceModal}
                className="absolute top-6 right-6 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition backdrop-blur-md z-10 border border-white/10"
              >
                {React.createElement(ICONS['close'], { className: "w-6 h-6" })}
              </button>
            </div>

            <div className="px-8 lg:px-12 pb-12 -mt-16 relative">
              <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-8 border-4 border-white text-brand-blue">
                {React.createElement(ICONS[selectedService.iconName], { className: "w-14 h-14" })}
              </div>
              
              <h3 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2">Protocolo Especializado</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">{selectedService.title}</h2>
              
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="text-lg leading-relaxed font-light">{selectedService.fullDescription}</p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-8 flex gap-4 items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm text-xl">💡</div>
                  <div>
                      <h4 className="font-bold text-brand-blue text-sm mb-1 uppercase">Dica do Especialista</h4>
                      <p className="text-sm m-0 text-gray-600">
                        Cada sorriso é único. Agende uma avaliação para receber um plano de tratamento personalizado para você.
                      </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href={getWhatsAppLink(`Tenho interesse no tratamento de ${selectedService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold text-center hover:bg-green-600 transition shadow-lg hover:shadow-green-500/30 flex justify-center items-center gap-3 transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Agendar Avaliação
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-slow border-4 border-white/20 hover:border-white/40 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Agende agora!
        </span>
      </a>

    </div>
  );
}

export default App;