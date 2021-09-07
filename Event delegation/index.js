// Event delegation

document.querySelector("#products").addEventListener("click", (event) =>{
    console.log("Parent product clicked", event);
    console.log(event.target.id);
    // window.location.href = "/" + event.target.id;
})

document.querySelector("#form").addEventListener("keyup", function(event) {
    console.log(event);
    if (event.target.dataset.uppercase == "") {
        event.target.value = event.target.value.toUpperCase();
    }
})