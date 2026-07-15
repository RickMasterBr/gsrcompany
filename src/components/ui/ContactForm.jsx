"use client";

import React, { useState } from "react";
import { Mail, ShieldCheck, User, FileText, CheckCircle2 } from "lucide-react";
import { TextField, TextArea, Switch } from "./Input";
import { Button } from "./Button";
import { Heading, Body } from "./Typography";

/**
 * Secure contact form component with LGPD toggle and validation feedback.
 */
export function ContactForm({
  title,
  description,
  buttonLabel = "Enviar Mensagem",
  lgpdLabel = "Consentimento LGPD",
  lgpdDescription = "Declaro ciente de que as informações serão tratadas sob estrito sigilo corporativo.",
  className = "",
  defaultService = "",
  ...props
}) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: defaultService || "",
    mensagem: "",
    lgpd: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!formData.servico) newErrors.servico = "Por favor, selecione uma área de interesse.";
    if (!formData.mensagem.trim()) newErrors.mensagem = "Por favor, detalhe sua necessidade.";
    if (!formData.lgpd) newErrors.lgpd = "É necessário aceitar os termos de privacidade.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Erro desconhecido");
      }

      setSuccess(true);
      setFormData({ nome: "", email: "", telefone: "", servico: "", mensagem: "", lgpd: false });
    } catch {
      setSubmitError("Não foi possível enviar sua mensagem. Tente novamente ou use o WhatsApp/e-mail do rodapé.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={`bg-white border border-gsr-border rounded-card p-8 md:p-12 text-center flex flex-col items-center justify-center gap-4 shadow-gsr-sm animate-fade-up-blur ${className}`}
      >
        <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <Heading level={3}>Solicitação Recebida</Heading>
        <Body variant="secondary" className="max-w-md">
          Sua mensagem foi criptografada e enviada com sucesso ao nosso comitê de compliance. Um consultor entrará em contato por canal seguro em até 24 horas úteis.
        </Body>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setSuccess(false)}
        >
          Enviar Nova Mensagem
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`bg-white border border-gsr-border rounded-card p-8 md:p-12 shadow-gsr-md ${className}`}
      {...props}
    >
      <div className="mb-8">
        <div className="flex items-center gap-2 text-gsr-gold mb-2">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Canal Seguro</span>
        </div>
        {title && <Heading level={3} className="mb-2">{title}</Heading>}
        {description && <Body variant="secondary">{description}</Body>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nome */}
          <TextField
            label="Nome Completo"
            placeholder="Ex: Dr. Richard Strougo"
            value={formData.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            error={errors.nome}
            disabled={loading}
          />

          {/* Email */}
          <TextField
            label="E-mail de Contato"
            placeholder="exemplo@empresa.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
            disabled={loading}
          />

          {/* Telefone */}
          <TextField
            label="Telefone de Contato"
            placeholder="(11) 99999-9999"
            value={formData.telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Serviço / Área de Interesse */}
        <div className="flex flex-col gap-1.5 w-full font-sans">
          <label className="text-xs font-semibold uppercase tracking-wider text-gsr-text-primary select-none">
            Área de Interesse
          </label>
          <select
            value={formData.servico}
            onChange={(e) => handleChange("servico", e.target.value)}
            disabled={loading}
            className={`w-full bg-gsr-surface border ${
              errors.servico ? "border-rose-500" : "border-gsr-border focus:border-gsr-gold"
            } outline-none transition-all duration-300 rounded-gsr px-4 h-12 text-sm text-gsr-text-primary placeholder:text-gsr-text-secondary/60 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <option value="">Selecione uma área de atuação...</option>
            <option value="seguranca-empresarial">Segurança Patrimonial e Empresarial</option>
            <option value="compliance-regulatorio">Compliance Regulatório</option>
            <option value="governanca-corporativa">Controladoria e Governança</option>
            <option value="gestao-riscos">Auditorias Financeiras</option>
            <option value="inteligencia-corporativa">Investigações de Riscos e Fraudes</option>
            <option value="outsource-management">Serviços Jurídicos Notariais e Cartoriais</option>
          </select>
          {errors.servico && (
            <p className="text-xs font-medium text-rose-500 mt-0.5">{errors.servico}</p>
          )}
        </div>

        {/* Mensagem */}
        <TextArea
          label="Detalhe sua Dúvida"
          placeholder="Descreva sua dúvida ou necessidade relacionada a auditoria, compliance ou segurança empresarial..."
          value={formData.mensagem}
          onChange={(e) => handleChange("mensagem", e.target.value)}
          error={errors.mensagem}
          disabled={loading}
          rows={4}
        />

        {/* LGPD Switch */}
        <div className="border border-gsr-border/60 bg-gsr-surface/30 rounded-gsr p-4">
          <Switch
            label={lgpdLabel}
            description={lgpdDescription}
            checked={formData.lgpd}
            onChange={(val) => handleChange("lgpd", val)}
            disabled={loading}
          />
          {errors.lgpd && (
            <p className="text-xs font-medium text-rose-500 mt-2">{errors.lgpd}</p>
          )}
        </div>

        {/* Submit error */}
        {submitError && (
          <p className="text-sm font-medium text-rose-500 text-center">{submitError}</p>
        )}

        {/* Submit */}
        <Button
          variant="filled"
          type="submit"
          loading={loading}
          className="w-full justify-center"
        >
          {buttonLabel}
        </Button>
      </form>
    </div>
  );
}
