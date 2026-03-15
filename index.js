function navegacaoMenu() {
   const navegacao = document.querySelectorAll('.menu li a');

   if (navegacao.length) {
      navegacao[0].classList.add("ativo");

      function navegacaoAtiva(event) {
         navegacao.forEach((sessao) => {
            sessao.classList.remove("ativo");
         })
         event.currentTarget.classList.add("ativo");
      }
      
      navegacao.forEach((item) => {
         item.addEventListener("click", navegacaoAtiva);
      });
   }
}

navegacaoMenu();

function scrollFixo() {
   const menu = document.querySelector(".js-scrollFixo");
   let ultimoScroll = 0;

   function esconderScroll() {
      const scrollAtual = window.scrollY;
      const alturaMenu = menu.offsetHeight;
      
      const scrollDescendo = scrollAtual > alturaMenu && scrollAtual < ultimoScroll;

      if(scrollDescendo) {
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