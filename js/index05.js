//수정하기

const people = {
  userId:15,
  title:'title15',
  completed : true
}

fetch('https://jsonplaceholder.typicode.com/todos/172',
      {method:'PUT',
      body : JSON.stringify(people)
    }).
then(response => response.text()).
then(result => 
  console.log(result)
)


