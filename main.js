$(document).ready(function(){
  // Limpa os dots existentes antes de inicializar o slider

  // Inicializa o Slick Slider
  $('.slider-1').slick({
      slidesToShow: 1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 5000, // Tempo entre transições automáticas
      dots: true, // Exibe os indicadores de navegação personalizados
      arrows: false, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'linear', // Suaviza a transição
      appendDots: $('btn-box'), // Usa o container personalizado para os dots
      customPaging: function(slider, i) {
          // Usa o texto dos spans como labels para os dots
          var labels = $(".btn-box span").map(function() {
              return $(this).text(); // Usa o texto dos spans
          }).get();
          return '<span class="xm-text split_text2559 f-medium">' + labels[i] + '</span>';
      },
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2 // Exibe 2 slides em telas maiores
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1 // Exibe 1 slide em telas menores
              }
          }
      ]
  });

  // Adiciona um evento de clique nos spans para navegar pelos slides
  $('.box-center span').on('click', function() {
      var index = $(this).index(); // Obtém o índice do span clicado
      $('.slider-2').slick('slickGoTo', index); // Navega para o slide correspondente
  });

});
