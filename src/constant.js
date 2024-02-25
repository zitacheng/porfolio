import amapops1 from './Assets/amapops1.png';
import amapops2 from './Assets/amapops2.png';
import amapops3 from './Assets/amapops3.png';
import amapops4 from './Assets/amapops4.png';
import gbf1 from './Assets/gbf1.png';
import gbf2 from './Assets/gbf2.png';
import akius1 from './Assets/akius1.png';
import akius2 from './Assets/akius2.png';
import akiusOld from './Assets/akiusOld.png';
import akiusOld2 from './Assets/akiusOld2.png';
import tip2 from './Assets/tip2.png';
import tip1 from './Assets/tip1.png';
import tip3 from './Assets/tip3.png';
import dogger3 from './Assets/dogger3.png';
import dogger4 from './Assets/dogger4.png';
import dogger5 from './Assets/dogger5.png';
import kornette1 from './Assets/kornette1.png';
import kornette2 from './Assets/kornette2.png';
import kornette3 from './Assets/kornette3.png';
import kornette4 from './Assets/kornette4.png';
import jenn1 from './Assets/jenn1.png';
import jenn2 from './Assets/jenn2.png';
import jenn3 from './Assets/jenn3.png';
import jenn4 from './Assets/jenn4.png';
import cheek1 from './Assets/cheek1.png';
import cheek2 from './Assets/cheek2.png';
import cheek3 from './Assets/cheek3.png';

export const experiences = [
    {
        id: 0,
        img: [{file: amapops1, md:3}, {file: amapops2, md:3}, {file: amapops3, md:3}, {file: amapops4, md:3}],
        title: 'Amapop',
        apple: null,
        google: null,
        link: null,
        role: 'fullSMob',
        tech: ['React Native', 'Strapi'],
        desc: 'amapopDesc',
    },
    {
        id: 1,
        img: [{file: kornette1, md: 3},  {file: kornette3, md: 3}, {file: kornette2, md: 3}, {file: kornette4, md: 3}],
        title: 'Kornette',
        apple: 'https://apps.apple.com/fr/app/kornette/id6474862918',
        google: 'https://play.google.com/store/apps/details?id=com.kornette.app&hl=en&gl=US',
        link: null,
        role: 'frontMob',
        tech: ['React Native', 'Strapi'],
        desc: 'kornetDesc',
    },
    {
        id: 2,
        img: [{file: cheek1, md: 5},  {file: cheek2, md: 3}, {file: cheek3, md: 3}],
        title: 'CheekCheek',
        apple: '',
        google: '',
        link: 'https://cheek-cheek.com/',
        role: 'frontWeb',
        tech: ['Wordpress'],
        desc: 'cheekDesc',
    },
    {
        id: 3,
        img: [{file: gbf1, md: 5}, {file: gbf2, md: 5}],
        title: 'GetBigFast',
        apple: '',
        google: '',
        link: 'https://getbigfast.club/',
        role: 'frontWeb',
        tech: ['ReactJs', 'NextJs', 'Bootstrap', 'Strapi'],
        desc: 'getbigDesc',
    },
    {
        id: 4,
        img: [{file: akius1, md: 5}, {file: akius2, md: 5}],
        title: 'Akius v2',
        apple: '',
        google: '',
        link: 'https://www.akius.com/',
        role: 'frontWeb',
        tech: ['ReactJs', 'Bootstrap', 'Strapi'],
        desc: 'akiusDesc',
    },
    {
        id: 5,
        img: [{file: akiusOld, md: 5}, {file: akiusOld2, md: 5}],
        title: 'Akius v1',
        apple: '',
        google: '',
        link: '',
        role: 'frontWeb',
        tech: ['ReactJs', 'Bootstrap'],
        desc: 'akiusOldDesc',
    },
    {
        id: 6,
        img: [{file: tip2, md: 5}, {file: tip1, md: 4}, {file: tip3, md: 3}],
        title: 'Tipitizi',
        apple: '',
        google: '',
        link: 'https://tipitizi.com/Splash',
        role: 'frontWeb',
        tech: ['React Native Web', 'Strapi', 'Stripe'],
        desc: 'tipDesc',
    },
    {
        id: 7,
        img: [{file: jenn1, md: 3}, {file: jenn2, md: 3}, {file: jenn3, md: 3}, {file: jenn4, md: 3}],
        title: 'Jenn kim',
        apple: '',
        google: 'https://play.google.com/store/apps/details?id=com.jennkim&hl=en_US',
        link: '',
        role: 'fullSMob',
        tech: ['React Native', 'Back4app', 'Stripe'],
        desc: 'jennKimDesc',
    },
    {
        id: 8,
        img: [{file: dogger3, md: 3}, {file: dogger4, md: 3}, {file: dogger5, md: 5}],
        title: 'Dogger',
        apple: '',
        google: '',
        link: 'https://602d8e09590dcd5a3c6a36bd--dogger-fr.netlify.app/#home',
        role: 'fullSMob',
        tech: ['React Native', 'ReactJs', 'Back4app'],
        desc: "doggerDesc",
    },
]