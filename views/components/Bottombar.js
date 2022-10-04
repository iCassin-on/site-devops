let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
            <h1 class="title has-text-grey-darker">Sobre</h1>
            <h2 class="subtitle is-5 has-text-primary">A automação deve ser utilizada de forma inteligente, sendo criada por pessoas e sustentada por processos e pela cultura da empresa. Entretanto, as práticas de DevOps dependem significativamente da automação para garantir entregas frequentes e oportunas entre as plataformas.</h2>
            </div>
            <div class=>
            <a class="text-white-50 ms-3" href="https://twitter.com/Venturus_br" target="_blank"><i class="fab fa-twitter"></i></a>
            <a class="text-white-50 ms-3" href="https://www.instagram.com/venturus_br/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a class="text-white-50 ms-3" href="https://www.youtube.com/channel/UCDp0sndCI1e_n1N7JAMmMaw" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;