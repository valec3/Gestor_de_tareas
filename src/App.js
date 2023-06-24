// import { alpha, makeStyles } from '@material-ui/core';
import './App.css';
import ListaTarea from './componentes/ListaTarea';
import AgregarTarjeta from './componentes/AgregarTarjeta';

import dataTest from "./mockdata.js"
import { useState } from 'react';
import ContextAPI from "./ContextAPI.js";

import uuid from 'react-uuid';

// Importar img BG
// import bgImg from "./img/bg.jpg";

function App() {
  const [data,setData] = useState(dataTest);
  // console.log(data.listas);

  // Funciones para actualizar valores de entrada por el usuario
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


const addCard=(titulo,listId)=>{
    const newCardId=uuid(); //ID unico
    const newCard={
      id:newCardId,
      titulo:titulo
    }

    // Agregar la nueva tarea a la lista
    const lista = data.listas[listId];
    lista.tarjetas=[...lista.tarjetas,newCard];
    // Actualizar datos 
    setData({
      ...data,
      listas:{
        ...data.listas,
        [listId]:lista
      }
    })
}
const addList=(titulo)=>{
  const newListId=uuid();
  setData({
    listasIds:[...data.listasIds,newListId],
    listas:{
      ...data.listas,
      [newListId]:{
        id:newListId,
        titulo:titulo,
        tarjetas:[]
      }
    }
  })
}


  return (
    <ContextAPI.Provider value = {{updateListTitle,addCard,addList}}>

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
