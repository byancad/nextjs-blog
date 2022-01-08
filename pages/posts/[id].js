import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1 className={utilStyles.headingXL}>{postData.id}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>

      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

//export async function getStaticProps({ params }) {
//  const postData = getPostData(params.id);
// return {
// props: {
/// postData
//}
//};
///}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  console.log(getStaticProps);
  return {
    props: {
      postData
    }
  };

  // ...
}
