function submitData(name, email) {
    let data = {
        name: `${name}`,
        email: `${email}`
    }; 

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    let p = document.createElement("p")

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            p.innerHTML = object.id
            document.body.appendChild(p)
        })
        .catch(function(error) {
            p.innerHTML = error.message
            document.body.appendChild(p)
        })

};