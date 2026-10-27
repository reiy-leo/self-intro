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
    "intro": "By day I spin between medical devices and gene sequencing: pushing registrations, policing quality, herding projects, writing code, and hunting mutations in sequencing data. After hours, I tinker together handy little tools for myself."
  },
  "projects": {
    "title": "Projects",
    "lead": "Things I'm building and use every day.",
    "site": "Website",
    "source": "Source",
    "names": {
      "ydiyr": "Your data is your responsibility",
      "mimatory": "Mimatory",
      "reicky": "reicky",
      "mindough": "Mindough",
      "sideDock": "Side Dock",
      "melodyKeeeys": "Melody Keeeys"
    },
    "summaries": {
      "navill": "A browser extension that imports your bookmarks once and turns them into a new tab page of workspaces and drawers. Syncs through your own Google Drive.",
      "mimatory": "An encrypted password manager for the Mac that fills passwords in your browser and syncs through your own Google Drive or WebDAV, if you want it to.",
      "reicky": "A cross-platform desktop sticky-note app, as light as macOS Stickies. Notes are archived, never deleted.",
      "ydiyr": "A one-page manifesto on why data should stay with the people who own it, plus the apps built that way.",
      "mindough": "A cross-device task manager in progress: chain tasks so the next one shows up only when the last is done, plus habit heatmaps, a journal and libraries.",
      "sideDock": "A Mac menu-bar tool that gives each desktop its own extra Dock bar while the system Dock stays untouched. No system permissions, and it leaves no trace when it quits.",
      "melodyKeeeys": "Keyboard sounds from your menu bar: real recorded key clicks as you type, 22 sound packs, on macOS, Windows and Linux."
    }
  },
  "about": {
    "title": "About",
    "paragraphs": [
      "I'm Rei. I work with genomic data and medical regulations, and in my spare time I build small tools for myself."
    ],
    "hats": "I wear a few hats. As a [[Compliance translator]], I turn medical device regulations into words engineers understand and walk products step by step through registration. As a [[Quality stickler]], I write SOPs, build checklists and chase every fix, so when the auditors arrive, we're already ready. As a [[Project shepherd]], I break down requirements and plan schedules, so R&D, clinical and bioinformatics move in the same direction. I'm also a [[Product person who draws first]]: no code until the prototype and the database are thought through. When it's time to build, I'm a [[Full-stack all-rounder]] writing `C#`, `Python`, `Docker` and databases, filling whatever gap the project has. And with sequencing data in front of me, I become a [[Sequencing data detective]], finding mutations in DNA-seq data and making the analysis pipelines faster along the way. After hours, I'm a [[Weekend toolsmith]]: I build browser extensions and desktop apps, and run a few small sites on `Cloudflare`. Two things matter most to me: tools that feel good to use, and data that stays with the people who own it. So my apps have no accounts and collect no usage data; if you want sync, it goes through your own Google Drive or WebDAV.",
    "roles": [
      {
        "name": "Compliance translator"
      },
      {
        "name": "Quality stickler"
      },
      {
        "name": "Project shepherd"
      },
      {
        "name": "Product person who draws first"
      },
      {
        "name": "Full-stack all-rounder"
      },
      {
        "name": "Sequencing data detective"
      }
    ],
    "contact": "Email me at hi@rei8t.dev"
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
