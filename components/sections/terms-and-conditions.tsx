import Section from "@/components/section"

export default function TermsAndConditions() {
  return (
    <Section id="frictionPoints" title="Puntos de fricción con legalitas y propuestas de cambio. ">
      <ol className="list-decimal pl-6 space-y-2 text-xl">
        <li>
        <h2 className="font-semibold mt-6 mb-4">Multiplicidad de opciones sin jerarquía clara</h2>
        <p>En la sección de planes nos encontramos con tres planes diferentes (Contigo, Contigo Plus y Contigo Premium) sin destacar suficientemente las diferencias clave o el valor específico de cada uno, lo que puede generar indecisión.</p>
        </li>
        <li>
        <h3 className="font-semibold mt-6 mb-4">Ambigüedad en el proceso</h3>
        <p>No se visualiza claramente cuáles son los pasos para contratar ni qué ocurre después de hacer clic en los botones de acción. Sería ideal poder dar al usuario un pequeño resumen a modo de breadcrumb del proceso de contratación.</p>
        </li>
        <li>
        <h4 className="font-semibold mt-6 mb-4">Exceso de opciones de contacto</h4>
        <p>Se ofrecen múltiples canales (teléfono, WhatsApp, formulario web) sin priorizar el canal óptimo para cada tipo de cliente potencial.</p></li>
        <li>
        <h5 className="font-semibold mt-6 mb-4">Casos de éxito sin conexión clara con la acción</h5>
        <p>La sección "Casos reales" muestra testimonios, pero no conecta directamente con cómo contratar el servicio.</p>
        </li>
        <li>
        <h6 className="font-semibold mt-6 mb-4">Barrera de elección inmediata</h6>
        <p>En la sección “Para lo excepcional” se pide al usuario que elija entre tres opciones ("Tengo una duda legal", "Quiero poner una reclamación", "Tengo un juicio próximamente") sin clarificar si esta elección es vinculante o puede cambiar después.</p>
        </li>
        
      </ol>
    </Section>
  )
}
