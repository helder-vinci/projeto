
$( document ).ready(function() {
  

    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        dots:true
      });
      $('.vitrine article > ul').slick({
        infinite: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              
              infinite: true,
              
            }
            
          },{
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              
              infinite: true,
              
            }},{
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                
                infinite: true,
                
              }}]
      });
      $('.icons-1 article >ul').slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 3,
              
              infinite: true,
              
            }
          },
          {
            breakpoint: 1220,
            settings: {
              slidesToShow: 2,
              
              infinite: true,
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
             
              infinite: true,
              
            }
          }]
      });
      $('.icons-2 article >ul').slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 3,
              
              infinite: true,
              
            }
          },
          {
            breakpoint: 1220,
            settings: {
              slidesToShow: 2,
              
              infinite: true,
              
            }
          },{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              
              infinite: true,
              
            }
          }]
      });
      $('.fecha-Modal').on("click",function(){
        $('.modal-bg').hide();
        $('.modal').hide();
      })
  });