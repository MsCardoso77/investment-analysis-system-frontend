import ListarRelatórios from '../../components/ListarRelatórios'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Relatórios</h1>
      <ListarRelatórios />
    </div>
  )
}

export default Home