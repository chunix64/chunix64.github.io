import NavigationBar from '@/layouts/components/NavigationBar'
import { Outlet } from 'react-router-dom'
import styles from './index.module.css'

export default function DefaultLayout() {
  return (
    <>
      <header className={styles.header}>
        <NavigationBar />
      </header>

      <div id="root">
        <Outlet />
      </div>

      <footer>
      </footer>
    </>
  )
}
