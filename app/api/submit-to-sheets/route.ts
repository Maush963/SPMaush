import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 API iniciando...");
    const body = await request.json();
    console.log("📥 Datos recibidos:", body);

    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    console.log(
      "🔗 Apps Script URL:",
      APPS_SCRIPT_URL ? "Configurada" : "❌ NO CONFIGURADA"
    );

    if (!APPS_SCRIPT_URL) {
      throw new Error("Google Apps Script URL no configurada");
    }

    console.log("📤 Enviando a Apps Script...");

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(
      "📡 Respuesta Apps Script:",
      response.status,
      response.statusText
    );

    // ✅ CLAVE: Leer como texto primero para ver qué devuelve
    const responseText = await response.text();
    console.log("📄 Contenido completo devuelto por Apps Script:");
    console.log(responseText.substring(0, 500)); // Primeros 500 caracteres

    // Verificar si es HTML
    if (responseText.includes("<!DOCTYPE") || responseText.includes("<html>")) {
      console.error("❌ Apps Script devolvió HTML en lugar de JSON");
      console.error("🔍 Esto indica un problema de configuración o permisos");
      throw new Error("Apps Script devolvió HTML - verificar configuración");
    }

    // Intentar parsear JSON
    let result;
    try {
      result = JSON.parse(responseText);
      console.log("✅ JSON parseado correctamente:", result);
    } catch (parseError) {
      console.error("❌ Error parseando JSON:", parseError);
      throw new Error("Respuesta no es JSON válido");
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Formulario enviado correctamente",
        data: result,
      });
    } else {
      throw new Error(result.message || "Error en Google Apps Script");
    }
  } catch (error) {
    console.error("💥 ERROR COMPLETO:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Error al procesar el formulario",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
