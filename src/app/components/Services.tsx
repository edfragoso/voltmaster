'use client';
import { ServicesContainer, ServiceCard } from '../components/Services.style';

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServiceCard>
        <h3>Instalações Elétricas</h3>
        <p>Projetos residenciais, comerciais e industriais feitos com precisão milimétrica. Sem gambiarras, apenas soluções que duram.</p>
      </ServiceCard>
      
      <ServiceCard>
        <h3>Automação e Comando</h3>
        <p>Sistemas inteligentes que economizam energia e aumentam sua produtividade. Do básico ao industrial.</p>
      </ServiceCard>
      
      <ServiceCard>
        <h3>Manutenção Preventiva</h3>
        <p>Não espere queimar equipamentos. Minha experiência previne problemas antes que eles aconteçam.</p>
      </ServiceCard>
    </ServicesContainer>
  );
}