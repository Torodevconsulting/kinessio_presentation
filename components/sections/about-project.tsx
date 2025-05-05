import Section from "@/components/section"

export default function AboutProject() {
  return (
    <Section id="about-project" title="Unificación de datos de ventas entre canales físicos y digitales">
      <p className="mb-4 text-xl">
        La propuesta para unificar datos de ventas entre canales físicos y digitales se estructura en dos pilares fundamentales que crean una visión 360° del cliente mediante la vinculación de todas las transacciones a perfiles únicos.
      </p>
      <p className="mb-4 text-xl font-semibold mt-6 mb-4">
        Sistema de identificación única:
      </p>
      <ul className="list-disc pl-6 mb-4 text-xl">
        <li>Tarjeta/cuenta de fidelidad omnicanal integrada</li>
        <li>Proceso de registro simplificado con datos consistentes</li>
        <li>Código QR personalizado en app móvil para identificación en tienda</li>
        <li>Opciones de login biométrico para mayor seguridad</li>
        <li>Sistema de incentivos para fomentar la identificación en cada compra</li>
      </ul>
      <p className="mb-4 text-xl font-semibold mt-6 mb-4">
        Caso de éxito: MobileConverters con LoyiCard
      </p>
      <p className="mb-4 text-xl">
        MobileConverters (ecommerce de productos usados con 15 tiendas físicas) resolvió su fragmentación de datos implementando LoyiCard como plataforma de fidelización omnicanal. La solución creó un identificador único accesible mediante:
      </p>
      <ul className="list-disc pl-6 mb-4 text-xl">
        <li>Código QR personal en la app</li>
        <li>Login sincronizado en el e-commerce</li>
        <li>Tarjeta digital en el wallet del smartphone</li>
      </ul>
      <p className="mb-4 text-xl">
        Esta implementación permitió superar los problemas de reconocimiento entre canales, maximizar oportunidades de venta cruzada y simplificar su programa de fidelización.
      </p>
    </Section>
  )
}
