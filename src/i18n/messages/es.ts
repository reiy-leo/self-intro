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
    "intro": "De día doy vueltas entre dispositivos médicos y secuenciación genética: saco registros adelante, vigilo la calidad, empujo proyectos, escribo código y cazo mutaciones en datos de secuenciación. Al terminar, me armo pequeñas herramientas a mi medida."
  },
  "projects": {
    "title": "Proyectos",
    "lead": "Cosas que estoy creando y que uso a diario.",
    "site": "Sitio web",
    "source": "Código",
    "names": {
      "ydiyr": "Tus datos, tu responsabilidad",
      "mimatory": "Mimatory",
      "reicky": "reicky",
      "mindough": "Mindough",
      "sideDock": "Side Dock",
      "melodyKeeeys": "Melody Keeeys"
    },
    "summaries": {
      "navill": "Una extensión de navegador que importa tus marcadores una vez y los convierte en una nueva pestaña con espacios de trabajo y cajones. Se sincroniza con tu propio Google Drive.",
      "mimatory": "Un gestor de contraseñas cifrado para Mac que rellena contraseñas en el navegador y, si quieres, sincroniza con tu propio Google Drive o WebDAV.",
      "reicky": "Notas adhesivas de escritorio multiplataforma, tan ligeras como Stickies de macOS. Las notas se archivan, nunca se borran.",
      "ydiyr": "Un manifiesto de una página sobre por qué los datos deben quedarse con sus dueños, y las apps hechas así.",
      "mindough": "Un gestor de tareas multiplataforma en desarrollo: encadena tareas para que la siguiente aparezca solo al terminar la anterior, con mapas de hábitos, diario y bibliotecas.",
      "sideDock": "Una herramienta de la barra de menús del Mac que da a cada escritorio su propia barra de Dock, sin tocar el Dock del sistema. No pide permisos y no deja rastro al salir.",
      "melodyKeeeys": "Sonidos de teclado desde la barra de menús: clics reales grabados mientras escribes, 22 paquetes de sonido, en macOS, Windows y Linux."
    }
  },
  "about": {
    "title": "Sobre mí",
    "paragraphs": [
      "Soy Rei. Trabajo con datos genómicos y normativa médica, y en mi tiempo libre hago pequeñas herramientas para mí."
    ],
    "hats": "Llevo varios sombreros. Como [[Traductor de normativas]], convierto la normativa de dispositivos médicos en palabras que entiende un ingeniero y acompaño a los productos paso a paso hasta su registro. Como [[Obsesivo de la calidad]], escribo SOP, preparo listas de verificación y sigo cada corrección, así que cuando llega la auditoría ya estamos listos. Como [[Pastor de proyectos]], desgloso requisitos y planifico plazos para que I+D, clínica y bioinformática avancen en la misma dirección. También soy un [[Producto que dibuja primero]]: nada de código hasta tener claros el prototipo y la base de datos. A la hora de construir, soy un [[Todoterreno full-stack]] que escribe `C#`, `Python`, `Docker` y bases de datos, y cubre lo que le falte al proyecto. Y frente a datos de secuenciación, me convierto en [[Detective de datos de secuenciación]]: encuentro mutaciones en datos de DNA-seq y, de paso, hago más rápidos los flujos de análisis. Fuera del trabajo, soy un [[Artesano de herramientas]]: hago extensiones de navegador y apps de escritorio, y monto pequeños sitios en `Cloudflare`. Me importan dos cosas: que las herramientas sean cómodas de usar y que los datos se queden con sus dueños. Por eso mis apps no tienen cuentas ni recogen datos de uso; si quieres sincronizar, va por tu propio Google Drive o WebDAV.",
    "roles": [
      {
        "name": "Traductor de normativas"
      },
      {
        "name": "Obsesivo de la calidad"
      },
      {
        "name": "Pastor de proyectos"
      },
      {
        "name": "Producto que dibuja primero"
      },
      {
        "name": "Todoterreno full-stack"
      },
      {
        "name": "Detective de datos de secuenciación"
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
