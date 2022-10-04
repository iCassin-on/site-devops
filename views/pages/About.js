let About = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> DevOps é uma cultura que encoraja um desenvolvimento de software onde o principal objetivo é aprimorar a capacidade de realizar entregas de forma rápida, segura e com qualidade;

                Para alcançar esses objetivos, os times de desenvolvimento e de operações (Dev + Ops) trabalham juntos em cada fase da criação de aplicativos e softwares;
                
                Tem como característica principal a automação e o monitoramento de todas as fases (desde o desenvolvimento, passando pela integração, testes, deploys em produção e até o gerenciamento da infraestrutura);
                
                O DevOps não veio para substituir o Agile e sim para complementá-lo. Ciclos de entrega curtos, com a proximidade com o usuário e escopo flexível, permitem que se entregue valor para o usuários o mais rápido possível. Este continua sendo o objetivo do desenvolvimento de software;
                
                Venturus Software Development Tools (VSDT)
                Trata-se do conjunto de ferramentas de suporte ao desenvolvimento de software utilizado no Venturus. É constituído em sua maioria por ferramentas livres (open source), de maturidade e qualidade comprovadas, líderes de mercado em suas categorias, integradas para propiciar o desenvolvimento eficiente de software de qualidade. </h1>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;