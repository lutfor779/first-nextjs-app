import Head from 'next/head';
import { Fragment } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || 'Home'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
        <main className="min-h-screen container mx-auto">{children}</main>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
