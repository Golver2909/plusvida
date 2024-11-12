class Turno {
    constructor(especialista,nombre_apellido,fecha, hora) {
        this.especialista = especialista;
        this.nombre_apellido = nombre_apellido;
        this.fecha = fecha;
        this.hora = hora;
    }

    confirmarReservacion(){
        Swal.fire({
            title:`Turno en ${this.especialista} reservado`,
            text:`Turno para ${this.nombre_apellido}. Fecha y Hora: ${this.fecha} - ${this.hora}`,
            icon:'success'
        })
    }
}

function reservarTurno() {
    const especialidad = document.getElementById('especialidad').value;
    const nombre_apellido = document.getElementById('nombre_apellido').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;


    const nuevoTurno = new Turno(especialidad,nombre_apellido,fecha,hora);

    nuevoTurno.confirmarReservacion();

}