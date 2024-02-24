import amapops1 from './Assets/amapops1.png';
import amapops2 from './Assets/amapops2.png';
import amapops3 from './Assets/amapops3.png';
import amapops4 from './Assets/amapops4.png';
import gbf1 from './Assets/gbf1.png';
import gbf2 from './Assets/gbf2.png';
import akius1 from './Assets/akius1.png';
import akius2 from './Assets/akius2.png';
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

export const experiences = [
    {
        id: 0,
        img: [{file: amapops1, md:3}, {file: amapops2, md:3}, {file: amapops3, md:3}, {file: amapops4, md:3}],
        title: 'Amapop',
        apple: null,
        google: null,
        link: null,
        role: 'Fullstack mobile',
        tech: ['React Native', 'Strapi'],
        desc: 'Application mobile dédiée aux personnes voulant échanger des popmart sur paris. Disponible sur mobile et tablette',
    },
    {
        id: 1,
        img: [{file: kornette1, md: 3},  {file: kornette3, md: 3}, {file: kornette2, md: 3}, {file: kornette4, md: 3}],
        title: 'Kornette',
        apple: 'https://apps.apple.com/fr/app/kornette/id6474862918',
        google: 'https://play.google.com/store/apps/details?id=com.kornette.app&hl=en&gl=US',
        link: null,
        role: 'Front-end mobile',
        tech: ['React Native', 'Strapi'],
        desc: 'Application mobile permettant la mise en relation entre des business angel et des porteurs de projet en levée de fonds.',
    },
    {
        id: 2,
        img: [{file: gbf1, md: 5}, {file: gbf2, md: 5}],
        title: 'GetBigFast',
        apple: '',
        google: '',
        link: 'https://getbigfast.club/',
        role: 'Front-end web',
        tech: ['ReactJs', 'NextJs', 'Bootstrap', 'Strapi'],
        desc: 'Site de mise en relation avec un mentor pour aider ton business',
    },
    {
        id: 3,
        img: [{file: akius1, md: 5}, {file: akius2, md: 5}],
        title: 'Akius',
        apple: '',
        google: '',
        link: 'https://www.akius.com/',
        role: 'Front-end web',
        tech: ['ReactJs', 'Bootdtrap', 'Strapi'],
        desc: 'Une startup qui faisait du livestream musical et changer livestream influenceurs.',
    },
    {
        id: 4,
        img: [{file: tip2, md: 5}, {file: tip1, md: 4}, {file: tip3, md: 3}],
        title: 'Tipitizi',
        apple: '',
        google: '',
        link: 'https://tipitizi.com/Splash',
        role: 'Front-end web',
        tech: ['React Native Web', 'Strapi', 'Stripe'],
        desc: 'Une web app qui permet de donner un pour boire aux employées de différents services, codée en React native.',
    },
    {
        id: 5,
        img: [{file: jenn1, md: 3}, {file: jenn2, md: 3}, {file: jenn3, md: 3}, {file: jenn4, md: 3}],
        title: 'Jenn kim',
        apple: '',
        google: 'https://play.google.com/store/apps/details?id=com.jennkim&hl=en_US',
        link: '',
        role: 'Fullstack mobile',
        tech: ['React Native', 'Back4app', 'Stripe'],
        desc: 'Une application mobile de grossiste de vêtement permettant de faire des commandes. Elle a été utilisé par des dizaines d’utilisateurs.',
    },
    {
        id: 6,
        img: [{file: dogger3, md: 2}, {file: dogger4, md: 2}, {file: dogger5, md: 6}],
        title: 'Dogger',
        apple: '',
        google: '',
        link: 'https://602d8e09590dcd5a3c6a36bd--dogger-fr.netlify.app/#home',
        role: 'Fullstack mobile',
        tech: ['React Native', 'ReactJs', 'Back4app'],
        desc: 'Projet de 5e année à Epitech. Une application mobile qui a pour but de faire rencontrer des chiens à proximité pour se promener ensemble. Elle est codée en React native et contient de la géolocalisation, du chat en direct et est multilingues. Et un site vitrine',
    },
]