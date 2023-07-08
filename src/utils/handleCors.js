export const handleCors = () => {
  const xhr = new XMLHttpRequest()
  xhr.open(
    'GET',
    'https://cors-anywhere.herokuapp.com/https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg',
  )
  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest')
  xhr.send()
}
