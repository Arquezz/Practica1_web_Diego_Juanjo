// Cerrar Menu FullScreen //

$(document).ready(function() {
    $('#offcanvasNavbar .nav-link').on('click', function() {
        $('#offcanvasNavbar').offcanvas('hide');
    });
});