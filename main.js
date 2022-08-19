function inputTabla(){
    const des = document.getElementById("des");
    const compra = document.getElementById("compra");
    const venta = document.getElementById("venta");
    const iBasico = document.getElementById("iBasico");
    const iMinimo = document.getElementById("iMinimo");
    const iExento = document.getElementById("iExento");
    const sTotal = document.getElementById("sTotal");
    const ingresar = document.getElementById("ingresar");
    const datos = document.getElementById("datos");
     

    ingresar.addEventListener("click", (e) => {
        e.preventDefault();
        if (algo == compra.value) { //Si seleccionaron compra
            if (algo2 == iBasico.value) { //Lo mismo que con el tipo de compra

            }else if (algo2 == iMinimo) {

            }else{

            }  
        }else{ //Si seleccionaron venta
            //Repite código?, no eficiente
        }  
    })

}