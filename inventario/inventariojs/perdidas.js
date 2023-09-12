//Asignar en cariable el formulario
const formularioPerdida = document.getElementById('formulario-perdidas');

//Guardar tarea en una constante
const GuardaLasPerdidas = (Fabricante, Notifico, TipoDePanel, Unidades, Valor, TotalValor) =>
    //asincrono en cuanto se envie deolvera algo
    db.collection('Perdidas').doc().set({
        Fabricante,
        Notifico,
        TipoDePanel,
        Unidades,
        Valor,
        TotalValor
    })

//escuchar el envio y enviar una funcion al escucharlo
formularioPerdida.addEventListener('submit', async (e)=> {
    //no refrescar pagina
    e.preventDefault();
    //asignar constantes a los datos ingresados por teclado
    const Fabricante = formularioPerdida['fabricante'];
    const Notifico = formularioPerdida['notifico'];
    const TipoDePanel = formularioPerdida['tipodepanel'];
    const Unidades = formularioPerdida['unidades'];
    const Valor = formularioPerdida['valor'];
    const TotalValor = formularioPerdida['valortotal'];
    
    //una vez se guarde lo receteamos
    await GuardaLasPerdidas(Fabricante.value, Notifico.value, TipoDePanel.value, Unidades.value, Valor.value, TotalValor.value);
    formularioPerdida.reset();
    Fabricante.focus();
})