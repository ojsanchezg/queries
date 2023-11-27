function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `mutation deleteUsuario {`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace('\n','');
        resultadoElement.innerHTML += `<p>d${i}: deletePermission(userId: "${users}", clientId: "javel_front", scope: "superuser"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
}

function copiarQueries() {
    const copiarTexto = document.querySelector('#copiar').innerHTML;
    
    // //Select the text field
    // copiarTexto.select();
    // copiarTexto.setSelectionRange(0,99999) //For mobile devices


    navigator.clipboard.writeText(copiarTexto.value);
}




// function borrarUsuario() {
//     const resultadoUsers = document.querySelector("#inputText");
//     const usuarios = resultadoUsers.value;
//     const queryUsuariosBorrados = document.getElementById('query');
//     queryUsuariosBorrados.innerHTML = '';

//     for (let i=0; i < usuarios.length; i++) {
//         const users = usuarios[i];
//         queryUsuariosBorrados.innerHTML += `<p>${users}</p>`;
//         // queryUsuariosBorrados.innerHTML += ```mutation deleteUsuario {
//         //     d${i}: deletePermission(userId: "${users}", clientId: "javel_front", scope: "superuser")
//         // };```
//     }
// }

const botones = document.querySelector(".d_box");

function queri(color) {
    botones.style.color = color;
}

// function consulta() {
//     const consulta = document.querySelector("#consulta");
//     consulta.style.color = "yellow";
// }

// function permiso() {
//     const permiso = document.querySelector("#permiso");
//     permiso.style.color = "blue";
// }




//<p> Usuario ${i + 1}: 

// function procesarLista(e) {
//     if (e.code === 'Enter') {
//         document.getElementById("procesar").click();
//     }
// }

// document.getElementById("procesar").onclick = function () {
//     function procesarLista();
// }


// function procesarLista() {
//     const inputElement = document.getElementById('inputText');
//     const inputValue = inputElement.value;
//     // console.log(inputValue);
//     const listaCadenas = inputValue.split(' ');
//     // console.log(listaCadenas);
//     //let resultado = listaCadenas.replace(regex' ');0
//     const resultadoElement = document.getElementById('resultado');
//     resultadoElement.innerHTML = '';

//     for (let i=0; i < listaCadenas.length; i++) {
//         const cadena = listaCadenas[i].trim();
//         resultadoElement.innerHTML += `<p>${cadena.toLowerCase()}</p>`;
//     }

//     return resultadoElement;
// }