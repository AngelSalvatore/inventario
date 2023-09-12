
const formularioSalida = document.getElementById('formulario-salida');

const guardarSalidas = (Fabricante, Suministro, TipoDePanel, Unidades, Precio, TotalPrecio) =>
    db.collection("Salidas").doc().set({
        Fabricante, 
        Suministro, 
        TipoDePanel, 
        Unidades, 
        Precio, 
        TotalPrecio
    })

formularioSalida.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const Fabricante = formularioSalida['fabricante'];
    const Suministro = formularioSalida['suministro'];
    const TipoDePanel = formularioSalida['tipodepanel'];
    const Unidades = formularioSalida['unidades'];
    const Precio = formularioSalida['precio'];
    const TotalPrecio = formularioSalida['totalprecio'];

    await guardarSalidas(Fabricante.value, Suministro.value, TipoDePanel.value, Unidades.value, Precio.value, TotalPrecio.value);

    formularioSalida.reset();
})
