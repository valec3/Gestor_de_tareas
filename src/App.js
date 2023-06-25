// import { alpha, makeStyles } from '@material-ui/core';
import './App.css';
import ListaTarea from './componentes/ListaTarea';
import AgregarTarjeta from './componentes/AgregarTarjeta';

import mockData from "./mockdata.js"
import { useEffect, useState } from 'react';
import ContextAPI from "./ContextAPI.js";
import { useLocalStorage } from './useLocalStorage';

import uuid from 'react-uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import {StrictModeDroppable as Droppable} from "./helps/StrictModeDroppable"

function App() {
  const [data, setData] = useState(mockData);
  // localStorage.clear();

  // 
  const updateData = (newData) => {
    
    if (newData !== undefined && newData !== null) {
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData !== null && storedData !== undefined && storedData !== "undefined") {
      setData(JSON.parse(storedData));
    }
  }, []);
  
  
// 


  // Funciones para actualizar valores de entrada por el usuario
  const updateListTitle = (titulo,id)=>{
    const lista = data.listas[id];
    lista.titulo = titulo;
    updateData(
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
      updateData({
        ...data,
        listas:{
          ...data.listas,
          [listId]:lista
        }
      })
  }
  const addList=(titulo)=>{
    const newListId=uuid();
    updateData({
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
    

    // Sin destino
    if(!destination){
      return;
    }
    if (type === "lista"){
      const nuevaListaIds = data.listasIds;
      nuevaListaIds.splice(sourceIndex,1);
      nuevaListaIds.splice(desIndex,0,draggableId);
      updateData(data)
      return;
    }

    const sourceLista= data.listas[sourceDroppableId];
    const destinoLista = data.listas[desDroppableId];
    let dragginCard = sourceLista.tarjetas.filter((card) => card.id === draggableId)[0];

    // console.table(
    //   {
    //     dragginCard,
    //     sourceLista,
    //     destinoLista
    //   }
    // )

    if (sourceDroppableId === desDroppableId){
      sourceLista.tarjetas.splice(sourceIndex,1);
      destinoLista.tarjetas.splice(desIndex,0,dragginCard);
      updateData({
        ...data,
        listas:{
          ...data.listas,
          [sourceLista.id]:destinoLista,
        }
      })
    }
    else{
      sourceLista.tarjetas.splice(sourceIndex,1);
      destinoLista.tarjetas.splice(desIndex,0,dragginCard);
      updateData({
        ...data,
        listas:{
          ...data.listas,
          [sourceLista.id]:sourceLista,
          [destinoLista.id]:destinoLista
        }
      })
    }
  }


  return (
      <ContextAPI.Provider value = {{updateListTitle,addCard,addList}}>
          <div className="App">
              <h1>Zen Task</h1>
              <div className='App__main'  >
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='12345' type="lista" direction='horizontal'>
                        {
                          (provided) => (
                              <div  className='App__Listas' ref={provided.innerRef} {...provided.droppableProps}>
                                  {
                                    data.listasIds.map((listaId,index)=>{
                                      const lista = data.listas[listaId];
                                      return <ListaTarea lista={lista} key ={listaId} index={index}/>;
                                    })
                                  }
                                  {provided.placeholder}
                              </div>
                          )
                        }
                    </Droppable>
                </DragDropContext>
                <div>
                  <AgregarTarjeta type="lista"/>
                </div>
                </div>
          </div> 
      </ContextAPI.Provider>
    );
}



export default App;
