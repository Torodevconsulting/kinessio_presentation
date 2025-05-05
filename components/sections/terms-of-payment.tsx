import Section from "@/components/section"
import Image from "next/image"

export default function TermsOfPayment() {
  return (
    <Section id="payment-terms" title="Captura de variables mediante Event Listeners en Google Tag Manager">
      <p className="mb-4 text-xl">Cuando necesitamos capturar variables que no están disponibles en el dataLayer para la implementación de píxeles en GTM, los event listeners por lo general son una solución eficaz. Este método nos permite "escuchar" eventos específicos en la página web y capturar datos en tiempo real cuando estos eventos ocurren.</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-xl">
        <li>Creamos un tag de HTML personalizado</li>
        <li>Implementamos el código del event listener</li>
        <div className="my-4">
          <Image
            src="/eventlistener.png"
            alt="Event Listener Implementation"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <li>Creamos una variable en GTM para acceder al valor</li>
        <li>Configuramos un trigger para el evento personalizado</li>
        <li>Usamos la variable en nuestro píxel</li>
      </ol>
    </Section>
  )
}
