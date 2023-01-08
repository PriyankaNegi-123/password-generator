let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890~!@#$%^&*()_[]{}';:<>?,./";

let pwEl = document.getElementById("password");

const pwgen = function(){
    let password= "";
    for(let i=0; i<16; i++){
        password  = password + chars.charAt(Math.floor(Math.random()*chars.length)
        );
    }
    pwEl.value = password;
}

const copy = function(){
    pwEl.select();
    document.execCommand("copy");
}