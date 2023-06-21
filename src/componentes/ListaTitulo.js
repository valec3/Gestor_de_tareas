import React from 'react'
import { Typography ,makeStyles} from '@material-ui/core' ; 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ListaTitulo = () => {
    const clases = useStyles();
    return (
        <div className={clases.titulo}>
            <Typography className={clases.tituloTexto}>
                Pendientes
            </Typography>
            <MoreHorizIcon/>
        </div>
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

    }
}))


export default ListaTitulo