
$( document ).ready(function() {
  

    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        dots:true
      });
      $('.vitrine article > ul').slick({
        infinite: true,
        slidesToShow: 5
      });
      $('.icons-1 article >ul').slick({
        infinite: true,
        slidesToShow: 5
      });
      $('.icons-2 article >ul').slick({
        infinite: true,
        slidesToShow: 5
      });
  });