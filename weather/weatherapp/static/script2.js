function sendMail(){
    var params={
        name:document.getElementById("name").value,
        Email:document.getElementById("Email").value,
        mobile:document.getElementById("mobile").value,
        location:document.getElementById("location").value,

    }
    emailjs.send("service_b69ofou","template_2qgrgw8",params).then(function(res){
    alert("success!!")
})
   

}