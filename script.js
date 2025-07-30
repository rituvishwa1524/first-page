function showAlert() {
    alert("You clicked the button!");
}

function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you, ${name}! we will contact you at ${email}.`);
    return false; 
}