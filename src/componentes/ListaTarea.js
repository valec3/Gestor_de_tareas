import React from 'react'  //
import {Paper, CssBaseline} from "@material-ui/core"; //Mas responsivo 
import ListaTitulo from './ListaTitulo';
import TarjetaLista from './TarjetaLista';
import AgregarTarjeta from './AgregarTarjeta';

import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import {StrictModeDroppable as Droppable} from "../helps/StrictModeDroppable"


const ListaTarea = ({lista,index}) => {
    const clases = useStyles();
    return (
        <Draggable draggableId={lista.id} index={index} >
            {
                (provided) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                    >
                        <Paper className={clases.root}>
                            <CssBaseline/>   
                            <ListaTitulo titulo={lista.titulo} id={lista.id}/>
                            <Droppable droppableId={lista.id} >
                                {
                                    (provided)=>(
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {
                                                lista.tarjetas.map((tarjeta,index) => 
                                                (<TarjetaLista tarjeta={tarjeta} key={tarjeta.id} index={index} />) )
                                            }

                                            {provided.placeholder}
                                        </div>
                                    )
                                }
                            </Droppable>
                            <AgregarTarjeta type="tarjeta" listId={lista.id}/>
                        </Paper>
                    </div>
                )
            }
        </Draggable>
    )
}

const useStyles = makeStyles(theme => ({
    root:{
        minWidth : "300px",
        fontWeight: "bold",
        borderRadius: '8px',
        boxShadow: '10px 10px 20px -1px rgba(179,173,179,1)',
        padding: '16px',
        margin:theme.spacing(2),
        backgroundColor: '#f181d8', // rosa 
        color: '#000', // Texto blanco
    }
}))


export default ListaTarea