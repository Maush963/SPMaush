"use client";
import { useEffect } from "react";

interface CalendlyWidgetProps {
  nombre?: string;
  correo?: string;
  onEventScheduled?: () => void;
}

const CalendlyWidget = ({
  nombre,
  correo,
  onEventScheduled,
}: CalendlyWidgetProps) => {
  useEffect(() => {
    // Limpiar scripts existentes
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Cargar el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // ✅ MEJORAR: Listener para eventos de Calendly
    const handleCalendlyEvent = (e: MessageEvent) => {
      console.log("📅 Evento de Calendly recibido:", e.data);

      // Verificar diferentes tipos de eventos de Calendly
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        console.log("✅ Evento de Calendly válido:", e.data.event);

        // Detectar cuando se agenda una cita
        if (
          e.data.event === "calendly.event_scheduled" ||
          e.data.event === "calendly.date_and_time_selected" ||
          e.data.event.includes("scheduled")
        ) {
          console.log("🎉 ¡Cita agendada detectada!");
          onEventScheduled?.();
        }
      }
    };

    // Agregar listener
    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      // Limpiar cuando se desmonte
      const scriptToRemove = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [onEventScheduled]);

  // Construir URL con parámetros
  const buildCalendlyUrl = () => {
    let url = "https://calendly.com/maush-solutions/30m-sesion-diagnostico";

    if (nombre || correo) {
      const params = new URLSearchParams();
      if (nombre) params.append("name", nombre);
      if (correo) params.append("email", correo);
      url += `?${params.toString()}`;
    }

    return url;
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="calendly-inline-widget w-full max-w-full"
        data-url={buildCalendlyUrl()}
        style={{
          minWidth: "280px",
          height: "600px",
          width: "100%",
        }}
      />

      {/* Estilos responsivos */}
      <style jsx>{`
        @media (min-width: 640px) {
          .calendly-inline-widget {
            height: 700px !important;
            min-width: 320px !important;
          }
        }

        @media (max-width: 639px) {
          .calendly-inline-widget {
            height: 600px !important;
            min-width: 280px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CalendlyWidget;
