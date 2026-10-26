import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Accueil",
    "projects": "Projets",
    "about": "À propos",
    "invites": "Parrainages"
  },
  "language": "Langue",
  "home": {
    "greeting": "Bonjour, je suis Rei.",
    "intro": "Je fabrique de petits outils pour moi : extensions de navigateur, applications de bureau et petits sites sur Cloudflare. Vos données devraient rester entre vos mains.",
    "seeProjects": "Voir mes projets",
    "aboutMe": "En savoir plus"
  },
  "projects": {
    "title": "Projets",
    "lead": "Ce que je construis et que j'utilise tous les jours.",
    "site": "Site",
    "source": "Code source",
    "names": {
      "ydiyr": "Vos données, votre responsabilité"
    },
    "summaries": {
      "navill": "Une extension de navigateur qui importe vos favoris une fois et en fait un nouvel onglet organisé en espaces de travail et en tiroirs. Synchronisation via votre propre Google Drive.",
      "mimatory": "Un gestionnaire de mots de passe chiffré pour Mac, qui remplit vos mots de passe dans le navigateur et se synchronise, si vous le souhaitez, via votre propre Google Drive ou WebDAV.",
      "reicky": "Des notes adhésives de bureau multiplateformes, aussi légères que Stickies sur macOS. Les notes sont archivées, jamais supprimées.",
      "ydiyr": "Un manifeste d'une page sur pourquoi les données doivent rester à leurs propriétaires, avec les applications conçues ainsi."
    }
  },
  "about": {
    "title": "À propos",
    "paragraphs": [
      "Je suis Rei. Je travaille avec des données génomiques et la réglementation médicale, et sur mon temps libre je fabrique de petits outils pour moi.",
      "Je fais des extensions de navigateur, des applications de bureau et de petits sites sur Cloudflare. Deux choses comptent le plus pour moi : des outils agréables à utiliser et des données qui restent à leurs propriétaires.",
      "Mes applications n'ont pas de compte et ne collectent aucune donnée d'usage. Pour synchroniser, c'est votre propre Google Drive ou WebDAV."
    ],
    "hats": "Je porte plusieurs casquettes. En [[Traducteur de réglementation]], je rends la réglementation des dispositifs médicaux compréhensible pour les ingénieurs et j'accompagne les produits pas à pas jusqu'à l'enregistrement. En [[Pointilleux de la qualité]], j'écris des SOP, je prépare des listes de contrôle et je suis chaque correction : quand l'audit arrive, nous sommes déjà prêts. En [[Berger de projets]], je découpe les besoins et je planifie, pour que R&D, clinique et bio-informatique avancent dans la même direction. Je suis aussi un [[Produit qui dessine d'abord]] : pas de code tant que le prototype et la base de données ne sont pas réfléchis. Au moment de construire, je deviens [[Touche-à-tout full-stack]] avec `C#`, `Python`, `Docker` et des bases de données, et je comble ce qui manque au projet. Et face à des données de séquençage, je me fais [[Détective des données de séquençage]] : je trouve des mutations dans les données DNA-seq et, au passage, j'accélère les pipelines d'analyse.",
    "roles": [
      {
        "name": "Traducteur de réglementation"
      },
      {
        "name": "Pointilleux de la qualité"
      },
      {
        "name": "Berger de projets"
      },
      {
        "name": "Produit qui dessine d'abord"
      },
      {
        "name": "Touche-à-tout full-stack"
      },
      {
        "name": "Détective des données de séquençage"
      }
    ],
    "github": "Me retrouver sur GitHub"
  },
  "invites": {
    "title": "Parrainages",
    "lead": "Des services que j'utilise et que j'aime. Si vous vous inscrivez via ces liens, nous recevons en général tous les deux une petite récompense.",
    "empty": "Aucun lien de parrainage pour l'instant.",
    "clicks": "{n} clics",
    "add": "Ajouter",
    "edit": "Modifier",
    "delete": "Supprimer",
    "confirmDelete": "Supprimer ce parrainage ?",
    "save": "Enregistrer",
    "cancel": "Annuler",
    "fieldTitle": "Nom",
    "fieldUrl": "Lien de parrainage",
    "fieldIntro": "Description (facultatif)",
    "login": "Connexion administrateur",
    "logout": "Se déconnecter",
    "signedIn": "Connecté en tant que {email}",
    "loginFailed": "La connexion a échoué. Veuillez réessayer.",
    "loginForbidden": "Ce compte Google n'a pas les droits d'administration.",
    "loginUnconfigured": "La connexion n'est pas encore configurée.",
    "loadFailed": "Chargement impossible. Actualisez la page.",
    "saveFailed": "Enregistrement impossible : "
  },
  "footer": {
    "license": "Code source sous licence MIT"
  },
  "notFound": {
    "title": "Page introuvable",
    "back": "Retour à l'accueil"
  }
};

export default messages;
