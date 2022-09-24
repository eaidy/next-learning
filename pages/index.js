import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Homepage
        </h1>
        <p className={styles.text}>Cillum pariatur qui laborum aute qui eu aute ipsum velit laborum sit veniam. Deserunt id labore nisi sint mollit adipisicing sit nulla culpa qui in cupidatat. Ad velit ea irure dolore Lorem qui voluptate. Non laboris enim eiusmod amet deserunt et aliqua in ullamco. Quis culpa aute dolore occaecat duis dolor veniam dolore. Consectetur ea duis Lorem aute.</p>
        <p className={styles.text}>Cillum pariatur qui laborum aute qui eu aute ipsum velit laborum sit veniam. Deserunt id labore nisi sint mollit adipisicing sit nulla culpa qui in cupidatat. Ad velit ea irure dolore Lorem qui voluptate. Non laboris enim eiusmod amet deserunt et aliqua in ullamco. Quis culpa aute dolore occaecat duis dolor veniam dolore. Consectetur ea duis Lorem aute.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
