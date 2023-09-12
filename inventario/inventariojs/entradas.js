//Asignar en cariable el formulario
const formularioEntrada = document.getElementById('formulario-entrada');

//Guardar tarea en una constante
const GuardaLasEntradas = (Fabricante, Recibio, TipoDePanel, Unidades, Costo, TotalCosto) =>
    //asincrono en cuanto se envie deolvera algo
    db.collection('Entradas').doc().set({
        Fabricante,
        Recibio,
        TipoDePanel,
        Unidades,
        Costo,
        TotalCosto
    })

//escuchar el envio y enviar una funcion al escucharlo
formularioEntrada.addEventListener('submit', async (e)=> {
    //no refrescar pagina
    e.preventDefault();
    //asignar constantes a los datos ingresados por teclado
    const Fabricante = formularioEntrada['fabricante'];
    const Recibio = formularioEntrada['recibio'];
    const TipoDePanel = formularioEntrada['tipodepanel'];
    const Unidades = formularioEntrada['unidades'];
    const Costo = formularioEntrada['costo'];
    const TotalCosto = formularioEntrada['totalcosto'];
    
    //una vez se guarde lo receteamos
    await GuardaLasEntradas(Fabricante.value, Recibio.value, TipoDePanel.value, Unidades.value, Costo.value, TotalCosto.value);
    formularioEntrada.reset();
    Fabricante.focus();

})