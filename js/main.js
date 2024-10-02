$(function() {
    jQuery(".expand").click(function () {
        jQuery('.options').removeClass('active');
        jQuery(this).next('.options').slideToggle('active');
        jQuery(this).toggleClass('open');
    });
});