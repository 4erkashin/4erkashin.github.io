import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link';

import Date from 'components/date';
import Layout, { siteTitle } from 'components/layout';

import type { Post } from 'lib/posts';
import { getSortedPostsData } from 'lib/posts';

interface Props {
  allPostsData: Post[]
}
const HomePage: NextPage<Props> = ({allPostsData}) => {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
        </section>
      </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default HomePage
