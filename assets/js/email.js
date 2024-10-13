function sendMail(){
  let parms = {
    from_name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }
  
  emailjs.send('', '', parms).then(
  console.log("pesan terkirim")
  )
}
