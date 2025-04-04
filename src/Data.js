import LotGames from './assets/LotGames.png'
import LotHub from './assets/LotHub.png'

const projects = [
  {
    id: 1,
    title: "LotHub",
    year: 2024,
    tech: ['React','Css'],
    Description: "Lothub is a movie discovery platform inspired by IMDb. It provides users with an intuitive interface to explore, search, and discover movies, TV shows, and actors. The website pulls data from The Movie Database (TMDb) API to give real-time information on movies, actors, trending content, and much more.",
    poster: LotHub,
    code: "https://github.com/VINOTHKUMARM1127/LotHub", 
    app:"https://lothub.netlify.app/",
  },
  {
    id: 2,
    title: "LotGames",
    year: 2024,
    tech: ['React','Tailwind Css'],
    Description: "LotGames is a game discovery platform inspired by RAWG. It provides users with an intuitive interface to explore, search, and discover video games, game creators, and gaming stores. The website pulls data from the RAWG API to offer real-time information about games, creators, trending content, and much more.",
    poster: LotGames,
    code:"https://github.com/VINOTHKUMARM1127/LotGames",
    app:"https://lotgames.netlify.app/",
  },
];


const edu = [
    {
      id: 1,
      title: "PPG College of Arts & Science",
      year: '2022-Present',
      study: 'Bachelor of Science- Computer Science',
      Description: "As a Computer Science  graduate, I possess strong problem-solving and precision skills. Combining this foundation with my passion for technology, I'm venturing into IT. My college experience has equipped me to bridge the worlds of engineering and IT, applying efficiency and innovation to both realms, making me a versatile professional.",
      poster: LotHub,
    },
    {
      id: 2,
      title: "KVK Goverment Boys Higher Secondary School",
      year: '2021-2022',
      study: 'HSC- XII(std) (Computer Science)',
      Description: "I've embraced a dynamic academic journey. My studies have fostered critical thinking and a thirst for knowledge. Through my dedication and adaptability, I've honed essential skills that transcend disciplines, preparing me for future challenges and opportunities.",
    },
    {
      id: 3,
      name: "KVK Goverment Boys Higher Secondary School",
      year: '2019-2020',
      study: 'SSLC - Xth(std)',
      Description: "I embarked on my educational journey with enthusiasm. This pivotal year instilled a strong foundation in essential subjects and time management. It was a crucial step toward my academic and personal development, preparing me for the road ahead",
    },
  ];

  export  {projects, edu} ;