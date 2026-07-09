import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS = {
  "seguranca-empresarial": "Segurança Patrimonial e Empresarial",
  "compliance-regulatorio": "Compliance Regulatório",
  "governanca-corporativa": "Governança Corporativa",
  "gestao-riscos": "Gestão de Riscos",
  "inteligencia-corporativa": "Inteligência Corporativa",
  "outsource-management": "Outsource Management",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { nome, email, telefone, servico, mensagem, lgpd } = body;

  // Server-side validation
  if (!nome?.trim() || !email?.trim() || !servico?.trim() || !mensagem?.trim() || lgpd !== true) {
    return Response.json({ success: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return Response.json({ success: false, error: "E-mail inválido." }, { status: 400 });
  }

  const servicoLabel = SERVICE_LABELS[servico] ?? servico;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #15171A;">
      <h2 style="color: #B5945B; margin-bottom: 4px;">Nova Solicitação — GSR Company</h2>
      <p style="color: #5E6166; font-size: 14px; margin-top: 0;">Área: <strong>${servicoLabel}</strong></p>
      <hr style="border: none; border-top: 1px solid #DFDED9; margin: 20px 0;" />
      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #5E6166; width: 140px;">Nome</td><td style="padding: 8px 0;"><strong>${nome}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #5E6166;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B5945B;">${email}</a></td></tr>
        ${telefone ? `<tr><td style="padding: 8px 0; color: #5E6166;">Telefone</td><td style="padding: 8px 0;">${telefone}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #5E6166;">Área</td><td style="padding: 8px 0;">${servicoLabel}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #DFDED9; margin: 20px 0;" />
      <h4 style="margin-bottom: 8px; color: #5E6166; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Mensagem</h4>
      <p style="background: #F1F0EC; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; margin: 0;">${mensagem.replace(/\n/g, "<br>")}</p>
      <p style="margin-top: 24px; font-size: 11px; color: #5E6166;">Enviado via formulário seguro do site gsrnc.com.br</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "GSR Company <gabrielsenra@gsrnc.com.br>",
      to: "gabrielsenra@gsrnc.com.br",
      replyTo: email,
      subject: `Nova Solicitação — ${servicoLabel}`,
      html,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return Response.json({ success: false, error: "Falha ao enviar e-mail." }, { status: 500 });
  }
}
