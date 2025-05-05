import Section from "@/components/section"

export default function OptionalServices() {
  return (
    <Section id="additional-services" title="Propuesta de Medición para Legálitas: Enfoque en Conversión y Experiencia del Usuario">
      <h3 className="text-xl font-semibold mb-4">Conversión y Adquisición de Clientes</h3>
      <p className="mb-4 text-xl">
      Para la conversión y adquisición, mediría la tasa de conversión por cada plan (Contigo, Contigo Plus y Premium), clics en CTAs específicos de cada servicio legal (consultas, reclamaciones, juicios) y el ratio de contactos iniciados por canal (teléfono vs. WhatsApp). Estos datos permitirán optimizar la oferta según la demanda real.
      </p>
      
      <h4 className="text-xl font-semibold mt-6 mb-2">
      Comportamiento del Usuario
      </h4>
      <p className="mb-4 text-xl">
      En comportamiento del usuario, analizaría mapas de calor sobre la sección de planes, tiempo de permanencia en páginas de servicios específicos y tasa de interacción con testimonios de Trustpilot. Esto ayudará a entender qué elementos generan confianza en un servicio legal.
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2">Embudo de Conversión</h4>
      <p className="mb-4 text-xl">
      Para el embudo de conversión, seguiría la ruta completa desde la página inicial hasta el contacto final, midiendo abandonos en cada fase y segmentando los datos por tipo de necesidad legal. Esto revelará posibles fricciones en el proceso de contratación según la urgencia o complejidad del caso legal específico..
      </p>
     
    </Section>
  )
}
