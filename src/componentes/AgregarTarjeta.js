import React, { useState } from 'react'
import { Collapse,  makeStyles,Typography,Paper, fade, } from '@material-ui/core'
import AgregarTarjetaInput from './AgregarTarjetaInput';

const AgregarTarjeta = () => {
  const clases = useStyles();
  const [open,setOpen] = useState(true);
  return (
    <div className={clases.root}>
          <Collapse in={open}>
              <h3>Agregar tarea</h3>
              <AgregarTarjetaInput/>
          </Collapse>
          
          <Collapse in={!open}>
              <Paper className={clases.agregarCardInput}>
                <Typography>
                  + Agregar tarjeta
                </Typography>
              </Paper>
          </Collapse>
    </div>
  )
}

// S T Y L E S
const useStyles = makeStyles(theme => ({
  root: {
      padding: theme.spacing(1),
    },
  agregarCardInput:{
      padding : theme.spacing(1.4,1),
      background: "#f181d8",
      "&:hover":{
        backgroundColor:fade("#fff",0.25)
      }
  }
}))

// ---------------------------

export default AgregarTarjeta