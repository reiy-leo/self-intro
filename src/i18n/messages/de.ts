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
    "intro": "Tagsüber drehe ich mich zwischen Medizinprodukten und Gensequenzierung: Zulassungen anschieben, Qualität im Blick behalten, Projekte treiben, Code schreiben und Mutationen in Sequenzierdaten jagen. Nach Feierabend bastle ich mir kleine, handliche Werkzeuge."
  },
  "projects": {
    "title": "Projekte",
    "lead": "Dinge, an denen ich arbeite und die ich jeden Tag nutze.",
    "site": "Website",
    "source": "Quellcode",
    "names": {
      "ydiyr": "Deine Daten, deine Verantwortung",
      "mimatory": "Mimatory",
      "reicky": "reicky",
      "mindough": "Mindough",
      "sideDock": "Side Dock",
      "melodyKeeeys": "Melody Keeeys"
    },
    "summaries": {
      "navill": "Eine Browser-Erweiterung, die deine Lesezeichen einmal importiert und daraus einen neuen Tab mit Arbeitsbereichen und Schubladen macht. Synchronisiert über dein eigenes Google Drive.",
      "mimatory": "Ein verschlüsselter Passwortmanager für den Mac, der Passwörter im Browser ausfüllt und auf Wunsch über dein eigenes Google Drive oder WebDAV synchronisiert.",
      "reicky": "Plattformübergreifende Haftnotizen für den Desktop, so leicht wie Stickies unter macOS. Notizen werden archiviert, nie gelöscht.",
      "ydiyr": "Ein einseitiges Manifest darüber, warum Daten bei ihren Besitzern bleiben sollten, samt den Apps, die so gebaut sind.",
      "mindough": "Ein geräteübergreifender Task-Manager in Arbeit: Aufgaben lassen sich verketten, sodass die nächste erst erscheint, wenn die vorige erledigt ist – dazu Gewohnheits-Heatmaps, ein Tagebuch und Bibliotheken.",
      "sideDock": "Ein Mac-Menüleisten-Tool, das jedem Schreibtisch eine eigene Dock-Leiste gibt, während das System-Dock unangetastet bleibt. Keine Systemberechtigungen, und beim Beenden bleibt keine Spur.",
      "melodyKeeeys": "Tastaturklänge aus der Menüleiste: echte aufgenommene Tastenanschläge beim Tippen, 22 Soundpakete, für macOS, Windows und Linux."
    }
  },
  "about": {
    "title": "Über mich",
    "paragraphs": [
      "Ich bin Rei. Ich arbeite mit Genomdaten und Medizinprodukte-Vorschriften und baue in meiner Freizeit kleine Werkzeuge für mich selbst."
    ],
    "hats": "Ich trage mehrere Hüte. Als [[Übersetzer für Vorschriften]] mache ich Medizinprodukte-Vorschriften für Ingenieure verständlich und begleite Produkte Schritt für Schritt bis zur Zulassung. Als [[Qualitäts-Pedant]] schreibe ich SOPs, erstelle Checklisten und verfolge jede Korrektur, sodass wir beim Audit längst bereit sind. Als [[Projekt-Hirte]] zerlege ich Anforderungen und plane Termine, damit Entwicklung, Klinik und Bioinformatik in dieselbe Richtung gehen. Ich bin auch ein [[Produktmensch, der zuerst zeichnet]]: kein Code, bevor Prototyp und Datenbank durchdacht sind. Geht es ans Bauen, bin ich ein [[Full-Stack-Allrounder]] mit `C#`, `Python`, `Docker` und Datenbanken und fülle jede Lücke im Projekt. Und vor Sequenzierdaten werde ich zum [[Detektiv für Sequenzierdaten]]: Ich finde Mutationen in DNA-seq-Daten und mache nebenbei die Analyse-Pipelines schneller. Nach Feierabend bin ich ein [[Werkzeugbastler]]: Ich baue Browser-Erweiterungen und Desktop-Apps und betreibe ein paar kleine Websites auf `Cloudflare`. Zwei Dinge sind mir am wichtigsten: Werkzeuge, die sich gut anfühlen, und Daten, die bei ihren Besitzern bleiben. Deshalb haben meine Apps keine Konten und sammeln keine Nutzungsdaten; Sync läuft über dein eigenes Google Drive oder WebDAV.",
    "roles": [
      {
        "name": "Übersetzer für Vorschriften"
      },
      {
        "name": "Qualitäts-Pedant"
      },
      {
        "name": "Projekt-Hirte"
      },
      {
        "name": "Produktmensch, der zuerst zeichnet"
      },
      {
        "name": "Full-Stack-Allrounder"
      },
      {
        "name": "Detektiv für Sequenzierdaten"
      }
    ],
    "contact": "Schreib mir an hi@rei8t.dev"
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
