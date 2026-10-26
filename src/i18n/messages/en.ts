import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "about": "About"
  },
  "language": "Language",
  "home": {
    "greeting": "Hi, I'm Rei.",
    "intro": "I build small tools for myself: browser extensions, desktop apps, and little sites on Cloudflare. Your data should stay in your hands.",
    "seeProjects": "See my projects",
    "aboutMe": "More about me"
  },
  "projects": {
    "title": "Projects",
    "lead": "Things I'm building and use every day.",
    "site": "Website",
    "source": "Source",
    "names": {
      "ydiyr": "Your Data, Your Responsibility"
    },
    "summaries": {
      "navill": "A browser extension that imports your bookmarks once and turns them into a new tab page of workspaces and drawers. Syncs through your own Google Drive.",
      "mimatory": "An encrypted password manager for the Mac that fills passwords in your browser and syncs through your own Google Drive or WebDAV, if you want it to.",
      "reicky": "A cross-platform desktop sticky-note app, as light as macOS Stickies. Notes are archived, never deleted.",
      "ydiyr": "A one-page manifesto on why data should stay with the people who own it, plus the apps built that way."
    }
  },
  "about": {
    "title": "About",
    "intro": "I'm Rei. I work with genomic data and medical regulations, and in my spare time I build small tools for myself.",
    "rolesTitle": "I wear a few different hats:",
    "roles": [
      {
        "name": "Compliance translator",
        "desc": "I turn medical device regulations into words engineers understand, then guide products step by step through registration."
      },
      {
        "name": "Quality stickler",
        "desc": "I write SOPs, build checklists and follow up on fixes. When the auditors arrive, we're already ready."
      },
      {
        "name": "Project shepherd",
        "desc": "I break down requirements and plan schedules, so R&D, clinical and bioinformatics teams move in the same direction."
      },
      {
        "name": "Product person who draws first",
        "desc": "I think through the prototype and the database before writing any code."
      },
      {
        "name": "Full-stack all-rounder",
        "desc": "C#, Python, Docker, databases. Whatever the project is missing, I fill in."
      },
      {
        "name": "Sequencing data detective",
        "desc": "I find mutations in DNA-seq data, and make the analysis pipelines run faster along the way."
      }
    ],
    "outro": "My apps have no accounts and collect no usage data. Your data stays on your own devices and your own cloud storage.",
    "github": "Find me on GitHub"
  },
  "footer": {
    "license": "Source code under the MIT License"
  },
  "notFound": {
    "title": "Page not found",
    "back": "Back home"
  }
};

export default messages;
