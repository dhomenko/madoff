/*
tinc project builder
jsFile create on 08.11.2018 16:50:47
*/
$(document).ready(function () {

    var overlay = $('#overlay');
    var openMod = $('.openMod');
    var close = $('.close');
    var blockMod = $('.blockMod');

    function modalEvent() {
        overlay.fadeIn(500);
        $(".blockMod#" + $(this).attr('data-modal')).addClass("open").fadeIn(500);
        $("body").addClass("bodyModal");
        $(".modalsScroll").addClass("open");
    }

    openMod.on("click", modalEvent);

    close.click(function () {
        overlay.fadeOut(500);
        $(".blockMod.open").fadeOut(500, function () {
            $(this).removeClass("open");
            $("body").removeClass("bodyModal");
            $(".modalsScroll").removeClass("open");
        });
    });
    var onModalClose = function () {
        $(this).fadeOut(500);
        $(".blockMod.open").fadeOut(500, function () {
            $(this).removeClass("open");
            $("body").removeClass("bodyModal");
            $(".modalsScroll").removeClass("open");
        });
    };

    overlay.click(onModalClose);

    if ($("select").length > 0) {
        $("select").map(function () {
            $(this).selectric();
        })
    }
    if ($(".scrollBlock").length > 0) {
        $(".scrollBlock").map(function () {
            $(this).mCustomScrollbar({
                axis: "y"
            });
        })
    }

    $('.enterNum').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    if ($('.range').length > 0) {
        $('#range').ionRangeSlider({
            min: 30,
            max: 500,
            from: 100,
            step: 10,
            grid: false,
            prefix: '$',
            onStart: function (data) {
                $('#enterAm').val(data.from);
            },
            onChange: function (data) {
                $('#enterAm').val(data.from);
            }
        })

        var range = $('#range').data('ionRangeSlider'),
            min = 30,
            max = 500;

        $('#enterAm').on('change keyup', function () {
            var val = $(this).prop('value');
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }
            range.update({
                from: val
            });
        });
    }

    var faqHead = $('.faqItem > .head'),
        faqContent = $('.faqItem > .content');

    if ($('.faqItem').length > 0) {
        $('.faqItem').map(function () {
            var el = $(this)
            if (el.find(faqHead).length > 0 && el.find(faqContent).length > 0) {

                el.find(faqHead).on('click', function () {
                    var el = $(this),
                        cont = el.siblings(faqContent);

                    if (el.hasClass('active')) {
                        cont.stop().slideUp(500, function () {
                            el.removeClass('active');
                        });

                    } else {
                        cont.stop().slideDown(500, function () {
                            el.addClass('active');
                        });
                    }
                })
            }
        })
    }

    var refHead = $('.refItem > .head'),
        refContent = $('.refItem > .content');

    if ($('.refItem').length > 0) {
        $('.refItem').map(function () {
            var el = $(this)
            if (el.find(refHead).length > 0 && el.find(refContent).length > 0) {

                el.find(refHead).on('click', function () {
                    var el = $(this),
                        cont = el.siblings(refContent);

                    if (el.hasClass('active')) {
                        cont.stop().slideUp(500, function () {
                            el.removeClass('active');
                        });

                    } else {
                        cont.stop().slideDown(500, function () {
                            el.addClass('active');
                        });
                    }
                })
            }
        })
    }

    if ($(".copyLink").length > 0) {
        new ClipboardJS(".copyLink");
    }

    if ($(".tabs").length > 0) {
        $(".tabs").map(function () {
            $(this).tabs({
                active: 3,
                show: {
                    effect: "fadeIn",
                    duration: 300
                },
                hide: {
                    effect: "fadeOut",
                    duration: 300
                }
            })
        })
    }
})