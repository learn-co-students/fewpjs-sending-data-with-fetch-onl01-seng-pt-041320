// Add your code here

// let formData = {
//     name: "Byron",
//     email: "Poodle"
//   };
   
  // method: "POST" is missing from the object below
//   let configObj = 
   
  function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
          })
      })
        .then(function(response) {
        return response.json();
        })
        .then(function(object) {
        document.body.innerHTML = object[ "id" ];
        })
        .catch(function(error) {
        document.body.innerHTML = error.message;
        });

    }
