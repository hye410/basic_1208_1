console.log('A:1')
async function play(){
  console.log('B:3')
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //여기 기다렸다가 들어가야해서 아래 FGHI가 먼저 실행됨
  console.log('C:8')
  const result = await response.text()
  console.log(result)
  console.log('D:9')
}
console.log('E:2');
play();
console.log('F:4')
console.log('G:5')
console.log('H:6')
console.log('I:7')
