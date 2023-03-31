import { Level } from "../../helpers/imc"
import styles from './Griditem.module.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
type Props={
  item:Level
}

export const Griditem = ({item}:Props) => {
  return(
    <div className={styles.main} style={{backgroundColor: item.color}}>
      <div className={styles.gridIcon}>
        {/* {item.icon === 'up' && <img src={up} alt='' width="30"/>}
        {item.icon === 'down' && <img src={down} alt='' width="30"/>} */}
        <img src={item.icon === 'up' ? up : down} alt="" width='30' />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}