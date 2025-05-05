import Section from "@/components/section"
import PricingList from "@/components/pricing-list"
import ProjectTimelineTable from "@/components/project-timeline-table"
import Image from "next/image"

export default function PregledProcena() {
  return (
    <Section id="consent-mode" title="Implementación de Consent Mode en GA4 con un CMP sin integración directa">
      <p className="mb-4 text-xl">
        Cuando realizamos una implementación de Google Analytics 4 (GA4) y nuestro cliente trabaja con un Consent Manager Platform (CMP) que no ofrece integración directa con Google Analytics, es necesario que configuremos el Consent Mode de forma personalizada para asegurarnos del cumplimiento de las normativas de privacidad y una correcta recopilación de datos según el consentimiento del usuario.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-4 ">Solución técnica recomendada</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Implementación a través de Google Tag Manager (GTM)</h4>
      <p className="mb-4 text-xl">
        Google Tag Manager proporciona la flexibilidad necesaria para gestionar las configuraciones de consentimiento y cargar tags de GA4 condicionalmente basándose en las elecciones del usuario.
      </p>
      <h4 className="text-xl font-semibold mt-4 mb-2">Configuración inicial de Consent Mode</h4>
      <p className="mb-4 text-xl">
        Antes de cargar cualquier etiqueta de GA4, debemos establecer una configuración predeterminada en la que todos los almacenamientos se consideran "denegados" por defecto:
      </p>
      <div className="my-6 flex justify-center">
        <Image 
          src="/cmd_1.png" 
          alt="Configuración inicial de Consent Mode" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-md"
        />
      </div>
      <h4 className="text-xl font-semibold mt-8 mb-2">Actualización dinámica del estado de consentimiento</h4>
      <p className="mb-4 text-xl">
        Una vez que el usuario proporciona sus preferencias a través del CMP, se actualiza el estado de consentimiento en GA4:
      </p>
      <div className="my-6 flex justify-center">
        <Image 
          src="/cmd_2.png" 
          alt="Actualización dinámica del estado de consentimiento" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-md"
        />
      </div>
      <h4 className="text-xl font-semibold mt-8 mb-2">Configuración de carga condicional</h4>
      <p className="mb-4 text-xl">
        Debemos de configurar los tags de GA4 para que se activen solo cuando se haya establecido el estado de consentimiento adecuado, ya sea mediante:
      </p>
      <ul className="list-disc pl-6 mb-4 text-xl">
        <li>Disparadores condicionales en GTM</li>
        <li>Variables personalizadas que evalúen el estado de consentimiento</li>
      </ul>
      <h4 className="text-xl font-semibold mt-8 mb-2">Ventajas de esta implementación</h4>
      <ul className="list-disc pl-6 mb-4 text-xl">
        <li>Cumplimiento normativo con GDPR, e-Privacy y otras legislaciones de privacidad</li>
        <li>Respeto a las preferencias del usuario</li>
        <li>Flexibilidad para adaptarse a cualquier CMP, independientemente de su falta de integración nativa</li>
      </ul>
    </Section>
  )
}
