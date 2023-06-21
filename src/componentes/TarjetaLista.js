import React from 'react'
import { Paper, makeStyles } from '@material-ui/core';

const TarjetaLista = () => {
  const clases = useStyles();
  return (
    <Paper className={clases.tarjetaLista}>
        Tarjeta
    </Paper>
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