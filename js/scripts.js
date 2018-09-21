$(function(){
    ('.main_slider').each(function(){
        var $li = $('li', this);
        var $prev = $('.prev', this);
        var $next = $('.next', this);

        $li.first().addClass('active');
    });

});