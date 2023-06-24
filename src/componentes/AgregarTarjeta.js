import React, { useState } from 'react'
import { Collapse,  makeStyles,Typography,Paper, alpha, } from '@material-ui/core'
import AgregarTarjetaInput from './AgregarTarjetaInput';

const AgregarTarjeta = ({type,listId}) => {
  const clases = useStyles();
  const [open,setOpen] = useState(true);
  return (
    <div className={clases.root}>
          <Collapse in={open}>
              {/* <h3>Agregar tarea</h3> */}
              <AgregarTarjetaInput type={type} setOpen={setOpen} listId={listId}/>
          </Collapse>
          
          <Collapse in={!open}>
              <Paper className={clases.agregarCardInput} onClick={()=>setOpen(true)}>
                <Typography>
                  {
                    type === "tarjeta"
                      ? "+ Agregar tarea"
                      : "+ Agregar lista"
                  }
                </Typography>
              </Paper>
          </Collapse>
    </div>
  )
}

// S T Y L E S
const useStyles = makeStyles(theme => ({
  root: {
      minWidth : "240px", //OJO----------------
      // padding: theme.spacing(1),
      margin:"16px 10px"
    },
  agregarCardInput:{
      width:"100% ",
      cursor:"pointer",
      padding : theme.spacing(0.8),
      background: "#f181d8",
      "&:hover":{
        backgroundColor:alpha("#fff",0.25)
      }
  }
}))

// ---------------------------

export default AgregarTarjeta