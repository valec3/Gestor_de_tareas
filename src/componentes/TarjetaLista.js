import React from 'react'
import { Paper, makeStyles } from '@material-ui/core';

const TarjetaLista = ({tarjeta}) => {
  const clases = useStyles();
  // console.log(tarjeta)
  return (
    <Paper className={clases.tarjetaLista}>
        {tarjeta.titulo}
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