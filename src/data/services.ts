import type { Service } from './types'

export const services: Service[] = [
  {
    id: '1',
    title: 'Examen Visual Completo',
    description:
      'Evaluación exhaustiva de tu agudeza visual, presión intraocular y salud ocular con equipos automatizados.',
    icon: 'Eye',
    badge: 'Desde $350',
  },
  {
    id: '2',
    title: 'Lentes de Contacto',
    description:
      'Valoración y adaptación de lentes de contacto blandos, rígidos, tóricos y multifocales.',
    icon: 'Contact2',
    badge: 'Desde $500',
  },
  {
    id: '3',
    title: 'Lentes de Sol',
    description:
      'Protección UV400 con filtro polarizado. Marcas como Ray-Ban, Oakley y Arnette.',
    icon: 'Sun',
    badge: 'Desde $1,200',
  },
  {
    id: '4',
    title: 'Adaptación de Lentes',
    description:
      'Ajuste personalizado de armazones y revisión de graduación para garantizar comodidad.',
    icon: 'Wrench',
    badge: 'Gratuito',
  },
  {
    id: '5',
    title: 'Terapia Visual',
    description:
      'Programas personalizados para problemas de enfoque, visión binocular y aprendizaje visual.',
    icon: 'ScanLine',
    badge: 'Consulta',
  },
  {
    id: '6',
    title: 'Lentes Infantiles',
    description:
      'Diseños ergonómicos y seguros para niños. Exámenes de la vista sin estrés.',
    icon: 'Glasses',
    badge: 'Desde $250',
  },
]
