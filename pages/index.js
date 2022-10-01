import Head from 'next/head'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
            <li><AnchorLink href="#intro">Intro</AnchorLink></li>
            <li><AnchorLink href="#aboutMe">About me</AnchorLink></li>
            <li><AnchorLink href="#projects">Projects</AnchorLink></li>
            <li><AnchorLink href="#contact">Contact</AnchorLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <div id="intro" className={styles.menuSpacing}></div>
    <section className={styles.intro+' '+styles.mainBg+' '+styles.section}>
      <div className={styles.mainContent+' '+styles.introContent}>
          <div className={styles.introTextContent}>
              <h2>Teste</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
          </div>
      </div>
    </section>
    <section id="aboutMe" className={styles.section+' '+styles.secBg}>
        <div className={styles.mainContent+' '+styles.aboutMeContent}>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
        </div>
    </section>
    <section id="projects" className={styles.section}>
        <div className={styles.mainContent+' '+styles.gridContent}>
            <h2>Projects</h2>
            <div className={styles.grid}>
              <article>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
              </article>
              <article>
              <h3>Projeto 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
              </article>
              <article>
              <h3>Projeto 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
              </article>
            </div>
        </div>
    </section>
    <section id="contact" className={styles.section+' '+styles.thirdBg}>
        <div className={styles.contactContent}>
            <h2>Precisa de um Desenvolvedor web? Vamos trabalhar juntos!</h2>
          <div className={styles.contactForm}>
            <fieldset>
              <div className={styles.formGroup}>
                  <label for="nome">Nome</label>
                  <input type="text" name="nome" id="nome"/>
                </div>
                <div className={styles.formGroup}>
                  <label for="sobrenome">Sobrenome</label>
                  <input type="text" name="sobrenome" id="sobrenome"/>
                </div>
                <div className={styles.formGroup}>
                  <label for="email">E-mail</label>
                  <input type="text" name="email" id="email"/>
                </div>
                <div className={styles.formGroup}>
                  <label for="telefone">Telefone</label>
                  <input type="text" name="telefone" id="telefone"/>
                </div>
                <div className={styles.formGroup+' '+styles.fullWidth}>
                  <label for="mensagem">Messagem</label>
                  <textarea nome="mensagem" id="mensagem"></textarea>
                </div>    
                <div className={styles.formGroup+' '+styles.fullWidth}>
                  <button type="submit">Enviar Mensagem</button>
                </div>                
            </fieldset>
          </div>
        </div>
    </section>
  </div>
  )
}
