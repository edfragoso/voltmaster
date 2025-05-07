'use client';
import { ObjectivesContainer } from '../components/Objectives.style';

export default function Objectives() {
  return (
    <ObjectivesContainer>
      <h2>Nossos Objetivos</h2>
      <ol>
        <li>Reduzir em 30% os acidentes elétricos nas instalações que atendemos até 2030</li>
        <li>Implementar soluções de energia sustentável em 50% dos projetos até 2030</li>
        <li>Treinar 1000 pessoas em noções básicas de segurança elétrica até 2030</li>
        <li>Manter o índice de satisfação do cliente acima de 98%</li>
        <li>Desenvolver um sistema de automação residencial acessível até 2030</li>
      </ol>
    </ObjectivesContainer>
  );
}