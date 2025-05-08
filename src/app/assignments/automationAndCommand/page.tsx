"use client";

import CTA from "@/app/components/CTA";
import {
  ConclusionTitle,
  ContactTitle,
  ElectricalServices,
  ServiceBlock,
  ServiceItem,
  ServiceList,
  ServicesSection,
  ServiceTitle,
  Title,
} from "../AssignmentsStyled";

//app/assignments/Task.jsx
export default function AutomationAndCommand() {
  return (
    <ServicesSection>
      <ElectricalServices>
        <Title>
          ⚡ Automação e Comando: A Excelência que Transforma Instalações
          Elétricas em Sistemas Inteligentes
        </Title>

        <p>
          Como profissional especializado em automação e comando, meu trabalho
          vai além da simples instalação elétrica. Projeto e implemento sistemas
          inteligentes que unem eficiência energética, conforto e produtividade,
          adaptados às necessidades de cada cliente – desde residências até
          grandes indústrias.
        </p>

        <ServiceBlock>
          <ServiceTitle>Por Que Investir em Automação e Comando?</ServiceTitle>
          <ServiceList>
          <ConclusionTitle>Controle Inteligente = Economia + Praticidade</ConclusionTitle>
            <ServiceItem>
                <h2>Residencial:</h2>
              ✔ Evitar curtos-circuitos, incêndios e falhas perigosas.
            </ServiceItem>
            <ServiceItem>
              ✔ Garantir máxima eficiência energética, reduzindo sua conta de
              luz.
            </ServiceItem>
            <ServiceItem>
              ✔ Seguir à risca a NBR 5410 e normas técnicas, porque sua
              segurança não é negociável.
            </ServiceItem>
          </ServiceList>
        </ServiceBlock>

        <ServiceBlock>
          <ServiceTitle>Soluções que Duram – Zero Gambiarras!</ServiceTitle>
          <p>Tenho orgulho do meu trabalho e só entrego o melhor:</p>
          <ServiceList>
            <ServiceItem>
              ✅ Materiais de alta qualidade – nada de componentes duvidosos.
            </ServiceItem>
            <ServiceItem>
              ✅ Quadros organizados e circuitos padronizados – facilidade na
              manutenção futura.
            </ServiceItem>
            <ServiceItem>
              ✅ Sem retrabalho – faço certo desde o primeiro dia, economizando
              seu tempo e dinheiro.
            </ServiceItem>
          </ServiceList>
        </ServiceBlock>

        <ServiceBlock>
          <ServiceTitle>Tecnologia a Seu Favor</ServiceTitle>
          <p>Não fico no básico. Trago inovação para seus projetos:</p>
          <ServiceList>
            <ServiceItem>
              🏠 Automação Residencial – Controle de iluminação, sensores e
              integração com IoT.
            </ServiceItem>
            <ServiceItem>
              💡 Eficiência Energética – Painéis solares, correção de fator de
              potência e no-breaks.
            </ServiceItem>
            <ServiceItem>
              🏭 Soluções Industriais – Gestão de demanda para evitar multas e
              otimizar consumo.
            </ServiceItem>
          </ServiceList>
        </ServiceBlock>

        <ServiceBlock>
          <ServiceTitle>Profissionalismo que Gera Confiança</ServiceTitle>
          <p>Meu compromisso é com a qualidade e transparência:</p>
          <ServiceList>
            <ServiceItem>
              📋 Projetos documentados – diagramas claros, memoriais descritivos
              e laudos técnicos.
            </ServiceItem>
            <ServiceItem>
              📚 Atualização constante – invisto em cursos e certificações
              (NR-10, SPDA, fotovoltaico).
            </ServiceItem>
            <ServiceItem>
              💬 Comunicação direta – explico tudo de forma simples, para você
              entender cada etapa.
            </ServiceItem>
          </ServiceList>
        </ServiceBlock>

        <ServiceBlock>
          <ServiceTitle>Conclusão: Seu Projeto em Boas Mãos</ServiceTitle>
          <p>
            Não sou apenas "mais um eletricista" – sou o profissional que
            garante segurança, economia e durabilidade para sua instalação.
            Aqui, não há espaço para improvisos, apenas soluções inteligentes e
            bem executadas.
          </p>

          <p className="Cta">
            💬 Quer um orçamento ou tirar dúvidas? Chama no WhatsApp [Seu
            Número] ou me liga [Seu Telefone]. Vamos conversar sobre como posso
            te ajudar!
          </p>

          <p className="Tagline">
            ⚡ Energia bem instalada é tranquilidade garantida!
          </p>
        </ServiceBlock>

        <ServiceBlock>
          <ServiceTitle>📲 Fale comigo agora mesmo!</ServiceTitle>
          <p>Ednilson Fragoso</p>
          <p>
            {" "}
            <CTA />{" "}
          </p>{" "}
          <p>ednilson.fragoso@hotmail.com | facebook | instagram</p>
        </ServiceBlock>
      </ElectricalServices>
    </ServicesSection>
  );
}
