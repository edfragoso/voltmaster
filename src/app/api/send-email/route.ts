import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, service, message } = await request.json();
  
  // Validação dos dados recebidos
  if (!email || !name || !message) {
    return NextResponse.json(
      { error: "Campos obrigatórios faltando" },
      { status: 400 }
    );
  }

  // Configurações do e-mail
  const ownerEmail = process.env.EMAIL_TO || "ednilson.fragoso@hotmail.com.br"; // Fallback
  const subject = "Novo contato via site ✔";
  const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || 'Não informado'}\nServiço: ${service || 'Não especificado'}\nMensagem: ${message}`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verifica se o transporter foi criado corretamente
    await transporter.verify();

    // Envia e-mail para o dono do site
    await transporter.sendMail({
      from: `"Contato via Site" <${process.env.EMAIL_FROM}>`,
      to: ownerEmail, // Usando o fallback se necessário
      subject,
      text,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Serviço de interesse:</strong> ${service || 'Não especificado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Envia e-mail de confirmação para o cliente
    await transporter.sendMail({
      from: `"VOLTMASTER - Confirmação de Recebimento" <${process.env.EMAIL_FROM}>`,
      to: email, // E-mail do cliente que preencheu o formulário
      subject: "Recebemos sua mensagem!",
      html: `
        <p>Olá, <strong>${name}</strong>, tudo bem?</p>
        <p>Espero realmente que sim.</p>
        <p>Passando pra avisar que recebi sua mensagem sobre <strong>${service || 'seu interesse em nossos serviços'}</strong>, fico feliz por contato.</p>
        <p>Prometo responder o mais breve possível.</p>
        <br>
        <p>Atenciosamente,</p>
        <p><strong>Equipe VoltMaster</strong></p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Erro completo:", error);
    let errorMessage = "Erro interno ao enviar e-mail";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}