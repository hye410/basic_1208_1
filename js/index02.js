//user id가 4인 애들만 뽑아내기

fetch('https://jsonplaceholder.typicode.com/todos')
//text화
.then(response => response.text())
//받은 파일을 for in문으로 결과 내보내기
.then(result => {
  // console.log(result)
  const level = JSON.parse(result)
  //console.log(level)
  const basic = level.filter((item) => item.userId === 4)
  // console.log(basic)
  for (let i in basic){
    document.write( 
      `
      ${basic[i].id} : ${basic[i].title} <br>
      `)
  }
})

