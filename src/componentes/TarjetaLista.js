import React from 'react'
import { Paper, makeStyles } from '@material-ui/core';

import { Draggable } from 'react-beautiful-dnd';

const TarjetaLista = ({tarjeta,index}) => {
  const clases = useStyles();
  console.log(tarjeta.id,index)
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
                {tarjeta.titulo}
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
  }
}))
// --------------------


export default TarjetaLista