function scrollFixo() {
   const menu = document.querySelector(".js-scrollFixo");
   let ultimoScroll = 0;

   function esconderScroll() {
      const scrollAtual = window.scrollY;
      const alturaMenu = menu.offsetHeight;

      const passouDoMenu = scrollAtual > alturaMenu;
      const estaSubindo = scrollAtual < ultimoScroll;
      const scrollSubindo = passouDoMenu && estaSubindo;

      if (scrollSubindo) {
         menu.classList.add("menuScrollAtivo");
         document.body.style.paddingTop = alturaMenu + "px";
      } else {
         menu.classList.remove("menuScrollAtivo");
         document.body.style.paddingTop = 0;
      }

      ultimoScroll = scrollAtual;
   }

   window.addEventListener("scroll", esconderScroll);
}

scrollFixo()

function navegacaoMenu() {
   const sessoes = document.querySelectorAll(".js-sessoes");
   const navegacaoMenu = document.querySelectorAll(".menu li a")

   if (navegacaoMenu.length) {
      navegacaoMenu[0].classList.add("menuLinkAtivo");

      function menuAtivo() {
         const posicaoDoScroll = window.scrollY;
         const tamanhoHeader = document.querySelector("header").offsetHeight;
         let idSessaoAtiva = "";

         sessoes.forEach((item) => {
            const topoSessao = item.offsetTop - tamanhoHeader;
            const fimDaSessao = item.offsetHeight + topoSessao;

            if (posicaoDoScroll >= topoSessao && posicaoDoScroll < fimDaSessao) {
               idSessaoAtiva = item.getAttribute("id");
            }
         })

         navegacaoMenu.forEach((linksDoMenu) => {
            linksDoMenu.classList.remove("menuLinkAtivo");

            if (linksDoMenu.getAttribute("href") === `#${idSessaoAtiva}`) {
               linksDoMenu.classList.add("menuLinkAtivo");
            }
         })
      }
      window.addEventListener("scroll", menuAtivo);
   }
}

navegacaoMenu();