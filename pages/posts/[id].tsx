import type {GetStaticPaths, NextPage, GetStaticProps} from 'next';
import type {ParsedUrlQuery} from 'querystring';

import Head from 'next/head';

import Layout from '../../components/layout';
import Date from '../../components/date';

import {getAllPostIds, getPostData, Post} from '../../lib/posts';

interface Props {
  postData: Post
}
const PostPage: NextPage<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
