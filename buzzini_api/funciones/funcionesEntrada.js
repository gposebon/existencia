module.exports = {

    kilosRestar: (capacidadSilos, kilosEntrada) => {
        let  k = capacidadSilos - kilosEntrada;
        return k;
        },

    valEntradaSilo: (kilosOcupados, kilosEntrada) => {
        if (kilosOcupados < kilosEntrada){
            return false;
        };
        return true;
    },

    validar: (entrada)=>{
        if (entrada == null){
            return false
        };
        return true;
    }
}