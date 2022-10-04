import Head from 'next/head'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Matheus Freitas</title>
      <meta name="description" content="Portifolio de desenvolvimento" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <header className={styles.menu}>
      <div className={styles.mainContent+' '+styles.menuContent}>
        <h1>
<<<<<<< HEAD
            <Link href="#"><a>
              <Image src="/images/logo.png"
              width="50%"
              height="50%"
              alt="Matheus Freitas"/>
            </a></Link>
=======
            <Link href="#"><a>Matheus Freitas</a></Link>
>>>>>>> 7f93b8af009bf4b456a807684421b282742e5332
        </h1>
        <nav>
          <ul>
            <li><AnchorLink href="#intro">Inicio</AnchorLink></li>
<<<<<<< HEAD
            <li><AnchorLink href="#aboutMe">Sobre</AnchorLink></li>
=======
            <li><AnchorLink href="#aboutMe">Sobre mim</AnchorLink></li>
>>>>>>> 7f93b8af009bf4b456a807684421b282742e5332
            <li><AnchorLink href="#projects">Projetos</AnchorLink></li>
            <li><AnchorLink href="#contact">Contato</AnchorLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <div id="intro" className={styles.menuSpacing}></div>
    <section className={styles.intro+' '+styles.mainBg+' '+styles.section}>
      <div className={styles.mainContent+' '+styles.introContent}>
          <div className={styles.introTextContent}>
<<<<<<< HEAD
              <h2>Desenvolvedor Web FullStack</h2>
              <p>Apaixonado por desenvolvimento web 
                e sempre procurando aprimiorar os horizontes. Vamos trabalhar juntos para atingir os objetivos da sua empresa.</p>
=======
              <h2>Desenvolvedor Web</h2>
              <p>Texto sobre mim e sobre o que podem esperar de mim</p>
>>>>>>> 7f93b8af009bf4b456a807684421b282742e5332
          </div>
      </div>
    </section>
    <section id="aboutMe" className={styles.section+' '+styles.secBg}>
        <div className={styles.mainContent+' '+styles.aboutMeContent}>
            <h2>Sobre mim</h2>
            <p>Resumo da minha tragetoria até aqui</p>
        </div>
    </section>
    <section id="projects" className={styles.section}>
        <div className={styles.mainContent+' '+styles.gridContent}>
<<<<<<< HEAD
            <h2><center>Projetos</center></h2>
            <h3><center>Seja o primeiro a ter sua empresa aqui!</center></h3>
            <div className={styles.grid}>              
              <article>
                <h3></h3>
                <p></p>
=======
            <h2><center>Principais Projetos</center></h2>
            <div className={styles.grid}>
              <article>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
              </article>
              <article>
              <h3>Projeto 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
              </article>
              <article>
              <h3>Projeto 3</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae aliquid, totam libero ut sequi nobis, vitae magni quisquam ipsa laudantium cumque assumenda excepturi, laboriosam dolorum tenetur nisi perferendis a.</p>
>>>>>>> 7f93b8af009bf4b456a807684421b282742e5332
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
