function submitData(name, email) {
    let formData = {
        name: "Steve",
        email: "steve@steve.com" 
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    const result = fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    });
    return result 
};
