/* eslint-disable quotes */
export const FILTER_FORM_VALUE = [
  { value: 'popularity.desc', title: 'Popularity Descending' },
  { value: 'popularity.asc', title: 'Popularity Ascending' },
  { value: 'vote_average.desc', title: 'Rating Descending' },
  { value: 'vote_average.asc', title: 'Rating Ascending' },
  { value: 'primary_release_date.desc', title: 'Release Date Descending' },
  { value: 'primary_release_date.asc', title: 'Release Date Ascending' },
  { value: 'original_title.asc', title: 'Title (A-Z)' },
  { value: 'original_title.desc', title: 'Title (Z-A)' },
]

export const AVAILABILITIES_VALUE = [
  {
    name: '',
    label: 'Search all availabilities?',
    check: true,
  },
  {
    name: 'flatrate',
    label: 'Stream',
    check: true,
  },
  {
    name: 'free',
    label: 'Free',
    check: true,
  },
  {
    name: 'ads',
    label: 'Ads',
    check: true,
  },
  {
    name: 'rent',
    label: 'Rent',
    check: true,
  },
  {
    name: 'buy',
    label: 'Buy',
    check: true,
  },
]

export const RELEASE_DATE_VALUE = [
  {
    name: '',
    label: 'Search all releases?',
    check: true,
  },
  {
    name: 'region',
    label: 'Search all countries?',
    check: true,
  },
  {
    name: '1',
    label: 'Premiere',
    check: true,
  },
  {
    name: '2',
    label: 'Theatrical (limited)',
    check: true,
  },
  {
    name: '3',
    label: 'Theatrical',
    check: true,
  },
  {
    name: '4',
    label: 'Digital',
    check: true,
  },
  {
    name: '5',
    label: 'Physical',
    check: true,
  },
  {
    name: '6',
    label: 'TV',
    check: true,
  },
]

export const VOTE_SLIDER_VALUE = {
  min: 0,
  max: 500,
  step: 50,
  bigStepList: [0, 100, 200, 300, 400, 500],
}

export const USER_SCORE_VALUE = {
  min: 0,
  max: 10,
  step: 1,
  bigStepList: [0, 5, 10],
  templateString: 'Rated $ - $',
}

export const RUNTIME_VALUE = {
  min: 0,
  max: 400,
  step: 20,
  bigStepList: [0, 120, 240, 360],
  templateString: '$ minutes - $ minutes',
}

export const RADIO_VALUE = [
  {
    name: 'Everything',
    check: true,
    disable: false,
  },
  {
    name: "Movies I Haven't Seen",
    check: false,
    disable: true,
  },
  {
    name: 'Movies I Have Seen',
    check: false,
    disable: true,
  },
]

export const DEFAULT_FORM_VALUE = {
  sort_by: 'popularity.desc',
  ott_region: '',
  'vote_count-gte': 0,
  'with_runtime-gte': 0,
  'with_runtime-lte': 400,
  'vote_average-gte': 0,
  'vote_average-lte': 10,
  with_original_language: '',
  with_ott_monetization_types: '',
  with_release_type: '',
  region: '',
  with_genres: '',
  with_ott_providers: '',
  with_keywords: '',
}
