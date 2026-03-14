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