import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState ('');
  const [linea2, setLinea2] = useState ('');
  const [imagen, setImagen] = useState ('');

  const onChangeLinea1 = function (evento) {
    setLinea1 (evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2 (evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen (evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#fotos")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'fotointervenida.png';
    link.href = img;
    link.click();
  
});


  }
  
  return (
    <div className="App">
      
<h1>GENERADOR DE POSTALES</h1>

  <select onChange={onChangeImagen}> 
    <option value="chico azul">Chico azul</option> <br/>
    <option value="cabina">Cabina</option>
    <option value="publico">Publico</option>
    <option value="beso">Beso</option>
  </select> <br/>

<input onChange= {onChangeLinea1} type='text' placeholder='Escribí algo'></input> <br/>
<input onChange= {onChangeLinea2} type='text' placeholder='Esto aparece segundo'></input> <br/>
<button onClick={onClickExportar}>Exportar</button>

<div className='fotos' id='fotos'>
  <span>{linea1}</span> <br/> 
  <span>{linea2}</span> <br/> 
  <img src={"img/" + imagen + ".jpg" }/>
</div>




    </div>
  );
}

export default App;
