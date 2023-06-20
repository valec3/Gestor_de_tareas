import React from 'react'  //
import {Paper, CssBaseline} from "@material-ui/core"; //Mas responsivo 
import ListaTitulo from './ListaTitulo';
import TarjetaTrello from './TarjetaTrello';
import AgregarTarjeta from './AgregarTarjeta';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        width : "300px",
        fontWeight: "bold",
        color: "blue"
    }
}))

const ListaTrello = () => {
    const clases = useStyles();
    return (

        <Paper className={clases.root}>
            <CssBaseline/>  
            <ListaTitulo/>
            <TarjetaTrello/>
            <TarjetaTrello/>
            <TarjetaTrello/>
            <TarjetaTrello/>
            <AgregarTarjeta/>
        </Paper>
    )
}

export default ListaTrello