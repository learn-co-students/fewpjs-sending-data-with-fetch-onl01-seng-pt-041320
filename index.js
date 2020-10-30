// Add your code here
 function submitData(name, email) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
}
  
  return fetch("http://localhost:3000/users", configObj) 
  .then(function(response) {
      return response.json(); 
  })
  .then(function(object) {
      let idNode = document.createElement('p')
      idNode.innerHTML = object.id
      document.body.appendChild(idNode)
  })
  .catch(function(error) {
    let errorNode = document.createElement('p')
    errorNode.innerHTML = error.message
    document.body.appendChild(errorNode)
  })
 }