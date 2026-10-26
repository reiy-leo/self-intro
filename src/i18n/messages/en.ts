import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "about": "About",
    "invites": "Referrals"
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
    "paragraphs": [
      "I'm Rei. I work with genomic data and medical regulations, and in my spare time I build small tools for myself.",
      "I build browser extensions, desktop apps and small sites on Cloudflare. Two things matter most to me: tools that feel good to use, and data that stays with the people who own it.",
      "My apps have no accounts and collect no usage data. If you want sync, it goes through your own Google Drive or WebDAV."
    ],
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
    "github": "Find me on GitHub"
  },
  "invites": {
    "title": "Referrals",
    "lead": "Services I use and like. If you sign up through these links, we both usually get a small reward.",
    "empty": "No referral links yet.",
    "clicks": "{n} clicks",
    "add": "Add",
    "edit": "Edit",
    "delete": "Delete",
    "confirmDelete": "Delete this referral?",
    "save": "Save",
    "cancel": "Cancel",
    "fieldTitle": "Name",
    "fieldUrl": "Referral link",
    "fieldIntro": "Description (optional)",
    "login": "Admin sign-in",
    "logout": "Sign out",
    "signedIn": "Signed in as {email}",
    "loginFailed": "Sign-in failed. Please try again.",
    "loginForbidden": "This Google account doesn't have admin access.",
    "loginUnconfigured": "Sign-in isn't set up yet.",
    "loadFailed": "Couldn't load. Please refresh and try again.",
    "saveFailed": "Couldn't save: "
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
