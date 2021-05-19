import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reishiki</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://srgprotorei.vercel.app">SRG!</a>
        </h1>

        <p className={styles.description}>
          We sincerely hope you enjoy your stay
        </p>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information on our team.</p>
          </a>

          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about our projects in an interactive course with style(?)!</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover live examples of our ongoing and past projects.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.card}
          >
            <h3>Join &rarr;</h3>
            <p>
              Join us on our next project.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
