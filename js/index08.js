fetch('https://jsonplaceholder.typicode.com/users') //조회하는 순간 promise 객체 생성됨
.then(response => response.text()) 
.then(result => {
  const users = JSON.parse(result)
  //console.log(user)
  return users[1];
})
.then(users => {
  const{address} = users;
  //console.log(address)
  return address;
})
.then(address => {
  const {geo} = address;
  //console.log(geo)
  return geo
})
.then(geo => {
  const {lat} = geo;
  console.log(lat)
})