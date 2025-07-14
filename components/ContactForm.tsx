"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaDollarSign,
  FaBullhorn,
  FaExclamationCircle,
  FaPaperPlane,
} from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import CalendlyWidget from "./CalendlyWidget";

interface FormData {
  nombre: string;
  correo: string;
  negocio: string;
  inversionMarketing: string;
  comoSePromueve: string;
  mayorReto: string;
  presupuesto: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    negocio: "",
    inversionMarketing: "",
    comoSePromueve: "",
    mayorReto: "",
    presupuesto: "",
  });

  const [showCalendly, setShowCalendly] = useState(false);
  const [isEventScheduled, setIsEventScheduled] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleEventScheduled = () => {
    setIsEventScheduled(true);
  };

  // Validación en tiempo real
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "nombre":
        if (!value.trim()) return "El nombre es obligatorio";
        if (value.trim().length < 2)
          return "El nombre debe tener al menos 2 caracteres";
        if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(value))
          return "El nombre solo puede contener letras";
        return "";

      case "correo":
        if (!value.trim()) return "El correo es obligatorio";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Por favor ingresa un correo válido";
        return "";

      case "negocio":
        if (!value.trim()) return "Esta información es obligatoria";
        if (value.trim().length < 10)
          return "Por favor proporciona más detalles (mínimo 10 caracteres)";
        return "";

      case "inversionMarketing":
        if (!value) return "Selecciona una opción";
        return "";

      case "comoSePromueve":
        if (!value.trim()) return "Esta información es obligatoria";
        if (value.trim().length < 5)
          return "Por favor proporciona más detalles";
        return "";

      case "mayorReto":
        if (!value.trim()) return "Esta información es obligatoria";
        if (value.trim().length < 10)
          return "Por favor describe tu reto con más detalle";
        return "";

      case "presupuesto":
        if (!value) return "Selecciona una opción";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validar en tiempo real
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/submit-to-sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Mostrar Calendly después de 2 segundos
        setTimeout(() => {
          setShowCalendly(true);
        }, 1000);

        // NO limpiar el formulario - mantener datos para Calendly
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si se agendó la cita, mostrar agradecimiento
  if (isEventScheduled) {
    return (
      <div className="w-full min-h-screen bg-black-100 py-8 px-4 sm:px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center bg-black-100 rounded-2xl p-8 border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
          <div className="mb-6">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ¡Excelente, <span className="text-purple">{formData.nombre}</span>
              !
            </h2>
            <p className="text-white-200 text-lg mb-6">
              Tu sesión de diagnóstico ha sido agendada correctamente.
            </p>
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
              <p className="text-green-400 font-semibold mb-2">
                ✅ Recibirás un email de confirmación en: {formData.correo}
              </p>
              <p className="text-white-200 text-sm">
                Revisa tu bandeja de entrada y asegúrate de agregar la cita a tu
                calendario.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              ¿Qué sigue ahora?
            </h3>
            <div className="text-left space-y-3 text-white-200">
              <div className="flex items-start space-x-3">
                <span className="text-purple font-bold">1.</span>
                <span>Prepara información sobre tu negocio y objetivos</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple font-bold">2.</span>
                <span>Ten a la mano ejemplos de tu trabajo actual</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple font-bold">3.</span>
                <span>Prepara tus preguntas específicas sobre marketing</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full sm:w-auto px-8 py-3 bg-purple hover:bg-purple/80 text-white font-semibold rounded-lg transition-colors"
            >
              Ir a página principal
            </button>

            <div className="text-center">
              <button
                onClick={() => {
                  setIsEventScheduled(false);
                  setShowCalendly(false);
                  setSubmitStatus("idle");
                  setFormData({
                    nombre: "",
                    correo: "",
                    negocio: "",
                    inversionMarketing: "",
                    comoSePromueve: "",
                    mayorReto: "",
                    presupuesto: "",
                  });
                }}
                className="text-purple hover:text-white transition-colors text-sm underline"
              >
                Llenar otro formulario
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si debe mostrar Calendly, renderizar solo eso
  if (showCalendly) {
    return (
      <div className="w-full min-h-screen bg-black-100 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¡Perfecto! Ahora agenda tu{" "}
              <span className="text-purple">sesión gratuita</span>
            </h2>
            <p className="text-white-200 mb-4 text-sm sm:text-base">
              Hola{" "}
              <span className="text-purple font-semibold">
                {formData.nombre}
              </span>
              , tus datos han sido prellenados. Solo elige la fecha y hora que
              mejor te convenga.
            </p>
            <button
              onClick={() => setShowCalendly(false)}
              className="text-purple hover:text-white transition-colors text-sm underline mb-6"
            >
              ← Volver al formulario
            </button>
          </div>

          {/* Widget centrado y responsivo */}
          <div className="bg-black-100 rounded-2xl p-2 sm:p-4 border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)] mx-auto">
            <CalendlyWidget nombre={formData.nombre} correo={formData.correo} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-black-100 rounded-2xl border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
      {/* Estilos CSS para los dropdowns */}
      <style jsx>{`
        select option {
          background-color: #161a31 !important;
          color: white !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
        }

        select {
          color-scheme: dark;
        }
      `}</style>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Filtro <span className="text-purple">Sorelli</span>
        </h2>
        <p className="text-white-200 mb-2">
          Con este formulario se espera aumentar la probabilidad de que sean
          prospectos reales.
        </p>
        <p className="text-white-200">
          Solo son{" "}
          <span className="text-purple font-semibold">7 preguntas</span>. Los
          campos marcados con <span className="text-red-400">*</span> son
          obligatorios.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block text-white font-medium mb-2">
            Nombre <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white-200" />
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className={`w-full pl-12 pr-4 py-4 bg-black-200 border rounded-lg text-white placeholder-white-200 focus:outline-none transition-colors ${
                errors.nombre
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/[0.1] focus:border-purple"
              }`}
            />
          </div>
          {errors.nombre && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.nombre}
            </div>
          )}
        </div>

        {/* Correo */}
        <div>
          <label className="block text-white font-medium mb-2">
            Correo <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white-200" />
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tu@correo.com"
              className={`w-full pl-12 pr-4 py-4 bg-black-200 border rounded-lg text-white placeholder-white-200 focus:outline-none transition-colors ${
                errors.correo
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/[0.1] focus:border-purple"
              }`}
            />
          </div>
          {errors.correo && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.correo}
            </div>
          )}
        </div>

        {/* Háblame de tu negocio */}
        <div>
          <label className="block text-white font-medium mb-2">
            Háblame un poco de tu negocio{" "}
            <span className="text-red-400">*</span>
          </label>
          <textarea
            name="negocio"
            value={formData.negocio}
            onChange={handleChange}
            placeholder="¿A qué te dedicas y cuál es tu modelo de ingresos?"
            rows={4}
            className={`w-full p-4 bg-black-200 border rounded-lg text-white placeholder-white-200 focus:outline-none transition-colors resize-none ${
              errors.negocio
                ? "border-red-400 focus:border-red-400"
                : "border-white/[0.1] focus:border-purple"
            }`}
          />
          {errors.negocio && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.negocio}
            </div>
          )}
        </div>

        {/* Inversión en marketing */}
        <div>
          <label className="block text-white font-medium mb-2">
            ¿Cuánto inviertes actualmente en marketing o ventas cada mes?{" "}
            <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white-200 z-10" />
            <select
              name="inversionMarketing"
              value={formData.inversionMarketing}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-4 bg-black-200 border rounded-xl text-white focus:outline-none transition-colors appearance-none cursor-pointer ${
                errors.inversionMarketing
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/[0.1] focus:border-purple"
              } ${
                !formData.inversionMarketing ? "text-white-200" : "text-white"
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled hidden>
                Selecciona tu rango de inversión mensual
              </option>
              <option value="menos-2000">Menos de $2,000 MXN</option>
              <option value="2000-5000">Entre $2,000 y $5,000 MXN</option>
              <option value="5000-10000">Entre $5,000 y $10,000 MXN</option>
              <option value="mas-10000">Más de $10,000 MXN</option>
              <option value="no-invierto">No invierto actualmente</option>
            </select>
          </div>
          {errors.inversionMarketing && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.inversionMarketing}
            </div>
          )}
        </div>

        {/* Cómo se promueve */}
        <div>
          <label className="block text-white font-medium mb-2">
            ¿Cómo estás dando a conocer tu negocio actualmente?{" "}
            <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaBullhorn className="absolute left-4 top-4 text-white-200" />
            <textarea
              name="comoSePromueve"
              value={formData.comoSePromueve}
              onChange={handleChange}
              placeholder="Ej: Instagram, Facebook, referidos, Google Ads, colaboraciones con influencers, networking, etc."
              rows={3}
              className={`w-full pl-12 pr-4 py-4 bg-black-200 border rounded-lg text-white placeholder-white-200 focus:outline-none transition-colors resize-none ${
                errors.comoSePromueve
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/[0.1] focus:border-purple"
              }`}
            />
          </div>
          {errors.comoSePromueve && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.comoSePromueve}
            </div>
          )}
        </div>

        {/* Mayor reto */}
        <div>
          <label className="block text-white font-medium mb-2">
            ¿Cuál es tu mayor reto en marketing, ventas o posicionamiento y cómo
            crees que podríamos ayudarte?{" "}
            <span className="text-red-400">*</span>
          </label>
          <textarea
            name="mayorReto"
            value={formData.mayorReto}
            onChange={handleChange}
            placeholder="Ej: Genero pocos leads, mi contenido tiene poco alcance, tengo baja conversión en ventas, no sé cómo diferenciarse de la competencia..."
            rows={4}
            className={`w-full p-4 bg-black-200 border rounded-lg text-white placeholder-white-200 focus:outline-none transition-colors resize-none ${
              errors.mayorReto
                ? "border-red-400 focus:border-red-400"
                : "border-white/[0.1] focus:border-purple"
            }`}
          />
          {errors.mayorReto && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.mayorReto}
            </div>
          )}
        </div>

        {/* Presupuesto */}
        <div>
          <label className="block text-white font-medium mb-2">
            ¿Cuál es tu presupuesto aproximado para una página de ventas?{" "}
            <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white-200 z-10" />
            <select
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-4 bg-black-200 border rounded-xl text-white focus:outline-none transition-colors appearance-none cursor-pointer ${
                errors.presupuesto
                  ? "border-red-400 focus:border-red-400"
                  : "border-white/[0.1] focus:border-purple"
              } ${!formData.presupuesto ? "text-white-200" : "text-white"}`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled hidden>
                Selecciona tu rango de presupuesto
              </option>
              <option value="menos-3500">Menos de $3,500 MXN</option>
              <option value="3500-7500">Entre $3,500 y $7,500 MXN</option>
              <option value="7500-13000">Entre $7,500 y $13,000 MXN</option>
              <option value="mas-13000">Más de $13,000 MXN</option>
              <option value="no-seguro">No estoy seguro aún</option>
            </select>
          </div>
          {errors.presupuesto && (
            <div className="flex items-center mt-2 text-red-400 text-sm">
              <FaExclamationCircle className="mr-2" />
              {errors.presupuesto}
            </div>
          )}
        </div>

        {/* Botón de envío - CENTRADO ARREGLADO */}
        <div className="flex justify-center pt-2 w-full">
          <div className="w-full max-w-[500px] min-w-[280px] mx-auto flex justify-center">
            <div
              onClick={!isSubmitting ? handleSubmit : undefined}
              className={`cursor-pointer ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <MagicButton
                title={
                  isSubmitting
                    ? "Enviando..."
                    : "Enviar formulario y agendar sesión"
                }
                icon={
                  isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <FaPaperPlane />
                  )
                }
                position="right"
                otherClasses="w-full px-4 sm:px-10 py-3 sm:py-4 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Mensajes de estado */}
        <div className="mt-4 min-h-[60px] flex items-center justify-center">
          {submitStatus === "success" && !showCalendly && (
            <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg w-full">
              <p className="text-green-400 mb-2">
                ✅ ¡Perfecto! Tu información ha sido enviada correctamente.
              </p>
              <p className="text-white-200 text-sm">
                Preparando tu calendario personalizado...
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg w-full">
              <p className="text-red-400">
                ❌ Error al enviar el formulario. Por favor intenta nuevamente.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
