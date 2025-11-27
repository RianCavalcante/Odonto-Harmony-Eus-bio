import { ContactInfo, NavLink, Service, Testimonial } from './types';
import React from 'react';

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  address: "Office e Medical Center Eusébio, 4808 - Sala 505, Eusébio, Ceará, Brazil",
  whatsapp: "5585998143253",
  whatsappDisplay: "(85) 99814-3253",
  instagram: "@odontoharmony.eusebio",
  // Using a query for the specific building in Eusébio
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.123456789!2d-38.456789!3d-3.890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75b8e9b0b0b0b%3A0x0!2sOffice%20e%20Medical%20Center%20Eus%C3%A9bio!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
};

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: 'trat-canal',
    title: 'Tratamento de Canal',
    shortDescription: 'Procedimentos endodônticos avançados para salvar seu dente.',
    fullDescription: 'A endodontia (canal) é o tratamento da polpa dentária. Utilizamos microscopia e tecnologias rotatórias para garantir um tratamento rápido, seguro e indolor, preservando a estrutura natural do seu dente.',
    iconName: 'tooth-crack'
  },
  {
    id: 'implante',
    title: 'Implantes Dentários',
    shortDescription: 'Reabilitação oral completa com materiais de alta qualidade.',
    fullDescription: 'Recupere sua autoestima e função mastigatória. Nossos especialistas em implantodontia utilizam as melhores marcas de implantes do mercado, oferecendo soluções duradouras e esteticamente perfeitas.',
    iconName: 'implant'
  },
  {
    id: 'harm-facial',
    title: 'Harmonização Facial',
    shortDescription: 'Estética avançada para realçar sua beleza natural.',
    fullDescription: 'Procedimentos como preenchimento, toxina botulínica e bioestimuladores de colágeno. Nossa abordagem visa o equilíbrio e a naturalidade, realçando os traços do seu rosto com segurança.',
    iconName: 'face-sparkles'
  },
  {
    id: 'aparelho',
    title: 'Aparelho Dental',
    shortDescription: 'Ortodontia moderna para alinhar seu sorriso.',
    fullDescription: 'Trabalhamos com alinhadores invisíveis, aparelhos de safira e autoligados. A correção do posicionamento dentário melhora não apenas a estética, mas também a respiração e a fala.',
    iconName: 'braces'
  },
  {
    id: 'coroa',
    title: 'Coroa de Porcelana',
    shortDescription: 'Próteses fixas estéticas e resistentes.',
    fullDescription: 'As coroas em porcelana pura ou zircônia oferecem resistência e uma aparência idêntica ao dente natural. Ideais para reconstrução de dentes danificados ou sobre implantes.',
    iconName: 'crown'
  },
  {
    id: 'estetica',
    title: 'Estética Odontológica',
    shortDescription: 'Lentes de contato e clareamento dental.',
    fullDescription: 'Transforme seu sorriso com lentes de contato dental e clareamento a laser. Planejamento digital do sorriso para resultados previsíveis e surpreendentes.',
    iconName: 'sparkles'
  }
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    role: 'Paciente',
    content: 'O atendimento na Odonto Harmony é impecável. Fiz minha harmonização facial e o resultado ficou super natural!',
    avatarUrl: 'https://picsum.photos/id/64/150/150'
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'Paciente de Implante',
    content: 'Equipe extremamente qualificada. Me senti seguro do início ao fim do meu tratamento de implante.',
    avatarUrl: 'https://picsum.photos/id/91/150/150'
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Paciente de Ortodontia',
    content: 'Ambiente acolhedor e tecnologia de ponta. Meu tratamento ortodôntico foi muito mais rápido do que imaginei.',
    avatarUrl: 'https://picsum.photos/id/129/150/150'
  }
];

// SVG Icons as React Components for cleaner usage
export const ICONS: Record<string, React.FC<{ className?: string }>> = {
  'tooth-crack': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  ),
  'implant': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h1.5m-1.5 3.75h1.5m-1.5 3.75h1.5m11.25-7.5h1.5m-1.5 3.75h1.5m-1.5 3.75h1.5m-9-1.5h6m-6-3.75h6m-6-3.75h6M9.75 9.75v-3.75h4.5v3.75" />
    </svg>
  ),
  'face-sparkles': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  'braces': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.247-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.077.898-.513.898h-2.65c-.52 0-1.012-.228-1.348-.624a11.954 11.954 0 01-1.65-8.995c.197-.4.61-.513 1.05-.513h2.802c.51 0 .963.296 1.183.745l.1.212c.905 1.9 2.117 3.608 3.565 5.048" />
    </svg>
  ),
  'crown': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3-3m0 0l3 3m-3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'sparkles': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  'menu': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  'close': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  'location': ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};