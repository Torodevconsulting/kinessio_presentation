import Section from "@/components/section"

export default function AboutBuiltt() {
  return (
    <Section id="about-builtt" title="Anomalía GA4: Usuarios > Pageviews">
      <p className="mb-4 text-xl">
        En este escenario estamos ante una clara anomalía analítica: GA4 registra más usuarios que pageviews, lo cual es contraintuitivo ya que normalmente un usuario genera múltiples pageviews.
      </p>
      <p className="mb-4 text-xl font-bold">
        Posibles causas:
      </p>
      <ul className="mb-4 text-xl list-disc pl-8">
        <li>Implementación incorrecta del código de seguimiento que no dispara eventos page_view</li>
        <li>Problemas con integraciones de Firebase o apps móviles que registran usuarios sin pageviews</li>
        <li>Configuración errónea del User-ID que infla artificialmente el conteo de usuarios</li>
      </ul>
      <p className="mb-4 text-xl font-bold">
        Proceso de investigación:
      </p>
      <ol className="mb-4 text-xl list-decimal pl-8">
        <li>Verificar la implementación del código de GA4 en todas las páginas usando Google Tag Assistant</li>
        <li>Analizar datos por segmentos (dispositivos, plataformas) para localizar el origen del problema</li>
        <li>Revisar la configuración del User-ID</li>
        <li>Examinar si existen usuarios que generan otros eventos pero no pageviews</li>
        <li>Verificar configuraciones de Firebase u otras integraciones</li>
        <li>Contrastar con datos de otras herramientas analíticas para confirmar la discrepancia</li>
      </ol>
    </Section>
  )
}
