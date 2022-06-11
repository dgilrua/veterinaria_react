import styles from './Formulario.module.css'
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        } 

        setError(false)

        //objeto de paciente

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            setPacientes([...pacientes, objetoPaciente])   
            objetoPaciente.id = generarId()
        }

        //resetear form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className={styles.separacion}>
            <div className={styles.parrafo}>
                <h1>Seguimiento pacientes</h1>
                <p>Añade Pacientes y {''}<span className={`colorAzul`}>Administralos</span></p>
            </div>

            <form 

                className={styles.formulario}
                onSubmit={handleSubmit}
            >

                {error && <Error mensaje='Todos los campos son obligatorios'/>}

                <div>
                    <label  htmlFor="mascota">Nombre mascota</label>
                    <input className={styles.carechimbas} value={nombre} type="text" id='mascota' placeholder='
                    Nombre de la mascota' onChange={e => setNombre(e.target.value)}/>
                </div>

                <div>
                    <label  htmlFor="propietario">Nombre propietario</label>
                    <input className={styles.carechimbas} type="text" id='propietario' placeholder='
                    Nombre del propietario' value={propietario} onChange={e => setPropietario(e.target.value)}/>
                </div>

                <div>
                    <label  htmlFor="email">Email</label>
                    <input className={styles.carechimbas} type="email" id='email' placeholder='
                    Email contacto propietario' value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <label  htmlFor="alta">Alta</label>
                    <input className={styles.carechimbas} type="date" id='alta' value={fecha} onChange={e => setFecha(e.target.value)} />
                </div>

                <div>
                    <label  htmlFor="sintomas">Sintomas</label>
                    <textarea className={styles.carechimbas}  placeholder='Describe los sintomas de tu mascota' id="sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} />
                </div>

                <input type="submit" value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}className={styles.boton}/>
            </form>
        </div>
    )
}

export default Formulario   