    function submitData(userName, userEmail) {
        let formData = {
            name: userName,
            email: userEmail
          };
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          };
        

        return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                let list = document.querySelector('body')

                let content = document.createTextNode(object.id)
                list.appendChild(content)
            })
            .catch(function(error) {
                let list = document.querySelector('body')

                let errorMessage = document.createTextNode(error.message)
                list.appendChild(errorMessage)
            });

    }