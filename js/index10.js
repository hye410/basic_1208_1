fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
  const userId = JSON.parse(result)
  // console.log(userId)
  const {id} = userId[2]
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
  .then(response => response.text())
  .then(album => {
    console.log(album)    
  })
})

// then안에 then을 여러개 쓰는건 좋은 방법이 아님 ,,  return 으로 내보내서 밖에 then을 또다시 만드는게 더 나음