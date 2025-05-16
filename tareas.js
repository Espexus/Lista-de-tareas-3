let activar_pomodoro = document.getElementById("pomodoro_btn");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let cuenta = document.getElementById("cuenta");
let contado = 0;

activar_pomodoro.addEventListener("click", pomodoro);

let minutos_pomo_contador = 25;

function pomodoro (){
    activar_pomodoro.disabled = true;
    boton_receso.disabled = true;
    let segundos_contador = 60;

    let intervalo_pomo = setInterval(()=> {
        segundos_contador--;
        segundos.textContent = String(segundos_contador).padStart(2, "0");

        if(segundos_contador== 0){
            minutos_pomo_contador--;
            minutos.textContent = String(minutos_pomo_contador).padStart(2, "0");

            clearInterval(intervalo_pomo);
            if (minutos_pomo_contador==0){
                minutos_pomo_contador =25;

                minutos.textContent = String(minutos_pomo_contador).padStart(2, "0");

                contado++;
                cuenta.textContent = contado;

                activar_pomodoro.disabled = false;
                boton_receso.disabled = false;

                return;
            }
            setTimeout(pomodoro, 0);
        }
    },1000)
}

let boton_receso = document.getElementById("receso_btn");
let minutos_receso = document.getElementById("minutos_receso");
let segundos_receso = document.getElementById("segundos_receso");

boton_receso.addEventListener("click", receso);

let minutos_receso_contador = 5;

function receso (){
    activar_pomodoro.disabled = true;
    boton_receso.disabled = true;

    let segundos_contador_receso = 60;

    let intervalo_receso = setInterval(()=> {
        segundos_contador_receso--;
        segundos_receso.textContent = String(segundos_contador_receso).padStart(2, "0");

        if(segundos_contador_receso== 0){
            minutos_receso_contador--;
            minutos_receso.textContent = String(minutos_receso_contador).padStart(2, "0");
            clearInterval(intervalo_receso);

            if (minutos_receso_contador==0){
                minutos_receso_contador =5;
                minutos_receso.textContent = String(minutos_receso_contador).padStart(2, "0");

                activar_pomodoro.disabled = false;
                boton_receso.disabled = false;
                return;
            }
            setTimeout(receso, 0);
        }
    },1000)
}


// ahora la aterradora lista de tareas//

let agregar = document.getElementById("agregar");
let lista = document.getElementById("lista");

agregar.addEventListener("click", agregarTarea)

function agregarTarea () {
    let input = document.getElementById("tarea_incluida")
    let tarea = input.value.trim();
    let item = document.createElement("li");
    
    if (tarea === ""){
        return;
    }

    let divconten = document.createElement("div");
    divconten.classList = "contenido";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    divconten.appendChild(checkbox)

    let contenido = document.createTextNode(tarea);
    divconten.appendChild(contenido);

    let divimg = document.createElement("div");

    let img = document.createElement("img");
    img.src = "equis.png";
    img.className = "eliminar";
    divimg.appendChild(img);

    item.appendChild(divconten);
    item.appendChild(divimg);

    lista.appendChild(item);
    console.log(item);

    input.value = "";
}



document.addEventListener("click", cambios)

function cambios (event) {
    let padre = event.target.closest("li");

    if (event.target.classList.contains("check")) {
        marcar(event, padre);
    } else if (event.target.classList.contains("eliminar")) {
        eliminar(event, padre);
    }
}

function marcar (event, padre) {
    
    if(event.target.checked ==true){
        padre.classList.add("completado");
    } else {
        padre.classList.remove("completado")
    }
}
function eliminar (event, padre) {
    padre.remove();
}
