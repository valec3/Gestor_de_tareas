import React from 'react'
import { IconButton, Paper, alpha, makeStyles } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const TarjetaLista = ({tarjeta,index,lista,updateData,data}) => {
  const clases = useStyles();
  const idCard = tarjeta.id;
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
                <IconButton
                    style={{color:"rgb(243 8 73)", fontSize:"medium",padding:"10px","&:hover":{
                      backgroundColor:alpha("#485",0.25)
                    }}}
                    onClick={()=>{
                      lista.tarjetas.splice(index,1)
                      updateData({
                        ...data,
                        listas:{
                          ...data.listas,
                        }
                      })
                    }}
                    
                    >
                  <HighlightOffIcon/>
                </IconButton>

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
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding: theme.spacing(1,2),
      margin: theme.spacing(1),
      Width:"300px",
      maxWidth:"300px",
      overflow:"auto",
  }
}))
// --------------------


export default TarjetaLista