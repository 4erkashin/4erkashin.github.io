import type {GetStaticPaths, NextPage} from 'next';
import Head from 'next/head';
import {getAllPostIds, getPostData, Post} from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import {GetStaticProps} from 'next';
import {ParsedUrlQuery} from 'querystring';

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
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
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
