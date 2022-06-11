import styles from './Paciente.module.css'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className={styles.ayuda}>
        <p>Nombre:{' '}<span>{nombre}</span></p>
        <p>Propietario:{' '}<span>{propietario}</span></p>
        <p>Correo:{' '}<span>{email}</span></p>
        <p>Fecha alta:{' '}<span>{fecha}</span></p>
        <p>sintomas:{' '}<span>{sintomas}</span></p>
        <div className={styles.divButton}>
          <button
            className={styles.boton}
            type='button'
            onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button 
            className={`${styles.boton}
            ${styles.botonRojo}`}
            type='button'
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente