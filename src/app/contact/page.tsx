// app/contact/page.tsx
"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  ContactContainer,
  ContactTitle,
  ContactIntro,
  ContactGrid,
  ContactInfoCard,
  ContactMethod,
  ContactIcon,
  ContactFormCard,
  FormGroup,
  FormControl,
  SubmitButton,
  MapContainer,
  HighlightSection,
} from "./ContactForm.styles";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação e envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <>
      <ContactContainer>
        <ContactTitle>Entre em Contato</ContactTitle>
        <ContactIntro>
          Preencha o formulário abaixo ou utilize um dos nossos canais diretos
          para solicitar um orçamento ou tirar dúvidas.
        </ContactIntro>

        <ContactGrid>
          <ContactInfoCard>
            <h2>Informações de Contato</h2>

            <ContactMethod>
              <ContactIcon>
                <i className="fas fa-phone-alt"></i>
              </ContactIcon>
              <div>
                <h3>Telefone</h3>
                <p>(51) 99426-0927</p>
                <small>Atendimento 24h para emergências</small>
              </div>
            </ContactMethod>

            <ContactMethod>
              <ContactIcon>
                <i className="fab fa-whatsapp"></i>
              </ContactIcon>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a href="https://wa.me/5551994260927" target="_blank">
                    Clique para conversar
                  </a>
                </p>
                <small>Resposta em até 1 hora útil</small>
              </div>
            </ContactMethod>

            <ContactMethod>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <div>
                <h3>E-mail</h3>
                <p>contato@voltmaster.com.br</p>
                <small>Respondemos em até 24h</small>
              </div>
            </ContactMethod>

            <ContactMethod>
              <ContactIcon>
                <i className="fas fa-map-marker-alt"></i>
              </ContactIcon>
              <div>
                <h3>Área de Atuação</h3>
                <p>Porto Alegre e Região Metropolitana</p>
                <small>Serviços em todo o RS mediante consulta</small>
              </div>
            </ContactMethod>
          </ContactInfoCard>

          <ContactFormCard>
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Nome Completo</label>
                <FormControl
                  type="text"
                  id="name"
                  required
                  placeholder="Seu nome completo"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">E-mail</label>
                <FormControl
                  type="email"
                  id="email"
                  required
                  placeholder="seu@email.com"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Telefone</label>
                <FormControl
                  type="tel"
                  id="phone"
                  required
                  placeholder="(51) 99999-9999"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="service">Serviço de Interesse</label>
                <FormControl as="select" id="service" required>
                  <option value="">Selecione...</option>
                  <option value="instalacao">Instalação Elétrica</option>
                  <option value="manutencao">Manutenção Preventiva</option>
                  <option value="automacao">Automação Residencial</option>
                  <option value="projeto">Projeto Elétrico</option>
                  <option value="outro">Outro Serviço</option>
                </FormControl>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Mensagem</label>
                <FormControl
                  as="textarea"
                  id="message"
                  required
                  rows={5}
                  placeholder="Descreva sua necessidade..."
                />
              </FormGroup>

              <SubmitButton type="submit">ENVIAR MENSAGEM</SubmitButton>
            </form>
          </ContactFormCard>
        </ContactGrid>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.613179221123!2d-51.1462509243776!3d-29.77152248158839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951968a5a379b5a5%3A0x9e9e6a24b1c1f3e5!2sSapucaia%20do%20Sul%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>

        <HighlightSection>
          <h2>Por que escolher o VoltMaster?</h2>
          <p>
            Com 20 anos de experiência no mercado, ofereço soluções elétricas
            personalizadas para cada necessidade. Trabalho com materiais de
            primeira linha e técnicas atualizadas, garantindo segurança e
            eficiência em todos os serviços prestados.
          </p>
        </HighlightSection>
      </ContactContainer>

      
    </>
  );
}
