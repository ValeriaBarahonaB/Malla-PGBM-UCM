const cursos = {
  "Construcción del Ser Docente y Rol Pedagógico": ["Psicología del Desarrollo Humano"],
  "Historia de la Educación en Chile y Políticas Públicas": ["Diversidad y Convivencia Escolar"],
  "Lenguaje y Comunicación": ["Gramática y Ortografía para la Formación Escolar"],
  "Números y Operaciones en Primaria": [
    "Elementos de Geometría y Medición",
    "Didáctica de los Números y la Geometría",
    "Sistemas Numéricos y sus Fundamentos Teóricos"
  ],
  "Fundamentos de la Historia Occidental": ["Historia de América y Chile"],
  "Taller Pedagógico I": ["Taller Pedagógico II"],
  "Diversidad y Convivencia Escolar": ["Orientación Educacional"],
  "Psicología del Desarrollo Humano": ["Teoría del Aprendizaje y su Relación con el Desarrollo Humano"],
  "Gramática y Ortografía para la Formación Escolar": ["Literatura y Teatro para Niños"],
  "Elementos de Geometría y Medición": [
    "Álgebra, Patrones y su Didáctica",
    "Geometría Plana y del Espacio"
  ],
  "Ciencias de la Vida": [
    "Ciencias Físicas y Químicas",
    "Didáctica e Historia de las Ciencias Naturales"
  ],
  "Taller Pedagógico II": ["Taller Pedagógico III"],
  "Inglés I": ["Inglés II"],
  "Teoría del Aprendizaje y su Relación con el Desarrollo Humano": ["Metodologías de Investigación"],
  "Literatura y Teatro para Niños": ["Lectura y Escritura Inicial"],
  "Álgebra, Patrones y su Didáctica": [
    "Enseñanza de Elementos de Estadística y Probabilidades",
    "Las Funciones en el Álgebra de Primaria"
  ],
  "Historia de América y Chile": ["Geografía y Formación Ciudadana"],
  "Ciencias Físicas y Químicas": ["Ciencias de la Tierra y el Universo"],
  "Taller Pedagógico III": ["Taller Pedagógico IV"],
  "Orientación Educacional": ["Gestión Escolar"],
  "Lectura y Escritura Inicial": ["Didáctica de la Lectura Comprensiva y la Escritura"],
  "Enseñanza de Elementos de Estadística y Probabilidades": ["Las Funciones en el Álgebra de Primaria"],
  "Geografía y Formación Ciudadana": ["Didáctica de la Historia, la Geografía y Ciencias Sociales"],
  "Ciencias de la Tierra y el Universo": ["Didáctica e Historia de las Ciencias Naturales"],
  "Taller Pedagógico IV": ["Taller Pedagógico V"],
  "Diseño y Planificación Curricular para Educación Básica": ["Evaluación de los Aprendizajes en Educación Básica"],
  "Didáctica de los Números y la Geometría": [
    "Profundización en Estadística y Probabilidad en Primaria",
    "Geometría Plana y del Espacio"
  ],
  "Taller Pedagógico V": ["Taller Pedagógico VI"],
  "Introducción a la Fe": ["Ética Cristiana"],
  "Metodologías de Investigación": ["Investigación Acción en la Escuela"],
  "Didáctica de la Historia, la Geografía y Ciencias Sociales": ["Las Artes como Estrategias Educativas"],
  "Taller Pedagógico VI": ["Taller Pedagógico VII"],
  "Investigación Acción en la Escuela": ["Síntesis de Grado en Educación"],
  "Sistema Numéricos y sus Fundamentos Teóricos": ["Enseñanza del Álgebra y Sistemas Numéricos"],
  "Taller Pedagógico VII": ["Taller Pedagógico VIII"],
  "Certificación I": ["Certificación II"],
  "Profundización en Estadística y Probabilidad en Primaria": ["Enseñanza de la Estadística y la Probabilidad"],
  "Geometría Plana y del Espacio": ["Enseñanza de la Geometría"],
  "Taller Pedagógico VIII": ["Taller Pedagógico IX"],
  "Certificación II": ["Certificación III"],
  "Taller Pedagógico IX": ["Práctica Profesional"]
};

const estadoCursos = {};

const mallaDiv = document.getElementById("malla");

function crearBoton(curso) {
  const btn = document.createElement("div");
  btn.classList.add("curso");
  btn.innerText = curso;
  btn.dataset.nombre = curso;

  if (tieneRequisitoBloqueado(curso)) {
    btn.classList.add("bloqueado");
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("bloqueado")) return;

    btn.classList.toggle("aprobado");
    estadoCursos[curso] = !estadoCursos[curso];

    actualizarBloqueos();
  });

  mallaDiv.appendChild(btn);
}

function tieneRequisitoBloqueado(curso) {
  return Object.entries(cursos).some(([requisito, desbloquea]) =>
    desbloquea.includes(curso) && !estadoCursos[requisito]
  );
}

function actualizarBloqueos() {
  document.querySelectorAll(".curso").forEach(btn => {
    const curso = btn.dataset.nombre;
    if (btn.classList.contains("aprobado")) return;

    if (tieneRequisitoBloqueado(curso)) {
      btn.classList.add("bloqueado");
    } else {
      btn.classList.remove("bloqueado");
    }
  });
}

// Inicializa
const todosLosCursos = new Set([
  ...Object.keys(cursos),
  ...Object.values(cursos).flat()
]);

todosLosCursos.forEach(curso => {
  estadoCursos[curso] = false;
  crearBoton(curso);
});

actualizarBloqueos();
