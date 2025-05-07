'use client';
import { CTAContainer, Button } from '../components/CTA.style';

export default function CTA() {
  return (
    <CTAContainer>
      <a href="https://wa.me/5551994260927" className="btn" target="_blank" rel="noopener noreferrer">
        <Button>CHAMAR NO WHATSAPP</Button>
      </a>
      <p>Resposta em até 1 hora útil | Atendimento 24h para emergências</p>
    </CTAContainer>
  );
}