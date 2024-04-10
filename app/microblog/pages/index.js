import Layout, { siteTitle } from "@/components/Layout";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import { getPostsDate } from "@/lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsDate();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>
          Next.jsを勉強中です/SES企業で働いています/年内にはWEB系企業に転職します
        </p>
      </section>

      <section>
        <h2 className={utilStyle.headingMd}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
