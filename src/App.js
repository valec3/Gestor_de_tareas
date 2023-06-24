// import { alpha, makeStyles } from '@material-ui/core';
import './App.css';
import ListaTarea from './componentes/ListaTarea';
import AgregarTarjeta from './componentes/AgregarTarjeta';

import dataTest from "./mockdata.js"
import { useState } from 'react';
import ContextAPI from "./ContextAPI.js";

// Importar img BG
// import bgImg from "./img/bg.jpg";

function App() {
  const [data,setData] = useState(dataTest);
  // console.log(data.listas);

  const updateListTitle = (titulo,id)=>{
    const lista = data.listas[id];
    lista.titulo = titulo;
    setData(
      {
        ...data,listas:{
          ...data.listas,
          [id]:lista 
        }
      }
    )
  }

  return (
    <ContextAPI.Provider value = {{updateListTitle}}>

    <div className="App">
        <h1>Zen Task</h1>
        <div>
            {
              data.listasIds.map(listaId=>{
                const lista = data.listas[listaId];
                return <ListaTarea lista={lista} key ={listaId} />;
              })
            }
            {/* <ListaTarea/>
            <ListaTarea/>
            <ListaTarea/>
            <ListaTarea/> */}
            <AgregarTarjeta type="lista"/>
        </div>
    </div>
    </ContextAPI.Provider>
  );
}



export default App;
