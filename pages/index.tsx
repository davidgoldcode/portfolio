import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/index.module.scss'
import { Header } from 'components/Header';
import { HomePage } from 'components/HomePage';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Contact } from 'components/Contact';
import { Skills } from 'components/Skills';

export default function Home() {

  return (
    <div className={styles.website_wrapper} >


      <main>
        <Header />
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* <footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer> */}
    </div>
  );
}
