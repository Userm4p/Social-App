let users = [];



$(document).ready(function() {

    $('#register-form').click(function(e) {
        let birthdate = $('#birthdate').val();
        let name=$('#name').val();
        let alias=$('#alias').val();
        let email=$('#email').val();
        let password=CryptoJS.SHA512($('#Password1').val());
        let password2=CryptoJS.SHA512($('#Password2').val());
        if(name=="" || alias=="" || email=="" || password=="" || password2=="" || birthdate==""){
            alert("Todos los campos son obligatorios");
        } else if(password.toString(CryptoJS.enc.Hex)!=password2.toString(CryptoJS.enc.Hex)){
            alert("Las contraseñas no coinciden");
        } else if(password.length<8){
            alert("La contraseña debe tener al menos 8 caracteres");
        } else {
            let user={
                "birthdate": birthdate,
                "name":name,
                "email":email,
                "alias":alias,
                "password":password.toString(CryptoJS.enc.Hex)
            }
            users = JSON.parse(localStorage.getItem("users"));
            if(users===null){
                users=[];
            }
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuario registrado");
            $('#name').val("");
            $('#alias').val("");
            $('#email').val("");
            $('#Password1').val("");
            $('#Password2').val("");
        }
    });
        
    $('#login-form').click(function(e) {
        users = JSON.parse(localStorage.getItem("users"));
        let email=$('#email-login').val();
        let password=CryptoJS.SHA512($('#password-login').val());
        let validateuser = ()=>{
            let user = users.find(user => user.email == email && user.password === password.toString(CryptoJS.enc.Hex));
            return user
        }
        let user = validateuser();
        if(user){
            localStorage.setItem("user", JSON.stringify(user));
            alert("Bienvenido "+user.name);
            $('#login-form').attr("href", "./usuarios.html");
        }else{
            alert('Usuario no encontrado')
            $('#login-form').attr("href", "");
        }
    })});
