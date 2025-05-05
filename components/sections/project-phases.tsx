import Section from "@/components/section"

export default function ProjectPhases() {
  return (
    <Section id="croLegalitas" title="Análisis de discrepancia entre Campaign Manager y GA4">
      <p className="mb-4 text-xl">
        Hemos identificado una discrepancia crítica: Campaign Manager reporta un 90% más de clics en creatividades que los aterrizajes registrados por GA4 en las landing pages. Esta diferencia significativa requiere un análisis exhaustivo para garantizar la precisión en la medición de resultados de campaña.
      </p>

      <h3 className="text-xl font-semibold mb-2">Posibles causas:</h3>
      <ul className="list-disc list-inside space-y-2 mb-6 text-xl">
        <li><span className="font-medium">Problemas técnicos:</span> Implementación incorrecta del código GA4, configuración errónea de etiquetas en CM, o pérdida de parámetros UTM durante redirecciones</li>
        <li><span className="font-medium">Tráfico de baja calidad:</span> Bots, clics fraudulentos o accidentales que CM contabiliza pero no llegan a cargar la página en GA4</li>
        <li><span className="font-medium">Diferencias metodológicas:</span> CM registra clics instantáneamente mientras GA4 requiere carga completa de la página</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Plan de investigación:</h3>
      
      <h4 className="text-xl font-medium mt-4 mb-2">1. Verificación técnica:</h4>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-xl">
        <li>Revisar implementación de GA4 en todas las landing pages</li>
        <li>Comprobar integridad de parámetros UTM en redirecciones</li>
        <li>Verificar sincronización entre plataformas</li>
      </ul>

      <h4 className="text-xl font-medium mt-4 mb-2">2. Análisis segmentado:</h4>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-xl">
        <li>Examinar datos por dispositivo, navegador y sistema operativo</li>
        <li>Identificar patrones geográficos o temporales sospechosos</li>
      </ul>

      <h4 className="text-xl font-medium mt-4 mb-2">3. Evaluación de calidad del tráfico:</h4>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-xl">
        <li>Implementar filtros anti-bot (Doubleverify, reCAPTCHA)</li>
        <li>Analizar comportamiento post-clic (tiempo en página, rebote)</li>
        <li>Identificar fuentes con mayor discrepancia</li>
      </ul>

      <h4 className="text-xl font-medium mt-4 mb-2">4. Revisión de Campaign Manager:</h4>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-xl">
        <li>Verificar configuraciones que puedan generar conteos duplicados</li>
        <li>Examinar informes de verificación de visibilidad</li>
        <li>Comparar con otras campañas para determinar si es un problema aislado</li>
      </ul>
    </Section>
  )
}
