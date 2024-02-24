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
import dogger2 from './Assets/dogger2.png';
import dogger3 from './Assets/dogger3.png';
import dogger4 from './Assets/dogger4.png';
import dogger5 from './Assets/dogger5.png';
import kornette1 from './Assets/kornette1.png';
import kornette2 from './Assets/kornette2.png';
import kornette3 from './Assets/kornette3.png';
import kornette4 from './Assets/kornette4.png';

export const experiences = [
    {id: 0, img: [{file: amapops1, md:2}, {file: amapops2, md:2}, {file: amapops3, md:2}, {file: amapops4, md:2}],
        title: 'Amapop', desc: 'Mobile app', role: 'Fullstack mobile'},
    {id: 1, img: [{file: kornette1, md: 2},  {file: kornette3, md: 2}, {file: kornette2, md: 2},  {file: kornette4, md: 2}],
        title: 'Kornette', desc: 'Mobile app', role: 'Front-end mobile'},
    {id: 2, img: [{file: gbf1, md: 5}, {file: gbf2, md: 5}],
        title: 'GetBigFast', desc: 'Website', role: 'Front-end web'},
    {id: 3, img: [{file: akius1, md: 5}, {file: akius2, md: 5}],
        title: 'Akius', desc: 'Website', role: 'Front-end web'},
    {id: 4, img: [{file: tip2, md: 4}, {file: tip1, md: 4}, {file: tip3, md: 2}],
        title: 'Tipitizi', desc: 'Web app', role: 'Front-end web'},
    {id: 5, img: [{file: dogger3, md: 2}, {file: dogger4, md: 2}, {file: dogger5, md: 6}],
        title: 'Dogger', desc: 'Mobile app', role: 'Fullstack mobile', lastSize: true},
]