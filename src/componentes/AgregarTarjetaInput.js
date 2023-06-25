import { Button, IconButton, InputBase, Paper, alpha, makeStyles } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import ContextAPI from '../ContextAPI';


//-------------------------------------------
const AgregarTarjetaInput = ({type,setOpen,listId}) => {
    const [titulo,setTitle] = useState("");
    const clases = useStyles();
    const {addCard,addList}=useContext(ContextAPI)

    const handleAddCard = ()=>{
        if(type==="tarjeta"){
            addCard(titulo,listId);
        } else{
            addList(titulo);
        }
        setTitle("");
    }
    return (
        <>
            <Paper className={clases.tarjetaInp}>
                <InputBase className={clases.texto}
                value={titulo} 
                multiline
                //onBlur={()=>{setOpen(false)}}
                placeholder={
                    type === "tarjeta"
                        ? 'Ingrese el nombre de su tarea...'
                        : 'Ingrese el nombre de su lista...'
                }

                onChange={event=>setTitle(event.target.value)}
                inputProps={{className: clases.input}}
                />
            </Paper>
            <div className={clases.aceptar}>
                <Button className={clases.btnAceptar} onClick={handleAddCard}>
                    {type === "tarjeta"
                        ?"Agregar tarea"
                        :"Agregar lista"}
                    
                </Button>  
                <IconButton 
                    style={{color:"#fff", fontWeight:"bold",padding:"10px"}}
                    onClick={()=>setOpen(false)}
                    >
                    <ClearIcon/>
                </IconButton>
            </div>
        </>
    ) 
}

// S T Y L E S
const useStyles = makeStyles(theme => ({
    tarjetaInp: {
        paddingBottom: theme.spacing(4),
        color: "white",
        border: "2px solid #f281d8",
    },
    input:{
        padding:theme.spacing(0.5),
        textAlign: "center",
        color: "blue",
    },
    aceptar:{
        display: "flex",
        padding:theme.spacing(0.5),
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
            backgroundColor:alpha("#fff",0.45)
        
        }
    },
    texto:{
        width: "100%",
        height:"100%"
    }
}))
  // --------------------

export default AgregarTarjetaInput