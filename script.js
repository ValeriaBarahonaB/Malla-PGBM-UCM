const estructura = [
  {
    titulo: "Primer año - I semestre",
    cursos: [
      "Construcción del Ser Docente y Rol Pedagógico",
      "Historia de la Educación en Chile y Políticas Públicas",
      "Lenguaje y Comunicación",
      "Números y Operaciones en Primaria",
      "Fundamentos de la Historia Occidental",
      "Taller Pedagógico I"
    ]
  },
  {
    titulo: "Primer año - II semestre",
    cursos: [
      "Diversidad y Convivencia Escolar",
      "Psicología del Desarrollo Humano",
      "Gramática y Ortografía para la Formación Escolar",
      "Elementos de Geometría y Medición",
      "Ciencias de la Vida",
      "Taller Pedagógico II",
      "Inglés I"
    ]
  },
  {
    titulo: "Segundo año - III semestre",
    cursos: [
      "Teoría del Aprendizaje y su Relación con el Desarrollo Humano",
      "Literatura y Teatro para Niños",
      "Álgebra, Patrones y su Didáctica",
      "Historia de América y Chile",
      "Ciencias Físicas y Químicas",
      "Taller Pedagógico III"
    ]
  },
  {
    titulo: "Segundo año - IV semestre",
    cursos: [
      "Orientación Educacional",
      "Lectura y Escritura Inicial",
      "Enseñanza de Elementos de Estadística y Probabilidades",
      "Geografía y Formación Ciudadana",
      "Ciencias de la Tierra y el Universo",
      "Taller Pedagógico IV",
      "Inglés II"
    ]
  },
  {
    titulo: "Tercer año - V semestre",
    cursos: [
      "Diseño y Planificación Curricular para Educación Básica",
      "Gestión Escolar",
      "Didáctica de la Lectura Comprensiva y la Escritura",
      "Didáctica de los Números y la Geometría",
      "Taller Pedagógico V",
      "Introducción a la Fe"
    ]
  },
  {
    titulo: "Tercer año - VI semestre",
    cursos: [
      "Evaluación de los Aprendizajes en Educación Básica",
      "Metodologías de Investigación",
      "Didáctica de la Historia, la Geografía y Ciencias Sociales",
      "Didáctica e Historia de las Ciencias Naturales",
      "Taller Pedagógico VI",
      "Ética Cristiana"
    ]
  },
  {
    titulo: "Cuarto año - VII semestre",
    cursos: [
      "Investigación Acción en la Escuela",
      "Las Funciones en el Álgebra de Primaria",
      "Sistema Numéricos y sus Fundamentos Teóricos",
      "Taller Pedagógico VII",
      "Certificación I"
    ]
  },
  {
    titulo: "Cuarto año - VIII semestre",
    cursos: [
      "Síntesis de Grado en Educación",
      "Profundización en Estadística y Probabilidad en Primaria",
      "Geometría Plana y del Espacio",
      "Taller Pedagógico VIII",
      "Certificación II"
    ]
  },
  {
    titulo: "Quinto año - IX semestre",
    cursos: [
      "Enseñanza del Álgebra y Sistemas Numéricos",
      "Enseñanza de la Geometría",
      "Enseñanza de la Estadística y la Probabilidad",
      "Las Artes como Estrategias Educativas",
      "Taller Pedagógico IX",
      "Certificación III"
    ]
  },
  {
    titulo: "Quinto año - X semestre",
    cursos: [
      "Práctica Profesional"
    ]
  }
];

const dependencias = {
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

function tieneRequisitoBloqueado(curso) {
  return Object.entries(dependencias).some(([requisito, desbloquea]) =>
    desbloquea.includes(curso) && !estadoCursos[requisito]
  );
}

function crearCursoElemento(nombre) {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.innerText = nombre;
  div.dataset.nombre = nombre;

  if (tieneRequisitoBloqueado(nombre)) {
    div.classList.add("bloqueado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    div.classList.toggle("aprobado");
    estadoCursos[nombre] = !estadoCursos[nombre];
    actualizarBloqueos();
  });

  return div;
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

// Crear visualización ordenada
estructura.forEach(bloque => {
  const titulo = document.createElement("h2");
  titulo.textContent = bloque.titulo;
  mallaDiv.appendChild(titulo);

  const contenedor = document.createElement("div");
  contenedor.classList.add("bloque");
  contenedor.style.display = "flex";
  contenedor.style.flexWrap = "wrap";
  contenedor.style.gap = "1rem";
  mallaDiv.appendChild(contenedor);

  bloque.cursos.forEach(nombre => {
    estadoCursos[nombre] = false;
    const elemento = crearCursoElemento(nombre);
    contenedor.appendChild(elemento);
  });
});

actualizarBloqueos();

