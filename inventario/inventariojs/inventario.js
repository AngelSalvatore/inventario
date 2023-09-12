 //Mostrar datos en pantalla de Entradas
 const verBDLasEntradas = document.getElementById('verBDEntradas');

 const obtenerEntradas = () => db.collection('Entradas').get();
 window.addEventListener('DOMContentLoaded', async (e) =>{
     const consultarEntradas = await obtenerEntradas();
     consultarEntradas.forEach(doc => {
         console.log(doc.data());

         const DatosEntrada = doc.data();

         verBDLasEntradas.innerHTML += `
             <div>
                 <table style="border: #d3d3d3 solid 3px">
                 <tr>
                     <td>Fabricante</td>
                     <td>Recibio</td>
                     <td>Tipo de panel</td>
                     <td>Unidades</td>
                     <td>Costo</td>
                     <td>Costo total</td>
                 </tr>
                 <tr>
                     <td>${DatosEntrada.Fabricante}</td>
                     <td>${DatosEntrada.Recicibio}</td>
                     <td>${DatosEntrada.TipoDePanel}</td>
                     <td>${DatosEntrada.Unidades}</td>
                     <td>${DatosEntrada.Costo}</td>
                     <td>${DatosEntrada.TotalCosto}</td>
                 </tr>
                 </table>
             </div>`
     });
 })

//Mostrar datos en pantalla de Salidas
const verBDLasSalidas = document.getElementById('verBDSalidas');

const obtenerSalidas = () => db.collection('Salidas').get();
window.addEventListener('DOMContentLoaded', async (e) =>{
    const consultarSalidas = await obtenerSalidas();
    consultarSalidas.forEach(doc => {
        console.log(doc.data());

        const DatosSalida = doc.data();

        verBDLasSalidas.innerHTML += `
            <div>
                <table style="border: #d3d3d3 solid 3px">
                <tr>
                    <td>Fabricante</td>
                    <td>Recibio</td>
                    <td>Tipo de panel</td>
                    <td>Unidades</td>
                    <td>Costo</td>
                    <td>Costo total</td>
                </tr>
                <tr>
                    <td>${DatosSalida.Fabricante}</td>
                    <td>${DatosSalida.Suministro}</td>
                    <td>${DatosSalida.TipoDePanel}</td>
                    <td>${DatosSalida.Unidades}</td>
                    <td>${DatosSalida.Precio}</td>
                    <td>${DatosSalida.TotalPrecio}</td>
                </tr>
                </table>
            </div>`
    });
})

//Mostrar datos en pantalla de Salidas
const verBDLasPerdidas = document.getElementById('verBDPerdidas');

const obtenerPerdidas = () => db.collection('Perdidas').get();
window.addEventListener('DOMContentLoaded', async (e) =>{
    const consultarPerdidas = await obtenerPerdidas();
    consultarPerdidas.forEach(doc => {
        console.log(doc.data());

        const DatosPerdidas = doc.data();

        verBDLasPerdidas.innerHTML += `
            <div>
                <table style="border: #d3d3d3 solid 3px">
                <tr>
                    <td>Fabricante</td>
                    <td>Recibio</td>
                    <td>Tipo de panel</td>
                    <td>Unidades</td>
                    <td>Costo</td>
                    <td>Costo total</td>
                </tr>
                <tr>
                    <td>${DatosPerdidas.Fabricante}</td>
                    <td>${DatosPerdidas.Notifico}</td>
                    <td>${DatosPerdidas.TipoDePanel}</td>
                    <td>${DatosPerdidas.Unidades}</td>
                    <td>${DatosPerdidas.Valor}</td>
                    <td>${DatosPerdidas.TotalValor}</td>
                </tr>
                </table>
            </div>`
    });
})
