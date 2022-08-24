import type {GetStaticPaths, NextPage, GetStaticProps} from 'next';
import type {ParsedUrlQuery} from 'querystring';

import Head from 'next/head';

import Layout from 'components/layout';
import Container from 'components/container';
import PostHeader from 'components/post-header';
import PostBody from 'components/post-body';

import {getAllPostIds, getPostData, Post} from 'lib/posts';
import CoverImage from '../../components/cover-image';

interface Props {
  postData: Post
}
const PostPage: NextPage<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:image" content={postData.ogImage} />
      </Head>
      <article>
        <div className="mb-4">
          <CoverImage title={postData.title} src={postData.coverImage} />
        </div>

        <Container>
          <PostHeader
              title={postData.title}
              date={postData.date}
          />
          <PostBody content={postData.contentHtml} />
        </Container>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface QueryParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps<Props, QueryParams> = async ({ params }) => {
  const postData = await getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
}

export default PostPage;

// TODO handle this code from next.js example https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/posts/%5Bslug%5D.tsx
/*
type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
*/
