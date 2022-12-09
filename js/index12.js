// fetch('https://jsonplaceholder.typicode111.com/posts/1')
// .then(response => response.text(),(error)=>{console.log(error)})
// .then(result => {
//   console.log('welcome');
//   console.log(result)
// })

//위의 경우 처럼 error를 받는 경우, 콘솔에 error받고 밑에 결과값이 다 출력됨
//만약 error를 받지 않고 에러난 경우에는 결과값이 출력되지 않음

fetch('https://jsonplaceholdersdf.typicode.com/posts/1')
.then(response => response.text())
.then(result => {
  console.log('welcome');
  console.log(result)
})
.catch(()=>{console.log('error가 발생했습니다.')})
.finally(() => {console.log('작업이 마감되었습니다.')})

//Status Code (상태코드)
// 100~ 500 사이