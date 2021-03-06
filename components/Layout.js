import Head from 'next/head';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Job Portal',
  description: 'Get Jobs from any part in the world',
  keywords: 'IT jobs|Mangerial jobs|Factory jobs',
};
