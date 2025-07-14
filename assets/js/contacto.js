let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let numTel=document.getElementById("numTel");
let email=document.getElementById("email");
let mensaje=document.getElementById("mensaje");
let listInfo=document.getElementById("list-info");
let btnSubmit=document.getElementById("btnSubmit");

btnSubmit.onclick= function(){
    creatList();
}

function creatList(){
    let html="";
    html=`
        <li class="list-group-item">
        nombre: ${nombre.value} <br>
        apellido: ${apellido.value} <br>
        numTel: ${numTel.value} <br>
        email: ${email.value} <br>
        mensaje: ${mensaje.value}
        </li>
        `;
        
    console.log(html);
    listInfo.innerHTML+=html;
}