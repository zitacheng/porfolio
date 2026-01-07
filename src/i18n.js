import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'devMobileWeb': 'Web/mobile developer',
      'fullSMob': 'Fullstack mobile',
      'frontMob': 'Front-end mobile',
      'frontWeb': 'Front-end web',
      'freelance': 'Freelance',
      'exp': 'Experiences',
      'about': 'About',
      'hobbies': 'Hobbies',
      'skills': 'Skills',
      'lang': 'Language',
      'ClicktoSee': 'Click to change',
      'travel': 'Traveling',
      'skate': 'Skating',
      'snow': 'Snowboarding',
      'midjourney': 'Midjourney (AI generated image)',
      'fr': 'French',
      'en': 'English',
      'cn': 'Chinese',
      'bio1': "After my first year of DUT in networks and telecommunications, I discovered programming and became passionate about this world. I then joined Epitech, a computer science school, the following year.",
      'bio2': "My experience at Epitech allowed me to develop my autonomy and learn quickly. I attach particular importance to writing clean and neat code, as well as a well-thought-out design.",
      'bio3': "Currently in Marseille, France do not hesitate to contact me if you need a web/mobile developer.",
      'r&t': 'IUT Networks & Telecommunications',
      'epitechM': 'Expert school in computer software engineering.',
      'lbYear': 'Exchange year in Long Beach in the United States in the computer science department.',
      'akiusRole': 'Front-end Web Developer at startup Akius.',
      'freelanceYear': 'Works on various mobile projects including Kornette and Amapop.',
      'discover': 'Discovery of coding.',
      'amapopDesc': 'Mobile application dedicated to people wanting to exchange Popmart in Paris.',
      'kornetDesc': 'Mobile application allowing connection between business angels and fundraising project leaders.',
      'getbigDesc': 'Website to put you in touch with a mentor to help your business.',
      'akiusDesc': 'A website that allows you to make donations to support projects and be rewarded with NFTs',
      'tipDesc': 'A web app that allows you to tip employees of different departments.',
      'jennKimDesc': "A clothing wholesaler's mobile application allowing you to place orders.",
      'doggerDesc': '5th year project at Epitech. A mobile application which aims to meet people with a dog nearby to walk them together. It contains geolocation, live chat and is multilingual. And I also coded a web landing page.',
      'cheekDesc': 'Website that sells jewellery',
      'akiusOldDesc': "The old version of the Akius website was to do artist musical livestreams for their fans. My job was to develop an admin interface to manage events and artists",
      'koudaiDesc': "The Skull King Scoring App makes it easy to track scores for the Skull King card game. Players enter their bids and tricks, and the app automatically calculates scores and bonuses according to the official rules. It supports multiple players and keeps score round by round so you can focus on the game. And other ini games will be implemented as well in the future.",
      'contact': "Contact",
      'name': 'Name',
      'email': 'Email',
      'message': 'Message',
      'send': 'Send',
      'climb': 'Climbing',
      'run': 'Running'
    }
  },
  fr: {
    translation: {
      'devMobileWeb': 'Développeuse web / mobile',
      'fullSMob': 'Fullstack mobile',
      'frontMob': 'Front-end mobile',
      'frontWeb': 'Front-end web',
      'freelance': 'Freelance',
      'exp': 'Expériences',
      'about': 'À propos',
      'hobbies': "Centre d'intérêts",
      'skills': 'Compétences',
      'lang': 'Langue',
      'ClicktoSee': 'Clique pour changer',
      'travel': 'Voayge',
      'skate': 'Skate',
      'snow': 'Snowboard',
      'midjourney': "Midjourney (génération d'image en IA)",
      'fr': 'Français',
      'en': 'Anglais',
      'cn': 'Chinois',
      'bio1': "Après ma première année de DUT en réseaux et télécommunications, j'ai découvert la programmation et suis devenu passionné par cet univers. J'ai ensuite intégré Epitech, une école d'informatique, dès l'année suivante.",
      'bio2': "Mon expérience à Epitech m'a permis de développer mon autonomie et d'apprendre rapidement. J'accorde une importance particulière à l'écriture d'un code propre et soigné, ainsi qu'à un design bien pensé.",
      'bio3': "Actuellement à Marseille, si vous avez besoin d'une développeuse web/mobile, n'hésitez pas à me contacter.",
      'r&t': 'IUT Réseaux & Télécommunication',
      'epitechM': "École d'expert en ingénierie informatique logicielle.",
      'lbYear': "Année d'échange à Long Beach aux Etats-Unis dans le département informatique.",
      'akiusRole': 'Développeuse Front-end Web au startup Akius.',
      'freelanceYear': 'Travaille sur divers projets mobile dont Kornette et Amapop.',
      'discover': 'Découverte du codage.',
      'amapopDesc': 'Application mobile dédiée aux personnes voulant échanger des Popmart sur paris.',
      'kornetDesc': 'Application mobile permettant la mise en relation entre des business angel et des porteurs de projet en levée de fonds.',
      'getbigDesc': 'Siteweb de mise en relation avec un mentor pour aider ton business.',
      'akiusDesc': 'Un site qui permet de faire des don pour soutenir des projets et être récompensé en NFT.',
      'tipDesc': 'Une application web qui permet de donner un pour boire aux employées de différents services.',
      'jennKimDesc': 'Une application mobile de grossiste de vêtement permettant de faire des commandes.',
      'doggerDesc': "Projet de 5e année à Epitech. Une application mobile qui a pour but de faire rencontrer des personnes ayant un chien à proximité pour les promener ensemble. Elle contient de la géolocalisation, du chat en direct et est multilingues. Et j'ai également codée une site vitrine.",
      'cheekDesc': 'Site de vente en détail de bijoux.',
      'akiusOldDesc': "L'ancien version du site Akius était de faire du livestream musical pour les artistes. Mon job été de développer une interface admin pour gérer les évènements et les artists.",
      'koudaiDesc': "L'application Skull King Scoring App permet de suivre facilement les scores du jeu de cartes Skull King. Les joueurs saisissent leurs annonces et leurs plis, et l'application calcule automatiquement les scores et bonus selon les règles officielles. Elle prend en charge plusieurs joueurs, affiche les scores manche par manche et d'autres mini-jeux seront ajoutés à l'avenir.",
      'contact': "Contact",
      'name': 'Nom',
      'email': 'Email',
      'message': 'Message',
      'send': 'Envoyer',
      'climb': 'Escalade Bloc et falaise',
      'run': 'course à pied'
    }
  },
  cn: {
    translation: {
      'freelance': '自由职业者',
      'devMobileWeb': '手机/网站编程师',
      'fullSMob': '手机软件全栈编程师',
      'frontMob': '手机软件前端编程师',
      'frontWeb': '网站前端编程师',
      'exp': '经验',
      'about': '关于我',
      'hobbies': "爱好",
      'skills': '技能',
      'lang': '语言',
      'ClicktoSee': '按国旗换语言',
      'travel': '旅游',
      'skate': '滑板',
      'snow': '滑雪单板',
      'midjourney': "Midjourney (AI绘画程序)",
      'fr': '法文',
      'en': '英文',
      'cn': '中文',
      'bio1': "在网络和电信专业学校的期间，我发现了编程并对这个产生了热情。第二年，我就加入了 Epitech，一所计算机科学学校。",
      'bio2': "我在 Epitech 的经历使我能够发展自主性并快速学习。我特别重视编写干净整洁的代码以及经过深思熟虑的设计。",
      'bio3': "目前在法国马赛，如果您需要网站/手机编程师，请随时与我联系。",
      'r&t': '电信网络大学',
      'epitechM': "工程专家学院。",
      'lbYear': "在美国长滩计算机科学系交换一年。",
      'akiusRole': '在Akius做前端开发人员。',
      'freelanceYear': '在不同手机软件编码，其中包含Kornette和Amapop。',
      'discover': '编码的发现',
      'amapopDesc': '专门为想要在巴黎交换泡泡玛特的人们设计的应用程序。',
      'kornetDesc': '天使投资者和筹款项目负责人之间建立联系的应用程序。',
      'getbigDesc': '让您与导师联系以及帮助您的业务的网站。',
      'akiusDesc': '您可以捐款支持项目并获得 NFT 奖励的网站。',
      'tipDesc': '可让您给不同产业的员工小费的应用程序。',
      'jennKimDesc': "您可以下订单的服装批发商的应用程序。",
      'doggerDesc': 'Epitech大学第5年的项目。一款应用程序，目的是让附近养狗的人一起遛狗。它包含定位、实时聊天并且是多语言的。我还编写了一个网页。',
      'cheekDesc': '一个买首饰的网站',
      'akiusOldDesc': "Akius的旧版是给音乐家做直播给他们的粉丝看。我的工作是开发一个管直播和音乐家的一个管理网站。",
      'koudaiDesc': "Skull King 计分应用让追踪 Skull King 纸牌游戏的得分变得简单。玩家输入叫牌和赢得的墩数，应用会根据官方规则自动计算分数和奖励。应用支持多名玩家，按回合显示得分，未来还将加入更多迷你游戏。",
      'contact': "联系",
      'name': '姓名',
      'email': '邮箱',
      'message': '留言',
      'send': '发送',
      'climb': '攀岩',
      'run': '跑步'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;