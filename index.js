// Add your code here
const pageBody = document.querySelector("body");

function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })

    .then(function(object) {
      let textNode = document.createTextNode(`${object.id}`);
      pageBody.appendChild(textNode);
    })

    .catch(function(error) {
      let textNode = document.createTextNode(error.message);
      pageBody.appendChild(textNode);
    });
}
