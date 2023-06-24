import React, { useContext, useState } from 'react'
import { InputBase, Typography ,alpha,makeStyles} from '@material-ui/core' ; 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ContextAPI from '../ContextAPI';

const ListaTitulo = ({titulo, id}) => {
    const clases = useStyles();
    const [open,setOpen] = useState(false);
    const [nuevoTitulo,setTitulo] = useState(titulo);
    const {updateListTitle} = useContext(ContextAPI)
    const handlerBlur = () => {
        updateListTitle(nuevoTitulo,id);
        setOpen(false);

    }
    
    console.log(nuevoTitulo)
    return (
        <>
            {
                open
                    ?( <div className={clases.titulo}>
                        <InputBase
                            value={nuevoTitulo}
                            onChange={e=>setTitulo(e.target.value)}
                            autoFocus
                            onBlur={handlerBlur}
                            fullWidth 
                            inputProps={{className: clases.inputTitulo}}
                        />
                    </div>)
                    :( <div className={clases.titulo}>
                        <Typography className={clases.tituloTexto} onClick={()=>setOpen(true)}>
                            {titulo === "" ?" Sin Asignar" : titulo}
                        </Typography>
                        <MoreHorizIcon/>
                    </div>)
                    }
        </>
    )
}


const useStyles = makeStyles(theme => ({
    titulo: {
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(1.5),
    },
    tituloTexto:{
        fontWeight: "bold",
        fontSize: "1rem",
    },
    inputTitulo:{
        fontWeight: "bold",
        fontSize: "0.7rem",
        padding: theme.spacing(0.5,1),
        margin: theme.spacing(0.5),
        "&:focus":{
            background: alpha("#fff",0.45),
            border:"solid 1.5px #ff0f87",
            borderRadius: "5px"
        }
    }
}))


export default ListaTitulo