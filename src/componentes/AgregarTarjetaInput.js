import { Button, IconButton, InputBase, Paper, fade, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
//-------------------------------------------
const AgregarTarjetaInput = () => {
    const [titulo,setTitle] = useState("");
    const clases = useStyles();
    return (
        <>
            <Paper className={clases.tarjetaInp}>
                <InputBase 
                value={titulo} 
                multiline
                placeholder='Ingrese el nombre de su tarea'
                onChange={event=>setTitle(event.target.value)}
                inputProps={{className: clases.input}}
                />
            </Paper>
            <div className={clases.aceptar}>
                <Button className={clases.btnAceptar}>Agregar tarjeta</Button>  
                <IconButton style={{color:"#fff", fontWeight:"bold",padding:"10px"}}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </>
    ) 
}

// S T Y L E S
const useStyles = makeStyles(theme => ({
    tarjetaInp: {
        paddingBottom:theme.spacing(4),
        color: "white",
        border: "2px solid #f281d8",
    },
    input:{
        textAlign: "center",
        color: "blue"
    },
    aceptar:{
        display: "flex",
        paddin:theme.spacing(0.5),
        flexDirection: "flex-start",
    },
    btnAceptar:{
        fontSize: "10px",
        background: "#d927b5",
        margin:theme.spacing(1),
        color:"#fff",
        fontWeight: "bold",
        "&:hover":{
            color: "#000",
            backgroundColor:fade("#fff",0.45)
        
        }
    }
}))
  // --------------------

export default AgregarTarjetaInput