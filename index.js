function submitData(username, email) {
  const body = document.querySelector("body")

  let formData = {
    name: username,
    email: email
  }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
}