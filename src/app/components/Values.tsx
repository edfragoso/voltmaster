'use client';
import { ValuesContainer, ValuesGrid, ValueItem } from '../components/Values.style';

export default function Values() {
  return (
    <ValuesContainer>
      <h2>Nossos Valores</h2>
      <p>O que nos mantém conectados:</p>
      
      <ValuesGrid>
        <ValueItem>
          <h3>Segurança</h3>
          <p>Trabalhamos com a precisão de quem sabe que um fio mal conectado pode acender mais do que lâmpadas</p>
        </ValueItem>
        
        <ValueItem>
          <h3>Transparência</h3>
          <p>Orçamentos tão claros quanto um disjuntor novo - sem surpresas desagradáveis</p>
        </ValueItem>
        
        <ValueItem>
          <h3>Inovação</h3>
          <p>Das instalações mais simples à automação de última geração</p>
        </ValueItem>
        
        <ValueItem>
          <h3>Integridade</h3>
          <p>Se não precisa ser trocado, não diremos que precisa (mesmo que dê mais lucro)</p>
        </ValueItem>
      </ValuesGrid>
    </ValuesContainer>
  );
}