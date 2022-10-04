// --------------------------------
//  Defini fontes de dados
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
            <section class="section">
            
                <h1> API significa “Application Programming Interface” ou, em português, Interface de Programação de Aplicativos. Esta interface de programação é um conjunto de padrões de programação que permitem a construção de aplicativos e a sua utilização.

                Na maioria das vezes uma API se comunica com diversos outros códigos, interligando várias funções em um aplicativo. Um exemplo de uma API muito utilizada é a API dos sistemas operacionais, que possuem diversos métodos, e se comunicam com muitos processos do sistema operacional. </h1>
                <h2> O conceito de API nada mais é do que uma forma de comunicação entre sistemas. Ou seja, elas permitem a integração entre dois sistemas, em que um deles fornece informações e serviços que podem ser utilizados pelo outro, sem a necessidade de algum dos sistemas conhecer detalhes de implementação do software.

                Em outras palavras, é uma forma bem segura pela qual dois aplicativos trocam dados. Assim, as APIs cuidam dessa comunicação em tempo real. </h2>
                <ul>
                    ${ posts.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;