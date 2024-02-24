import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'devMobileWeb': 'Web/mobile developer',
      'freelance': 'Freelance',
      'exp': 'Experiences',
      'about': 'About',
      'hobbies': 'Hobbies',
      'skills': 'Skills',
      'lang': 'Language',
      'travel': 'Traveling',
      'skate': 'Skating',
      'snow': 'Snowboarding',
      'fr': 'French',
      'en': 'English',
      'cn': 'Chinese',
      'bio1': "After my first year of DUT in networks and telecommunications, I discovered programming and became passionate about this world. I then joined Epitech, a computer science school, the following year.",
      'bio2': "My experience at Epitech allowed me to develop my autonomy and learn quickly. I attach particular importance to writing clean and neat code, as well as a well-thought-out design.",
      'bio3': "If you need a web/mobile developer, do not hesitate to contact me.",
      'r&t': 'IUT Networks & Telecommunications',
      'epitechM': 'Expert school in computer software engineering.',
      'lbYear': 'Exchange year in Long Beach in the United States in the computer science department.',
      'akiusRole': 'Front-end Web Developer at startup Akius.',
      'freelanceYear': 'Works on various mobile projects including Kornette and Amapop.',
      'discover': 'Discovery of coding.',
    }
  },
  fr: {
    translation: {
      'devMobileWeb': 'Développeuse web / mobile',
      'freelance': 'Freelance',
      'exp': 'Expériences',
      'about': 'À propos',
      'hobbies': "Centre d'intérêts",
      'skills': 'Compétences',
      'lang': 'Langue',
      'travel': 'Voayge',
      'skate': 'Skate',
      'snow': 'Snowboard',
      'fr': 'Français',
      'en': 'Anglais',
      'cn': 'Chinois',
      'bio1': "Après ma première année de DUT en réseaux et télécommunications, j'ai découvert la programmation et suis devenu passionné par cet univers. J'ai ensuite intégré Epitech, une école d'informatique, dès l'année suivante.",
      'bio2': "Mon expérience à Epitech m'a permis de développer mon autonomie et d'apprendre rapidement. J'accorde une importance particulière à l'écriture d'un code propre et soigné, ainsi qu'à un design bien pensé.",
      'bio3': "Si vous avez besoin d'une développeuse web/mobile, n'hésitez pas à me contacter.",
      'r&t': 'IUT Réseaux & Télécommunication',
      'epitechM': "École d'expert en ingénierie informatique logicielle.",
      'lbYear': "Année d'échange à Long Beach aux Etats-Unis dans le département informatique.",
      'akiusRole': 'Développeuse Front-end Web au startup Akius.',
      'freelanceYear': 'Travaille sur divers projets mobile dont Kornette et Amapop.',
      'discover': 'Découverte du codage.',
    }
  },
  cn: {
    translation: {
      'freelance': '自由职业者',
      'devMobileWeb': '手机/网站编程师',
      'exp': '经验',
      'about': '关于我',
      'hobbies': "爱好",
      'skills': '技能',
      'lang': '语言',
      'travel': '旅游',
      'skate': '滑板',
      'snow': '滑雪单板',
      'fr': '法文',
      'en': '英文',
      'cn': '中文',
      'bio1': "在网络和电信专业学校的期间，我发现了编程并对这个产生了热情。第二年，我就加入了 Epitech，一所计算机科学学校.",
      'bio2': "我在 Epitech 的经历使我能够发展自主性并快速学习。我特别重视编写干净整洁的代码以及经过深思熟虑的设计.",
      'bio3': "如果您需要网站/手机编程师，请随时与我联系.",
      'r&t': 'IUT Réseaux & Télécommunication',
      'epitechM': "工程专家学院.",
      'lbYear': "在美国长滩计算机科学系交换一年.",
      'akiusRole': '在Akius做前端开发人员.',
      'freelanceYear': '在不同手机软件编码，其中包含Kornette和Amapop.',
      'discover': '编码的发现',
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