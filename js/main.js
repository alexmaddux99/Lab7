fetch("https://techy-api.vercel.app/api/json")
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayMessage(data, "#quote")
  })

  function displayMessage(data, container){
      
      const holder = document.querySelector(container);

      const message = data.message;
      const display = document.createElement("p");
      display.innerHTML = message;
      holder.appendChild(display)

  }

fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then(data => {
    console.log(data);
    const dog = document.getElementById("dog")
    dog.src=data.message
  })