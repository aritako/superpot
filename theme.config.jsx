import Head from 'next/head';

export default {
    primaryHue: 102,
    logo:    
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <span style={{ color: '#7ED957', fontFamily: "'Krona One', sans-serif" }}>
        SuperPot
      </span>
    </> ,
    project: {
      link: 'https://github.com/aritako/superpot'
    },
    docsRepositoryBase: "https://github.com/aritako/superpot/tree/main/",
    useNextSeoProps(){
      return{
        titleTemplate: '%s | SuperPot',
      }
    }
}