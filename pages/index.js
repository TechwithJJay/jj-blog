import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Author } from '../components';
import Head from 'next/head';
import { getPosts } from '../services';

export default function Home({ posts }) {
  // console.table(posts[0].node);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Junaid Rao Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <Author author={posts[0].node.author} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
