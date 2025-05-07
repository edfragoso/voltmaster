// app/contact/page.tsx
"use client";
import { useState } from "react";
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
  LoadingSpinner,
  AlertMessage,
} from "./ContactForm.styles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    // Validação básica de campos obrigatórios
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Por favor, preencha todos os campos obrigatórios.",
      });
      return false;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Por favor, insira um endereço de e-mail válido.",
      });
      return false;
    }

    // Validação de telefone (opcional, mas recomendado)
    if (formData.phone) {
      const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
      if (!phoneRegex.test(formData.phone)) {
        setStatus({
          type: "error",
          message: "Por favor, insira um número de telefone válido.",
        });
        return false;
      }
    }

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || data.error || "Falha no envio da mensagem");
      }

      setStatus({
        type: "success",
        message: data.message || "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      });
      
      // Reset form only on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
    } catch (error: any) {
      console.error("Erro no envio:", error);
      setStatus({
        type: "error",
        message: error.message || "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ContactContainer>
        <ContactTitle>Entre em Contato</ContactTitle>
        <ContactIntro>
          Preencha o formulário abaixo ou utilize um dos nossos canais diretos
          para solicitar um orçamento ou tirar dúvidas.
        </ContactIntro>

        {status.type && (
          <AlertMessage type={status.type}>{status.message}</AlertMessage>
        )}

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
                <p>ednilson.fragoso@hotmail.com.br</p>
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">E-mail</label>
                <FormControl
                  type="email"
                  id="email"
                  required
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Telefone</label>
                <FormControl
                  type="tel"
                  id="phone"
                  required
                  placeholder="(51) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="service">Serviço de Interesse</label>
                <FormControl
                  as="select"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
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
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <LoadingSpinner /> ENVIANDO...
                  </>
                ) : (
                  "ENVIAR MENSAGEM"
                )}
              </SubmitButton>
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
