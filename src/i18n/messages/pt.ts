import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Início",
    "projects": "Projetos",
    "about": "Sobre",
    "invites": "Indicações"
  },
  "language": "Idioma",
  "home": {
    "greeting": "Oi, eu sou o Rei.",
    "intro": "Faço pequenas ferramentas para mim: extensões de navegador, apps de desktop e sites simples na Cloudflare. Seus dados devem ficar nas suas mãos.",
    "seeProjects": "Ver meus projetos",
    "aboutMe": "Mais sobre mim"
  },
  "projects": {
    "title": "Projetos",
    "lead": "Coisas que estou criando e uso todo dia.",
    "site": "Site",
    "source": "Código",
    "names": {
      "ydiyr": "Seus dados, sua responsabilidade"
    },
    "summaries": {
      "navill": "Uma extensão de navegador que importa seus favoritos uma vez e os transforma em uma nova aba com espaços de trabalho e gavetas. Sincroniza pelo seu próprio Google Drive.",
      "mimatory": "Um gerenciador de senhas criptografado para Mac que preenche senhas no navegador e, se você quiser, sincroniza pelo seu próprio Google Drive ou WebDAV.",
      "reicky": "Notas adesivas de desktop multiplataforma, leves como o Stickies do macOS. As notas são arquivadas, nunca apagadas.",
      "ydiyr": "Um manifesto de uma página sobre por que os dados devem ficar com quem é dono deles, e os apps feitos assim."
    }
  },
  "about": {
    "title": "Sobre",
    "paragraphs": [
      "Sou o Rei. Trabalho com dados genômicos e regulamentação médica e, no tempo livre, faço pequenas ferramentas para mim.",
      "Faço extensões de navegador, apps de desktop e sites pequenos na Cloudflare. Duas coisas importam mais para mim: ferramentas gostosas de usar e dados que ficam com quem é dono deles.",
      "Meus apps não têm contas nem coletam dados de uso. Se você quiser sincronizar, isso passa pelo seu próprio Google Drive ou WebDAV."
    ],
    "rolesTitle": "Eu uso alguns chapéus:",
    "roles": [
      {
        "name": "Tradutor de regulamentos",
        "desc": "Transformo a regulamentação de dispositivos médicos em algo que engenheiros entendem e acompanho os produtos passo a passo até o registro."
      },
      {
        "name": "Caprichoso com qualidade",
        "desc": "Escrevo SOPs, monto checklists e acompanho as correções. Quando a auditoria chega, já estamos prontos."
      },
      {
        "name": "Pastor de projetos",
        "desc": "Divido requisitos e planejo prazos para que P&D, clínica e bioinformática sigam na mesma direção."
      },
      {
        "name": "Produto que desenha primeiro",
        "desc": "Penso no protótipo e no banco de dados antes de escrever qualquer código."
      },
      {
        "name": "Faz-tudo full-stack",
        "desc": "C#, Python, Docker, bancos de dados. O que faltar no projeto, eu completo."
      },
      {
        "name": "Detetive de dados de sequenciamento",
        "desc": "Encontro mutações em dados de DNA-seq e, de quebra, deixo os pipelines de análise mais rápidos."
      }
    ],
    "github": "Me encontre no GitHub"
  },
  "invites": {
    "title": "Indicações",
    "lead": "Serviços que uso e de que gosto. Se você se cadastrar por estes links, normalmente nós dois ganhamos uma pequena recompensa.",
    "empty": "Ainda não há links de indicação.",
    "clicks": "{n} cliques",
    "add": "Adicionar",
    "edit": "Editar",
    "delete": "Excluir",
    "confirmDelete": "Excluir esta indicação?",
    "save": "Salvar",
    "cancel": "Cancelar",
    "fieldTitle": "Nome",
    "fieldUrl": "Link de indicação",
    "fieldIntro": "Descrição (opcional)",
    "login": "Login do administrador",
    "logout": "Sair",
    "signedIn": "Conectado como {email}",
    "loginFailed": "Não foi possível entrar. Tente novamente.",
    "loginForbidden": "Esta conta do Google não tem acesso de administrador.",
    "loginUnconfigured": "O login ainda não está configurado.",
    "loadFailed": "Não foi possível carregar. Atualize e tente novamente.",
    "saveFailed": "Não foi possível salvar: "
  },
  "footer": {
    "license": "Código aberto sob a licença MIT"
  },
  "notFound": {
    "title": "Página não encontrada",
    "back": "Voltar ao início"
  }
};

export default messages;
