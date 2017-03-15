
$(window).resize(function () {

    if ($(window).width() < 768) {

        $('.nav li').on('click', function () {
            $('.navbar-toggle').addClass('collapsed');
        });

    }

});

$(document).ready(function () {

    if ($(window).width() < 768) {

        $('.nav li').on('click', function () {
            $('.navbar-toggle').addClass('collapsed');
        });

    }

});

$(function () {

    $(".menu-button").click(
            function () {
                var id = $(this).closest('.tab-pane').attr("id");
                var val_id = '#' + id + '-ifcc';
                if ($(val_id).css('top') === "200px")
                    $(val_id).css('top', '-500px');
                else
                    $(val_id).css('top', '200px');
            }
    );
});