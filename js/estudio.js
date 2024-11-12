class Estudio {
    constructor(estudio,lugar,fecha,detalles) {
        this.estudio = estudio;
        this.lugar = lugar;
        this.fecha = fecha;
        this.detalles = detalles;
    }

    confirmarEstudio(){
        Swal.fire({
            title:`${this.estudio} documentado`,
            text:`${this.detalles}`,
            icon:'success'
        })
    }
}

function crearEstudio(){
    const estudio = document.getElementById('estudio').value;
    const lugar = document.getElementById('lugar').value;
    const fecha = document.getElementById('fecha').value;
    const detalles = document.getElementById('detalles').value;

    const nuevoEstudio = new Estudio(estudio,lugar,fecha,detalles);

    nuevoEstudio.confirmarEstudio();

    estudio = '';
    lugar = '';
    fecha= '';
    detalles = '';
}