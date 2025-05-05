import Section from "@/components/section"

export default function ProjectBenefits() {
  return (
    <Section id="crolegalitas" title="Propuestas de mejora para la optimización de la tasa de conversión de Legalitas">
      <ol className="list-decimal pl-6 mb-4 space-y-6 text-xl">
        <li>
          <h3 className="font-semibold mt-6 mb-4">Simplificar el proceso de elección de planes</h3>
          <p className="mt-2 text-xl  ">
            Por qué: La comparativa actual de planes (Contigo, Contigo Plus, Premium) no destaca claramente las diferencias de valor. Debemos poder simplificar esta elección y resaltar los beneficios específicos de cada plan, esto reduciría la indecisión del usuario.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Implementar un CTA principal más destacado</h3>
          <p className="mt-2">
            Por qué: Los botones actuales ("Me interesa", "Descubre") no generan suficiente urgencia. Un CTA más enfocado en la acción como "Comienza tu protección legal ahora" y con mayor presencia visual aumentaría los clics.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Crear un funnel guiado con menos pasos</h3>
          <p className="mt-2">
            Por qué: Actualmente se pide al usuario elegir entre varias categorías sin claridad sobre el proceso. Un embudo con indicadores de progreso y menos decisiones iniciales reduciría el abandono.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Incorporar un chatbot de diagnóstico inicial</h3>
          <p className="mt-2">
            Por qué: Muchos usuarios no saben exactamente qué servicio necesitan. Podemos añadir un asistente que ayude a diagnosticar su situación legal y realizar sugerencias que simplificarían la entrada y personalizaría mas la oferta.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Ofrecer prueba gratuita o consulta inicial sin compromiso</h3>
          <p className="mt-2">
            Por qué: Los servicios legales generan incertidumbre. Reducir la barrera de entrada con una primera experiencia gratuita aumentaría la confianza y conversión posterior.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Rediseñar el comparador de planes con enfoque en beneficios</h3>
          <p className="mt-2">
            Por qué: Actualmente los planes se centran en características. Sería ideal hacer un rediseño enfocado en los resultados y beneficios para el usuario, esto en un principio debería generar mayor valor percibido.
          </p>
        </li>

        <li>
          <h3 className="font-semibold mt-6 mb-4">Incorporar social proof dinámico</h3>
          <p className="mt-2">
            Por qué: Aunque hay reseñas de Trustpilot, Podemos jugar con el sesgo de la urgencia y darles a las comunicaciones una pizca de sensación de gravedad, por lo general las personas que contratan un servicio legal se encuentran en una situación complicada y mostrar notificaciones en tiempo real puede incrementar a que el usuario se interese de forma mas inmediata en la contratación del servicio.
          </p>
        </li>
      </ol>

    </Section>
  )
}
