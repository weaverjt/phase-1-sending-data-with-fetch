
const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  function submitData (name, email) {

    name = formData.name;
    email = formData.email;
    let here = document.getElementById("here");

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
       
        here.append(object.id);
    })
    .catch(function (error) {
      alert("Unauthorized Access");
      here.append(error.message);
    });
}

document.addEventListener("DOMContentLoaded", submitData);