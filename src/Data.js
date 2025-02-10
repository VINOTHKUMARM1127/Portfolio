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
  },
  {
    id: 2,
    title: "LotGames",
    year: 2024,
    tech: ['React','Tailwind Css'],
    Description: "LotGames is a game discovery platform inspired by RAWG. It provides users with an intuitive interface to explore, search, and discover video games, game creators, and gaming stores. The website pulls data from the RAWG API to offer real-time information about games, creators, trending content, and much more.",
    poster: LotGames,
  },
];


export default projects;