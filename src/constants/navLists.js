const HEADER_LIST = [
  {
    id: 1,
    name: 'Movies',
    listitem: [
      { title: 'Popular', link: 'movie' },
      { title: 'Now Playing', link: 'now-playing' },
      { title: 'Upcoming', link: 'upcoming' },
      { title: 'Top rated', link: 'top-rated' },
    ],
  },
  {
    id: 2,
    name: 'TV Shows',
    listitem: [
      { title: 'Popular', link: 'tv' },
      { title: 'Airing today', link: 'airing-today' },
      { title: 'On TV', link: 'on-tv' },
      { title: 'Top rated', link: 'top-rated' },
    ],
  },
  { id: 3, name: 'People', listitem: [{ title: 'Popular people', link: 'person' }] },
  {
    id: 4,
    name: 'More',
    listitem: [
      { title: 'Discussions', link: 'discussions' },
      { title: 'Leader board', link: 'leader-board' },
      { title: 'support', link: 'support' },
      { title: 'API', link: 'api' },
    ],
  },
]
const NAV_LIST = [
  {
    id: 1,
    name: 'Movies',
    listitem: [
      { title: 'Popular', link: 'popular' },
      { title: 'Top rated', link: 'top-rated' },
      { title: 'Upcoming', link: 'upcoming' },
      { title: 'Now playing', link: 'now-playing' },
    ],
  },
  {
    id: 2,
    name: 'TV Shows',
    listitem: [
      { title: 'Popular', link: 'popular' },
      { title: 'Top rated', link: 'top-rated' },
      { title: 'On Tv', link: 'on-tv' },
      { title: 'Airling', link: 'airling' },
    ],
  },
  { id: 3, name: 'People', listitem: [{ title: 'Popular People', link: 'popular-people' }] },
]
const TOPBAR_PERSON_DETAIL = [
  {
    id: 1,
    name: 'overview',

    listitem: [
      { title: 'main', link: 'main' },
      { title: 'translations', link: 'translations' },
      { title: 'changes', link: 'changes' },
      { title: 'report', link: 'report' },
    ],
  },
  { id: 2, name: 'media', listitem: [{ title: 'profiles', link: 'profiles' }] },
  { id: 3, name: 'fandom', listitem: [{ title: 'Discussions', link: 'discussions' }] },
  {
    id: 4,
    name: 'share',
    listitem: [
      { title: 'share link', link: 'main' },
      { title: 'facebook', link: 'translations' },
      { title: 'tweet', link: 'changes' },
    ],
  },
]
const TOPBAR_MOVIE_DETAIL = [
  {
    id: 1,
    name: 'overview',
    listitem: [
      { title: 'Main', link: 'main' },
      { title: 'Alternative Titles', link: 'alternative' },
      { title: 'Cast & Crew', link: 'cast-crew' },
      { title: 'episode groups', link: 'episode-groups' },
      { title: 'seasons', link: 'seasons' },
      { title: 'translations', link: 'translations' },
    ],
  },
  {
    id: 2,
    name: 'media',

    listitem: [
      { title: 'backdrops', link: 'backdrops' },
      { title: 'logos', link: 'logos' },
      { title: 'posters', link: 'posters' },
      { title: 'videos', link: 'videos' },
    ],
  },
  {
    id: 3,
    name: 'fandom',

    listitem: [
      { title: 'Discussions', link: 'discussions' },
      { title: 'reviews', link: 'reviews' },
    ],
  },
  {
    id: 4,
    name: 'share',
    listitem: [
      { title: 'share link', link: 'main' },
      { title: 'facebook', link: 'translations' },
      { title: 'tweet', link: 'changes' },
    ],
  },
]
const DISCUSSIONS_LIST = ['overview', 'general', 'content issues']
const NAV_INFO = ['contribution bible', 'apps', 'Discussions', 'Leader board', 'API', 'support', 'giới thiệu']
export { HEADER_LIST, NAV_LIST, TOPBAR_PERSON_DETAIL, TOPBAR_MOVIE_DETAIL, DISCUSSIONS_LIST, NAV_INFO }
