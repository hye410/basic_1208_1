fetch('https://jsonplaceholder.typicode.com/todos/1'). // promise 기다리고 받아서 데이터 보내기
then(response => response.text()). // promise 기다리고 받기 , 데이터 받아서 기다리기
then(result => {console.log(result)}) // 기다리고 받기, 작업 완료 -> fullfilled. 만약 문제 생겨서 거절당하면 rejected