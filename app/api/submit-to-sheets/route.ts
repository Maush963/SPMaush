import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 API iniciando...");

    // ✅ VERIFICAR VARIABLES DE ENTORNO
    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

    console.log("🔍 DEBUGGING VARIABLES DE ENTORNO:");
    console.log("- GOOGLE_APPS_SCRIPT_URL existe:", !!APPS_SCRIPT_URL);
    console.log(
      "- GOOGLE_APPS_SCRIPT_URL longitud:",
      APPS_SCRIPT_URL?.length || 0
    );
    console.log(
      "- GOOGLE_APPS_SCRIPT_URL primeros 50 chars:",
      APPS_SCRIPT_URL?.substring(0, 50) || "NO ENCONTRADA"
    );

    // Mostrar TODAS las variables de entorno (solo las que empiecen con GOOGLE_)
    console.log("🔍 Variables que empiezan con GOOGLE_:");
    Object.keys(process.env)
      .filter((key) => key.startsWith("GOOGLE_"))
      .forEach((key) => {
        console.log(`- ${key}: ${process.env[key]?.substring(0, 30)}...`);
      });

    const body = await request.json();
    console.log("📥 Datos recibidos:", body);

    if (!APPS_SCRIPT_URL) {
      console.error("❌ GOOGLE_APPS_SCRIPT_URL NO ESTÁ CONFIGURADA");

      // Devolver información de debugging
      return NextResponse.json(
        {
          success: false,
          error: "Variable de entorno no configurada",
          debug: {
            hasVariable: false,
            allEnvKeys: Object.keys(process.env).filter((k) =>
              k.includes("GOOGLE")
            ),
            environment: process.env.NODE_ENV,
          },
        },
        { status: 500 }
      );
    }

    console.log("✅ Variable encontrada, enviando a Apps Script...");

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("📡 Respuesta Apps Script:", response.status);

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${responseText}`);
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error("Apps Script no devolvió JSON válido");
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
        debug: {
          hasGoogleAppsScriptUrl: !!process.env.GOOGLE_APPS_SCRIPT_URL,
          environment: process.env.NODE_ENV,
        },
      },
      { status: 500 }
    );
  }
}
