import styles from './Header.module.css'

const Header = () => {
    return(
        <div className='contenedor'>
            <h2 className={styles.heading}>Seguimiento Pacientes <span className={styles.span}>Veterinaria</span></h2>
        </div>
    )
}

export default Header

