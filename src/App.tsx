import styles from './app.module.scss'
import Header from "@components/header/Header.tsx";
import Menu from "@components/menu/Menu.tsx";
import Lists from "@components/lists/Lists.tsx";

function App() {

    return (
        <>
            <Header/>
            <div className={styles['container']}>
                <Menu/>
                <Lists />
            </div>

        </>
    )
}

export default App
