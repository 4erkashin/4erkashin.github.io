import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'

import Layout from 'components/layout';
import HeroPost from 'components/hero-post';
import Container from 'components/container'
import MoreStories from 'components/more-stories'

import type { Post } from 'lib/posts';
import { getSortedPostsData } from 'lib/posts';

interface Props {
  allPostsData: Post[]
}
const HomePage: NextPage<Props> = ({allPostsData}) => {
  const heroPost = allPostsData[0]
  const morePosts = allPostsData.slice(1)
  return (
      <Layout>
        <Head>
          <title>Yuriy's blog</title>
        </Head>

        <Container>
          <section className="flex flex-col mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-wider md:pr-8">
              Yuriy's blog
            </h1>
          </section>

          {heroPost && (
              <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  id={heroPost.id}
                  excerpt={heroPost.excerpt}
              />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// TODO compare with version above
/*export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}*/

export default HomePage
