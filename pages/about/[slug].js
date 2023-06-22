import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Welcome to our blog! This blog aims to provide insightful articles on various topics.</p>
      <p>Our team of writers is passionate about sharing knowledge and engaging with our readers.</p>
      <p>Feel free to explore the articles and leave your comments!</p>
    </div>
  );
};

export default About;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getAbout(params.slug);
  return {
    props: { about: data },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getAbout();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

