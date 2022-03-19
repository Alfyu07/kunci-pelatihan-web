const form = document.querySelector("form");
const eyeBtn = document.querySelector(".input-field span");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

let showPass = false;

eyeBtn.onclick = () =>{
    const passwordInput = document.querySelector("#password");
    if(!showPass){
        showPass = true;
        passwordInput.setAttribute("type", "text");
        
        // set icon to eye-slash
        let newIcon = '<i class="fa-solid fa-eye-slash"></i>';
        eyeBtn.innerHTML = newIcon;
    }else{
        showPass = false;
        passwordInput.setAttribute("type", "password");

        // set icon to eye
        let newIcon = '<i class="fa-solid fa-eye"></i>';
        eyeBtn.innerHTML = newIcon;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener("submit", (e) => {
    let error = false;
    let message = [];

    if(!validateEmail(email.value)){
        error = true;
        // alert('Invalid email address');
        message.push("Alamat email invalid");
    }

    if(password.value ==='' || password.value == null){
        // alert('password tidak boleh kosong');
        message.push("Password tidak boleh kosong");
        error = true;
    }else if(password.value.length <= 6){
        // alert('password tidak boleh kosong');
        message.push("Password setidaknya terdiri dari 6 karakter");
        error = true;
    }

    if(error){
        e.preventDefault();
        alert(message.join(', '));
    }else{
        alert('Berhasil login');
    }
});