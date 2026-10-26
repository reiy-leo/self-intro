import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Start",
    "projects": "Projekte",
    "about": "Über mich",
    "invites": "Empfehlungen"
  },
  "language": "Sprache",
  "home": {
    "greeting": "Hallo, ich bin Rei.",
    "intro": "Ich baue kleine Werkzeuge für mich selbst: Browser-Erweiterungen, Desktop-Apps und kleine Websites auf Cloudflare. Deine Daten sollten bei dir bleiben.",
    "seeProjects": "Meine Projekte",
    "aboutMe": "Mehr über mich"
  },
  "projects": {
    "title": "Projekte",
    "lead": "Dinge, an denen ich arbeite und die ich jeden Tag nutze.",
    "site": "Website",
    "source": "Quellcode",
    "names": {
      "ydiyr": "Deine Daten, deine Verantwortung"
    },
    "summaries": {
      "navill": "Eine Browser-Erweiterung, die deine Lesezeichen einmal importiert und daraus einen neuen Tab mit Arbeitsbereichen und Schubladen macht. Synchronisiert über dein eigenes Google Drive.",
      "mimatory": "Ein verschlüsselter Passwortmanager für den Mac, der Passwörter im Browser ausfüllt und auf Wunsch über dein eigenes Google Drive oder WebDAV synchronisiert.",
      "reicky": "Plattformübergreifende Haftnotizen für den Desktop, so leicht wie Stickies unter macOS. Notizen werden archiviert, nie gelöscht.",
      "ydiyr": "Ein einseitiges Manifest darüber, warum Daten bei ihren Besitzern bleiben sollten, samt den Apps, die so gebaut sind."
    }
  },
  "about": {
    "title": "Über mich",
    "paragraphs": [
      "Ich bin Rei. Ich arbeite mit Genomdaten und Medizinprodukte-Vorschriften und baue in meiner Freizeit kleine Werkzeuge für mich selbst.",
      "Ich baue Browser-Erweiterungen, Desktop-Apps und kleine Websites auf Cloudflare. Zwei Dinge sind mir am wichtigsten: Werkzeuge, die sich gut anfühlen, und Daten, die bei ihren Besitzern bleiben.",
      "Meine Apps haben keine Konten und sammeln keine Nutzungsdaten. Wer synchronisieren will, nutzt dafür sein eigenes Google Drive oder WebDAV."
    ],
    "rolesTitle": "Ich habe mehrere Rollen:",
    "roles": [
      {
        "name": "Übersetzer für Vorschriften",
        "desc": "Ich mache Medizinprodukte-Vorschriften für Ingenieure verständlich und begleite Produkte Schritt für Schritt bis zur Zulassung."
      },
      {
        "name": "Qualitäts-Pedant",
        "desc": "Ich schreibe SOPs, erstelle Checklisten und verfolge Korrekturen. Wenn das Audit kommt, sind wir längst bereit."
      },
      {
        "name": "Projekt-Hirte",
        "desc": "Ich zerlege Anforderungen und plane Termine, damit Entwicklung, Klinik und Bioinformatik in dieselbe Richtung gehen."
      },
      {
        "name": "Produktmensch, der zuerst zeichnet",
        "desc": "Ich durchdenke Prototyp und Datenbank, bevor ich Code schreibe."
      },
      {
        "name": "Full-Stack-Allrounder",
        "desc": "C#, Python, Docker, Datenbanken. Was dem Projekt fehlt, ergänze ich."
      },
      {
        "name": "Detektiv für Sequenzierdaten",
        "desc": "Ich finde Mutationen in DNA-seq-Daten und mache nebenbei die Analyse-Pipelines schneller."
      }
    ],
    "github": "Mich auf GitHub finden"
  },
  "invites": {
    "title": "Empfehlungen",
    "lead": "Dienste, die ich selbst nutze und mag. Wenn du dich über diese Links anmeldest, bekommen wir meist beide eine kleine Belohnung.",
    "empty": "Noch keine Empfehlungslinks.",
    "clicks": "{n} Klicks",
    "add": "Hinzufügen",
    "edit": "Bearbeiten",
    "delete": "Löschen",
    "confirmDelete": "Diese Empfehlung löschen?",
    "save": "Speichern",
    "cancel": "Abbrechen",
    "fieldTitle": "Name",
    "fieldUrl": "Empfehlungslink",
    "fieldIntro": "Beschreibung (optional)",
    "login": "Admin-Anmeldung",
    "logout": "Abmelden",
    "signedIn": "Angemeldet als {email}",
    "loginFailed": "Anmeldung fehlgeschlagen. Bitte versuche es erneut.",
    "loginForbidden": "Dieses Google-Konto hat keine Admin-Rechte.",
    "loginUnconfigured": "Die Anmeldung ist noch nicht eingerichtet.",
    "loadFailed": "Laden fehlgeschlagen. Bitte neu laden.",
    "saveFailed": "Speichern fehlgeschlagen: "
  },
  "footer": {
    "license": "Quellcode unter MIT-Lizenz"
  },
  "notFound": {
    "title": "Seite nicht gefunden",
    "back": "Zur Startseite"
  }
};

export default messages;
