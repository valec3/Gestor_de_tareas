import React from 'react'
import { Paper, makeStyles } from '@material-ui/core';

import { Draggable } from 'react-beautiful-dnd';

const TarjetaLista = ({tarjeta,index}) => {
  const clases = useStyles();
  return (
    <Draggable draggableId={tarjeta.id} index={index}>
      {
        (provided)=>(
          <div 
            ref={provided.innerRef} 
            {...provided.dragHandleProps} 
            {...provided.draggableProps}
          >
            <Paper className={clases.tarjetaLista}>
                <p>
                  {tarjeta.titulo}
                </p>
            </Paper>
          </div>
        )
      }
    </Draggable>
  )
}



// S T Y L E S
const useStyles = makeStyles(theme => ({
  tarjetaLista: {
      padding: theme.spacing(1,2),
      margin: theme.spacing(1),
      Width:"300px",
      maxWidth:"300px",
      overflow:"auto",
  }
}))
// --------------------


export default TarjetaLista