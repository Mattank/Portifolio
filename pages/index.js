import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Mattank Developer</title>
      <meta name="description" content="Portifolio de desenvolvimento" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.menu}>
      <div className={styles.mainContent+' '+styles.menuContent}>
        <h1>
            <Link href="#"><a>Mattank</a></Link>
        </h1>
        <nav>
          <ul>
            <li><Link href="#"><a>Intro</a></Link></li>
            <li><Link href="#"><a>Projects</a></Link></li>
            <li><Link href="#"><a>About me</a></Link></li>
            <li><Link href="#"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className={styles.menuSpacing}></div>
    <section className={styles.intro+' '+styles.mainBg+' '+styles.section}>
      <div className={styles.mainContent+' '+styles.introContent}>
          <div className={styles.introTextContent}>
              <h2>Teste</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
          </div>
      </div>
    </section>
    <section className={styles.section}>
        <div className={styles.mainContent}>
            <h2>Teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
        </div>
    </section>
  </div>
  )
}
