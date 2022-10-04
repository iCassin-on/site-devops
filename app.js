"use strict";

import Home         from './views/pages/Home.js'
import About        from './views/pages/About.js'
import Error404     from './views/pages/Error404.js'
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'

import Navbar       from './views/components/Navbar.js'
import Bottombar    from './views/components/Bottombar.js' 

import Utils        from './services/Utils.js'

// Lista de rotas suportadas. Qualquer URL diferente dessas rotas lançará um erro 404
const routes = {
    '/'             : Home
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
};



document.body.innerHTML = '<div id="header_container" style="border-bottom: groove black;"></div><div id="page_container" class="container pageEntry" ><article> Loading....</article></div><div id="footer_container"></div><button type="button"  id="top" onclick="backToTop()" style="bottom: 1em;float: right;position: fixed;right: 1em;display: block;font-size: 2em;">  <i class="fas fa-arrow-up"></i></button>';

// O código de rotas. Pega uma URL, verifica a lista de rotas suportadas e então renderiza a página de conteúdo correspondente.
const router = async () => {

    // Carramento lento dos elementos:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Renderiza o cabeçalho e o rodapé da página
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Obtem a URL analisada da barra de endereços
    let request = Utils.parseRequestURL()

    // Analise a URL e se tiver uma parte id, altere-a com a string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Obtem a página do nosso hash de rotas suportadas.
    // Se a URL analisada não estiver em nossa lista de rotas suportadas, seleciona a página 404 em vez disso
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}


// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
