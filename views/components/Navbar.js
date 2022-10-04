let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/site-devops/#/" style="width: 8em;">
                            <img src="/site-devops/views/components/logo.png">
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div class="navbar-end">
                            <div class="navbar-item">
                                
                                    
                                    <button class="botaoDark" onclick="AtivaDarkMode()">Dark mode</button>
                            </div>
                        </div>

                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="true">
                        <div class="navbar-start">
                            <a class="navbar-item" href="/site-devops/#/about">
                                About
                            </a>
                            <a class="navbar-item" href="/site-devops/#/secret">
                                Secret
                            </a>
                            <a class="navbar-item" href="/site-devops/#/">
                                Home
                            </a>
                        </div>                        
                    </div>
                </div>
            </nav>
            
        `
        return view
    },
    after_render: async () => { }

}


export default Navbar;