import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
          <a href="https://www.instagram.com/farbodshamloo.js">farbodshamloo.js</a> | React.js Full Course
        </p>
    </div>
  )
}

export default Header