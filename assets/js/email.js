function sendMail(){
  let parms = {
    from_name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }
  
  emailjs.send('service_a4y09p7', 'template_pqjgq6x', parms).then(
  console.log("pesan terkirim")
  )
}

function tes() {
  alert("tes")
}