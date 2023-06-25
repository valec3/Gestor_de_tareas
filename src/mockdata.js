const mockData = {
    listas:{
        "01list":{
            id:"01list",
            titulo:'En progreso',
            tarjetas: [
                {
                    id:"01tarjeta",
                    titulo:"Revisar emails"
                },
                {
                    id:"02tarjeta",
                    titulo:"Estudiar para el examen"
                },
                {
                    id:"03tarjeta",
                    titulo:"Recoger pedidos"
                }
            ]
        },
        "02list":{
            id:"02list",
            titulo:"Terminado",
            tarjetas: []
        }
    },
    listasIds: ["01list","02list"]
}
export default mockData