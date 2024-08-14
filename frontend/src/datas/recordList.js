// Imports des images des albums
import Unthinking from '../assets/Unthinking.jpg';
import dieorfollowme from '../assets/dieorfollowme.jpg';
import bigdeathamego from '../assets/bigdeathamego.jpg';
import splitbtd from '../assets/splitbtd.jpg';

export const recordList = [
    {
        name: 'Unthinking',
        category: 'Album',
        id: '1ed',
        year: '2019',
        cover: Unthinking,
        price: 5
    },
    {
        name: 'Die or Follow Me',
        category: 'EP',
        id: '2ab',
        year: '2023',
        cover: dieorfollowme,
        price: 3,
        tracks: [
            { name: 'Intro + EAM', audio: '/audio/die-or-follow/A01 - Intro + EAM.wav' },
            { name: 'Hear Me Up', audio: '/audio/die-or-follow/A02 - Hear Me Up.wav' },
            { name: 'Gérard', audio: '/audio/die-or-follow/A03 - Gerard.wav' },
            { name: 'Die or Follow Me', audio: '/audio/die-or-follow/B04 - Follow Me.wav' },
            { name: 'Eat Shit', audio: '/audio/die-or-follow/B05 - Eat Shit.wav' },
            { name: 'Big Heads', audio: '/audio/die-or-follow/B06 - Big Heads.wav' }
        ]
    },
    {
        name: 'Big Death Amego (self-titled)',
        category: 'EP',
        id: '3sd',
        year: '2015',
        cover: bigdeathamego,
        price: 2,
        tracks: [
            { name: 'Big Wave', audio: '/audio/self-titled/01 Big wave.mp3' },
            { name: 'Cocaïne', audio: '/audio/self-titled/02 Cocaine.mp3' },
            { name: 'House of Sympathy', audio: '/audio/self-titled/03 House of sympathy.mp3' },
            { name: 'I know a man', audio: '/audio/self-titled/04 I know a man.mp3' }
        ]
    },
    {
        name: 'Split with Bill the Dog',
        category: 'EP',
        id: '4kk',
        year: '2022',
        cover: splitbtd,
        price: 4
    }
];
