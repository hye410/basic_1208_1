//albumID 가 1인 애들만 뽑아내기

fetch('https://jsonplaceholder.typicode.com/photos').
then(response => response.text()).
then(result => {
 const level = JSON.parse(result)
//  console.log(level)
const basic = level.filter((item) => 
  item.albumId === 1)
//console.log(basic)
for (let i of basic){
  document.write(
    `
    <figure>
    <img src="${i.thumbnailUrl}" alt="${i.title}">
    <figcaption>${i.title}</figcaption>
    </figure>
    `
  )
}
})