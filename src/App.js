// import { alpha, makeStyles } from '@material-ui/core';
import './App.css';
import ListaTarea from './componentes/ListaTarea';
import AgregarTarjeta from './componentes/AgregarTarjeta';

import mockData from "./mockdata.js"
import { useState } from 'react';
import ContextAPI from "./ContextAPI.js";

import uuid from 'react-uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import {StrictModeDroppable as Droppable} from "./helps/StrictModeDroppable"

// Importar img BG
// import bgImg from "./img/bg.jpg";

// 


function App() {
  const [data,setData] = useState(mockData);
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

  const onDragEnd=(result)=>{
    const {destination, destination:{droppableId: desDroppableId,index:desIndex} ,
        source, source:{droppableId: sourceDroppableId,index: sourceIndex},
        draggableId,type}
        =result;
    console.table([{
      sourceDroppableId,
      desDroppableId,
      draggableId
    },
    {
      type,
      sourceIndex,
      desIndex
    }])

    // Sin destino
    if(!destination){
      return;
    }

  }


  return (
      <ContextAPI.Provider value = {{updateListTitle,addCard,addList}}>
          <div className="App">
              <h1>Zen Task</h1>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='12345'  direction='horizontal'>
                        {
                          (provided) => (
                              <div className='App__main'  ref={provided.innerRef} {...provided.droppableProps}>
                                  {
                                    data.listasIds.map((listaId,index)=>{
                                      const lista = data.listas[listaId];
                                      return <ListaTarea lista={lista} key ={listaId} index={index}/>;
                                    })
                                  }
                                  <div>
                                    <AgregarTarjeta type="lista"/>
                                    {provided.placeholder}

                                  </div>
                              </div>
                          )
                        }
                    </Droppable>
                </DragDropContext>
          </div> 
      </ContextAPI.Provider>
    );
}



export default App;
