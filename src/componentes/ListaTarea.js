import React from 'react'  //
import {Paper, CssBaseline} from "@material-ui/core"; //Mas responsivo 
import ListaTitulo from './ListaTitulo';
import TarjetaLista from './TarjetaLista';
import AgregarTarjeta from './AgregarTarjeta';

import { makeStyles } from '@material-ui/core/styles';


const ListaTrello = ({lista}) => {
    const clases = useStyles();
    return (

        <Paper className={clases.root}>
            <CssBaseline/>  
            <ListaTitulo titulo={lista.titulo} id={lista.id}/>
                {
                    lista.tarjetas.map(tarj => <TarjetaLista tarjeta={tarj} key={tarj.id} /> )
                }
            
            {/* <TarjetaLista/>
            <TarjetaLista/> */}

            <AgregarTarjeta type="tarjeta" listId={lista.id}/>
        </Paper>
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


export default ListaTrello