import styles from './ListadoPacientes.module.css'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div>
            {pacientes && pacientes.length ? 
            (
                <> 
                <div className={styles.separacion}>
                    <h2>Listado pacientes</h2>
                    <p>Administra tus {''}<span className={`colorAzul`}>Pacientes y citas</span></p>
                </div>
                <div className={styles.principal}>
                    {
                        pacientes.map(paciente => (
                            <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                        ))
                    }
                </div>
                </>
            ) : (
                <div className={styles.separacion}>
                    <h2>No hay pacientes</h2>
                    <p>Comienza agregando pacientes {''}<span className={`colorAzul`}>y apareceran en este lugar</span></p>
                </div>
            )}
        </div> 
    )
  }
  
export default ListadoPacientes