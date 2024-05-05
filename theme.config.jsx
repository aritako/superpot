export default {
    logo: <span>Super Pot</span>,
    project: {
      link: 'https://github.com/aritako/superpot'
    },
    docsRepositoryBase: "https://github.com/aritako/superpot/tree/main/pages",
    useNextSeoProps(){
      return{
        titleTemplate: '%s | SuperPot',
      }
    }
}