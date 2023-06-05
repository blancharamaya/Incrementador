function incrementar() {
    let valor = parseInt(document.getElementById('texto').value);
    document.getElementById('texto').value = valor + 1;
}

function disminuir() {
    let valor = parseInt(document.getElementById('texto').value);
    if (valor <= 0) {
        swal("¡Error!","No se aceptan numeros negativos","error")
    } else {
        document.getElementById('texto').value = valor - 1;
    }
}

function resetear() {
    let valor = parseInt(document.getElementById('texto').value);
    if (valor !== 0) {
        swal("¡Exito!","El incrementador se reinicio sastifatoriamente", "success")
    } else {
        swal("¡Error!","El incrementador esta en 0","error");
    }
    document.getElementById('texto').value = 0; 
}   