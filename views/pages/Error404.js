let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
                <h2> Erro 404 é a mensagem que aparece quando o visitante tenta acessar uma página que não existe, que está com a URL errada ou que foi removida do site. Se trata de uma mensagem automática enviada pelo servidor em que o site está hospedado, avisando que aquela página não foi encontrada. </h2>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;