import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Inicio",
    "projects": "Proyectos",
    "about": "Sobre mí",
    "invites": "Referidos"
  },
  "language": "Idioma",
  "home": {
    "greeting": "Hola, soy Rei.",
    "intro": "Hago pequeñas herramientas para mí: extensiones de navegador, apps de escritorio y sitios sencillos en Cloudflare. Tus datos deberían quedarse en tus manos.",
    "seeProjects": "Ver mis proyectos",
    "aboutMe": "Más sobre mí"
  },
  "projects": {
    "title": "Proyectos",
    "lead": "Cosas que estoy creando y que uso a diario.",
    "site": "Sitio web",
    "source": "Código",
    "names": {
      "ydiyr": "Tus datos, tu responsabilidad"
    },
    "summaries": {
      "navill": "Una extensión de navegador que importa tus marcadores una vez y los convierte en una nueva pestaña con espacios de trabajo y cajones. Se sincroniza con tu propio Google Drive.",
      "mimatory": "Un gestor de contraseñas cifrado para Mac que rellena contraseñas en el navegador y, si quieres, sincroniza con tu propio Google Drive o WebDAV.",
      "reicky": "Notas adhesivas de escritorio multiplataforma, tan ligeras como Stickies de macOS. Las notas se archivan, nunca se borran.",
      "ydiyr": "Un manifiesto de una página sobre por qué los datos deben quedarse con sus dueños, y las apps hechas así."
    }
  },
  "about": {
    "title": "Sobre mí",
    "paragraphs": [
      "Soy Rei. Trabajo con datos genómicos y normativa médica, y en mi tiempo libre hago pequeñas herramientas para mí.",
      "Hago extensiones de navegador, apps de escritorio y sitios pequeños en Cloudflare. Me importan dos cosas: que las herramientas sean cómodas de usar y que los datos se queden con sus dueños.",
      "Mis apps no tienen cuentas ni recogen datos de uso. Si quieres sincronizar, va por tu propio Google Drive o WebDAV."
    ],
    "rolesTitle": "Tengo varios sombreros:",
    "roles": [
      {
        "name": "Traductor de normativas",
        "desc": "Convierto la normativa de dispositivos médicos en palabras que entiende un ingeniero y acompaño a los productos paso a paso hasta su registro."
      },
      {
        "name": "Obsesivo de la calidad",
        "desc": "Escribo SOP, preparo listas de verificación y hago seguimiento de las correcciones. Cuando llega la auditoría, ya estamos listos."
      },
      {
        "name": "Pastor de proyectos",
        "desc": "Desgloso requisitos y planifico plazos para que I+D, clínica y bioinformática avancen en la misma dirección."
      },
      {
        "name": "Producto que dibuja primero",
        "desc": "Pienso bien el prototipo y la base de datos antes de escribir código."
      },
      {
        "name": "Todoterreno full-stack",
        "desc": "C#, Python, Docker, bases de datos. Lo que le falte al proyecto, lo pongo yo."
      },
      {
        "name": "Detective de datos de secuenciación",
        "desc": "Encuentro mutaciones en datos de DNA-seq y, de paso, hago que los flujos de análisis vayan más rápido."
      }
    ],
    "github": "Encuéntrame en GitHub"
  },
  "invites": {
    "title": "Referidos",
    "lead": "Servicios que uso y me gustan. Si te registras con estos enlaces, normalmente los dos recibimos una pequeña recompensa.",
    "empty": "Todavía no hay enlaces de referido.",
    "clicks": "{n} clics",
    "add": "Añadir",
    "edit": "Editar",
    "delete": "Eliminar",
    "confirmDelete": "¿Eliminar este referido?",
    "save": "Guardar",
    "cancel": "Cancelar",
    "fieldTitle": "Nombre",
    "fieldUrl": "Enlace de referido",
    "fieldIntro": "Descripción (opcional)",
    "login": "Acceso de administrador",
    "logout": "Cerrar sesión",
    "signedIn": "Sesión iniciada: {email}",
    "loginFailed": "No se pudo iniciar sesión. Inténtalo de nuevo.",
    "loginForbidden": "Esta cuenta de Google no tiene permisos de administrador.",
    "loginUnconfigured": "El inicio de sesión aún no está configurado.",
    "loadFailed": "No se pudo cargar. Actualiza e inténtalo de nuevo.",
    "saveFailed": "No se pudo guardar: "
  },
  "footer": {
    "license": "Código abierto bajo licencia MIT"
  },
  "notFound": {
    "title": "Página no encontrada",
    "back": "Volver al inicio"
  }
};

export default messages;
