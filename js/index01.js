fetch('https://jsonplaceholder.typicode.com/todos/1').
// text() : string, json() :promise 만들기 ->제이슨은 파싱에러 위험이 높음
//then((response) => {return response.text()}) 이거의 축약형 아래,,
then(response => response.text()).
then(result => {console.log(result)})
