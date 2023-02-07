import React from 'react'
import Datepicker from '../datepicker/datepicker'
import styles from '../../styles/navbar.module.scss'
const Navbar = ({startDate, setStartDate,handleChange}) => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.picker}>
         
          
          <Datepicker startDate={startDate} setStartDate={setStartDate} handleChange={handleChange}/>
        </div>

        <h1>Quick History</h1>
      </nav>
  )
}

export default Navbar