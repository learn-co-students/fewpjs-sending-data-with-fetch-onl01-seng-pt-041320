// Add your code here
function submitData(name, email)
{
    let data = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify(data)
    };

    let request = fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const div = document.createElement("div");

            div.textContent = object.id;
            document.body.append(div);
        })
        .catch(function (error) {
            const div = document.createElement("div");

            div.textContent = error.message;
            document.body.append(div);
        });
    
    return request;
}