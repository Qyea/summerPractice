import React from 'react'
import styles from './Home.module.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Gudea:ital,wght@0,400;0,700;1,400&family=Inter&family=Lato:ital,wght@0,300;0,400;1,300&display=swap');
</style>

const Home = () => {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <div className={styles.logo}>Programmer</div>
                    <div>
                        <ul className={styles.nav}>
                            <li>Profile</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Languages</li>
                            <li>Hobbies</li>
                            <li>Contacts</li>
                            <li>CV</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.name}>
                    Anastasia Krech
                    </div>
                    <div className={styles.about}>
                    Allow me to introduce myself
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Home