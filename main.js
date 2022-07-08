function grabarDatos(){

    let name_user = document.getElementById("name_user").value;
    let email_user = document.getElementById("email_user").value;
    let cantidad_entradas = document.getElementById("cantidad-Tickets").value;


    let recoleccionDatos = `Usuario: ${name_user}` + " " +
    `Email de usuario: ${email_user}` + " " +
    `Cantidad de Entradas: ${cantidad_entradas}`;
    
    let usuario = recoleccionDatos;    

    console.log(recoleccionDatos);
    alert("Gracias por reservar");

    localStorage.setItem(name_user, usuario);
}
