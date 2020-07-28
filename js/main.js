(function(win, doc) {
    'Use strict';

    $(document).ready(function() {
        /*PARALLAX */
        $('.parallax').parallax();
        /*SIDENAV */
        $(".button-collapse").sideNav();
        /*SLIDER */
        $('.slider').slider({
            indicators: false,
            interval: 5000
        });
        /*CARROSEL*/
        $('.carousel').carousel();
        /*FUNCTION NEXT CARROSEL*/
        $('.next').click(function() {
            $('.carousel').carousel('next')
        });
        /*FUNCTION PREV CARROSEL*/
        $('.prev').click(function() {
            $('.carousel').carousel('prev')
        });

        /*MATRIAL BOX*/
        $('.materialboxed').materialbox();
    });

    //Função para mudar a cor da nav, de tranparente para azul
    $(document).ready(function() {
        $(window).scroll(function() {
            changeColor();
        })

        //Quando carregar o site.
        changeColor();
    });

    function changeColor(){
        if ($(window).scrollTop() > 10) {
            $('.menu').addClass('grey lighten-1');
        } else {
            $('.menu').removeClass('grey lighten-1');
        }
    }

})(window, document);