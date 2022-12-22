var AFC = {};

/**
 * Preloader
 */
(function ($) {
        "use strict";
        AFC.Preloader = function () {
            var preloader = $('.afc-preloader');

            if (!preloader.length) {
                return;
            }

            $(window).on('load', function () {
                var preloaderFadeOutTime = 450;

                function hidePreloader() {
                    preloader.fadeOut(preloaderFadeOutTime);
                }

                hidePreloader();
            });
        }
        AFC.Preloader();
    }
)(jQuery);

/**
 * Search Form
 */
(function ($) {
    AFC.SearchForm = function () {
        var form = $('.afc-search-form');
        var button = $('.js-toggle--search-form');

        if (!form.length) {
            return;
        }

        // Toggle
        button.on('click', function () {
            form.toggleClass('active');
        });
    };

    $(document).ready(function () {
        AFC.SearchForm();
    });
})(jQuery);

/**
 * Portfolio List Filter
 */
(function ($) {
    AFC.DataFilter = function () {
        var el = $('.afc-data-filter');

        if (!el.length) {
            return;
        }

        el.each(function () {
            var links = $(this).find('.afc-data-filter__links');

            links.on('click', 'li', function () {
                var links = $(this).siblings();
                var items = $(this).parent('ul').parent('.afc-data-filter__links').siblings('.afc-data-filter__items');
                var filter = $(this).attr('data-filter');

                links.removeClass('active');
                $(this).addClass('active');

                if (filter === 'all') {
                    items.children().show(600);
                } else {
                    items.children().hide();
                    items.children('[data-filter=' + filter + ']').show(600);
                }
            });
        });
    };
    $(document).ready(function () {
        AFC.DataFilter();
    });
})(jQuery);

/**
 * Fullscreen Menu
 */
(function ($) {
    AFC.FullScreenMenu = function () {
        var menu = $('.afc-fullscreen-menu');
        var button = $('.afc-button--toggle--menu');

        if (!menu.length) {
            return;
        }

        // Open
        button.on('click', function () {
            menu.toggleClass('active');
        });

        // Close
        menu.on('click', '.afc-fullscreen-menu__close, .afc-button--toggle--menu', function () {
            menu.removeClass('active');
        });

        // Menu
        menu.on('click', '.afc-fullscreen-menu__content__menu > .menu-item-has-children > a', function (e) {
            e.preventDefault();

            var other = $(this).parent('li').siblings('li').children('.sub-menu');
            var subMenu = $(this).siblings('ul.sub-menu');

            other.removeClass('active');
            subMenu.toggleClass('active');
            $(this).parent().toggleClass('active');

            console.log(subMenu)

        })
    };

    $(document).ready(function () {
        AFC.FullScreenMenu();
    });
})(jQuery);

/**
 * FullPage Slider
 */
(function ($) {
    AFC.FullPageSlider = function () {
        var widget = $('.afc-fullpage-slider');

        if (!widget.length) {
            return;
        }

        if (typeof $.fn.pagepiling == 'undefined') {
            return;
        }

        $('body').addClass('page-fullpage-slider');
        $('html', 'body').css('overflow: hidden');

        widget.each(function () {
            var t = $(this);
            var section = t.find('.afc-fullpage-slider__section');

            var anchors = [],
                menu = '.afc-fullpage-slider__menu',
                speed = t.data('speed') || 800,
                direction = t.data('direction'),
                loop_top = !!t.data('loop-top'),
                loop_bottom = !!t.data('loop-bottom'),
                navigation = t.data('dots') ? {} : false,
                keyboard_scrolling = !!t.data('keyboard-scrolling');

            // Update section number
            t.find('.afc-fullpage-slider__counter__numbers').html(section.length);

            // Update section anchor
            t.find('[data-anchor]').each(function () {
                anchors.push($(this).data('anchor'));
            });

            // Update section style
            function section_style() {
                var body = $('html');
                var section = t.find('.afc-fullpage-slider__section.active');

                switch (section.data('style')) {
                    case 'dark':
                        body.removeClass('afc-theme-light').addClass('afc-theme-dark');
                        break;
                    case 'light':
                        body.removeClass('afc-theme-dark').addClass('afc-theme-light');
                        break;
                }
            }

            // Update section counter
            function section_counter() {
                var section = t.find('.afc-fullpage-slider__section.active');
                var counter = t.find('.afc-fullpage-slider__counter');

                var index = section.index();

                counter.find('.afc-fullpage-slider__counter__index').html(index);
            }

            t.pagepiling({
                menu: menu,
                easing: 'swing',
                anchors: anchors,
                direction: direction,
                loopTop: loop_top,
                loopBottom: loop_bottom,
                navigation: navigation,
                scrollingSpeed: speed,
                sectionSelector: '.afc-fullpage-slider__section',
                verticalCentered: true,
                keyboardScrolling: keyboard_scrolling,
                afterRender: function () {
                    section_style();
                    section_counter();
                    $(window).trigger('afc.change-slide');
                },
                onLeave: function (index, nextIndex, direction) {
                    section_style();
                    section_counter();
                    $(window).trigger('afc.change-slide');
                },
                afterLoad: function (anchorLink, index) {
                },
            });
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-fullpage-slider.default', AFC.FullPageSlider);
    });
})(jQuery);

/**
 * Animate Widget
 */
(function ($) {
    AFC.AnimateWidget = function () {
        var widget = $('.afc-animate-widget');
        var slider = $('.afc-fullpage-slider');

        if (!widget.length) {
            return;
        }

        if (slider.length) {
            $(window).on('afc.change-slide', function () {
                widget.each(function () {
                    var t = $(this);
                    var a = t.data('animation-name');

                    t.removeClass('animate__animated').removeClass('animate__' + a);

                    if (t.parents('.afc-fullpage-slider__section').hasClass('active')) {
                        t.addClass('animate__animated').addClass('animate__' + a);
                    }
                });
            });
        } else {
            widget.each(function () {
                var t = $(this);
                t.one('inview', function () {
                    var n = t.data('animation-name');
                    t.addClass('animate__animated').addClass('animate__' + n);
                });
            });
        }
    }

    $(document).ready(function () {
        AFC.AnimateWidget();
    });
})(jQuery);

/**
 * Heading Typing Text
 */
(function ($) {
    AFC.HeadingTypingText = function () {

        var widget = $('.afc-typed-effect');

        if (!widget.length) {
            return;
        }

        if (typeof Typed == 'undefined') {
            return;
        }

        widget.each(function () {
            var t = $(this);
            var loop = t.data('loop') || false,
                speed = parseInt(t.data('speed')) || 150,
                fadeOut = t.data('fadeout') || false;

            new Typed('.afc-typed-effect', {
                loop: loop,
                fadeOut: fadeOut,
                typeSpeed: speed,
                stringsElement: '.afc-typed-effect__strings'
            });
        })

    };
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-heading-typing-text.default', AFC.HeadingTypingText);
    });
})(jQuery);

/**
 * Heading Animation Text
 */
(function ($) {
    AFC.HeadingAnimation = function () {
        var widget = $('.afc-heading-animation');

        if (!widget.length) {
            return;
        }

        widget.each(function () {
            var t = $(this);
            var delay = parseInt(t.data('delay')) || 3000;
            var first_item = t.find('.is-visible').eq(0);

            setTimeout(function () {
                hideWords(first_item);
            }, delay);
        });

        function hideWords(word) {

            var next_word = word.is(':last-child') ? word.parent().children().eq(0) : word.next();

            if (word.hasClass('is-visible')) {
                word.parent().css('width', next_word.width());
            }

            switchWords(word, next_word);

            setTimeout(function () {
                hideWords(next_word)
            }, delay);
        }

        function switchWords(x, y) {
            x.removeClass('is-visible').addClass('is-hidden');
            y.removeClass('is-hidden').addClass('is-visible');
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-heading-animation.default', AFC.HeadingAnimation);
    });

})(jQuery);

/**
 * Posts Carousel
 */
(function ($) {
    AFC.PostsCarousel = function () {
        var widget = $('.afc-carousel--posts');

        if (!widget.length) {
            return;
        }

        if (typeof Swiper == 'undefined') {
            return;
        }

        widget.each(function () {
            var swiper = $(this).find('.swiper-container'),
                loop = !!swiper.data('loop'),
                center = !!swiper.data('center'),
                autoplay = !!swiper.data('autoplay'),
                speed = swiper.data('animation-speed') || 1000,
                xsPoint = swiper.data('xs-breakpoint') || 1,
                smPoint = swiper.data('sm-breakpoint') || 1,
                mdPoint = swiper.data('md-breakpoint') || 1,
                lgPoint = swiper.data('lg-breakpoint') || 1,
                xlPoint = swiper.data('xl-breakpoint') || 1,
                xsSpace = swiper.data('xs-space-between') || 12,
                smSpace = swiper.data('xs-space-between') || 12,
                mdSpace = swiper.data('md-space-between') || 24,
                lgSpace = swiper.data('lg-space-between') || 30,
                xlSpace = swiper.data('xl-space-between') || 30;

            var config = {
                loop: loop,
                speed: parseInt(speed),
                autoplay: autoplay,
                spaceBetween: 24,
                centeredSlides: center,
                pagination: {
                    el: '.afc-swiper__pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.afc-swiper__button--prev',
                    nextEl: '.afc-swiper__button--next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: parseInt(xsPoint),
                        spaceBetween: parseInt(xsSpace),
                    },
                    576: {
                        slidesPerView: parseInt(smPoint),
                        spaceBetween: parseInt(smSpace),
                    },
                    768: {
                        slidesPerView: parseInt(mdPoint),
                        spaceBetween: parseInt(mdSpace),
                    },
                    992: {
                        slidesPerView: parseInt(lgPoint),
                        spaceBetween: parseInt(lgSpace),
                    },
                    1200: {
                        slidesPerView: parseInt(xlPoint),
                        spaceBetween: parseInt(xlSpace),
                    },
                },
            };

            new Swiper(swiper, config);
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-posts-carousel.default', AFC.PostsCarousel);
    });

})(jQuery);

/**
 * Category Carousel
 */
(function ($) {
    AFC.CategoriesCarousel = function () {
        var widget = $('.afc-carousel--categories');

        if (!widget.length) {
            return;
        }

        if (typeof Swiper == 'undefined') {
            return;
        }

        widget.each(function () {
            var swiper = $(this).find('.swiper-container'),
                loop = !!swiper.data('loop'),
                center = !!swiper.data('center'),
                speed = swiper.data('animation-speed') || 1000,
                autoplay = !!swiper.data('autoplay'),
                xsPoint = swiper.data('xs-breakpoint') || 1,
                smPoint = swiper.data('sm-breakpoint') || 1,
                mdPoint = swiper.data('md-breakpoint') || 1,
                lgPoint = swiper.data('lg-breakpoint') || 1,
                xlPoint = swiper.data('xl-breakpoint') || 1,
                xsSpace = swiper.data('xs-space-between') || 12,
                smSpace = swiper.data('xs-space-between') || 12,
                mdSpace = swiper.data('md-space-between') || 24,
                lgSpace = swiper.data('lg-space-between') || 24,
                xlSpace = swiper.data('lg-space-between') || 30;

            var config = {
                loop: loop,
                speed: parseInt(speed),
                autoplay: autoplay,
                spaceBetween: 24,
                centeredSlides: center,
                pagination: {
                    el: '.afc-swiper__pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.afc-swiper__button--prev',
                    nextEl: '.afc-swiper__button--next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: parseInt(xsPoint),
                        spaceBetween: parseInt(xsSpace),
                    },
                    576: {
                        slidesPerView: parseInt(smPoint),
                        spaceBetween: parseInt(smSpace),
                    },
                    768: {
                        slidesPerView: parseInt(mdPoint),
                        spaceBetween: parseInt(mdSpace),
                    },
                    992: {
                        slidesPerView: parseInt(lgPoint),
                        spaceBetween: parseInt(lgSpace),
                    },
                    1200: {
                        slidesPerView: parseInt(xlPoint),
                        spaceBetween: parseInt(xlSpace),
                    },
                },
            };

            new Swiper(swiper, config);
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-categories.default', AFC.CategoriesCarousel);
    });

})(jQuery);

/**
 * Infobox Carousel
 */
(function ($) {
    AFC.InfoboxCarousel = function () {
        var widget = $('.afc-carousel--infobox');

        if (!widget.length) {
            return;
        }

        if (typeof Swiper == 'undefined') {
            return;
        }

        widget.each(function () {
            var swiper = $(this).find('.swiper-container'),
                loop = !!swiper.data('loop'),
                center = !!swiper.data('center'),
                autoplay = !!swiper.data('autoplay'),
                speed = swiper.data('animation-speed') || 1000,
                carouselSpace = swiper.data('space') || 24;

            var config = {
                loop: loop,
                speed: speed,
                autoplay: autoplay,
                spaceBetween: carouselSpace,
                centeredSlides: center,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.afc-swiper__button--prev',
                    nextEl: '.afc-swiper__button--next',
                },
            };

            if ($(this).hasClass('afc-carousel--infobox--style-1')) {
                Object.assign(
                    config,
                    {
                        breakpoints: {
                            0: {
                                spaceBetween: 12,
                                slidesPerView: 1,
                            },
                            768: {
                                spaceBetween: 24,
                                slidesPerView: 2,
                            },
                            992: {
                                spaceBetween: 24,
                                slidesPerView: 3,
                            },
                            1200: {
                                spaceBetween: 24,
                                slidesPerView: 4,
                            },
                        },
                    }
                )

            } else if ($(this).hasClass('afc-carousel--infobox--style-2')) {
                Object.assign(
                    config,
                    {
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            1200: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            }
                        },
                    }
                );

            }

            new Swiper(swiper, config);

        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-infobox-carousel.default', AFC.InfoboxCarousel);
    });
})(jQuery);

/**
 * Testimonial Carousel
 */
(function ($) {
    AFC.TestimonialCarousel = function () {
        var widget = $('.afc-carousel--testimonial22');

        if (!widget.length) {
            return;
        }

        if (typeof Swiper == 'undefined') {
            return;
        }

        widget.each(function () {
            var swiper = $(this).find('.swiper-container'),
                loop = !!swiper.data('loop'),
                center = !!swiper.data('center'),
                autoplay = !!swiper.data('autoplay'),
                speed = swiper.data('animation-speed') || 1000,
                carouselSpace = swiper.data('space') || 30,
                carouselSlides = swiper.data('slides') || 1;

            var config = {
                loop: loop,
                speed: speed,
                autoplay: autoplay,
                spaceBetween: carouselSpace,
                centeredSlides: center,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.afc-swiper__button--prev',
                    nextEl: '.afc-swiper__button--next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 12,
                    },
                    992: {
                        slidesPerView: carouselSlides,
                        spaceBetween: 30,
                    }
                },
            };


            if ($(this).hasClass('afc-carousel--testimonial--style-1')) {
                Object.assign(
                    config,
                    {
                        spaceBetween: 30,
                        slidesPerView: 1,
                    }
                )
            } else if ($(this).hasClass('afc-carousel--testimonial--style-2')) {
                Object.assign(
                    config,
                    {
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            1200: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            }
                        },
                    }
                );
            }

            new Swiper(swiper, config);

        });
    };

    $(window).on('elementor/frontend/init', function () {

    });
})(jQuery);

/**
 * Tilt
 */
(function ($) {
    AFC.WidgetTilt = function () {
        var widget = $('[data-tilt]');

        if (!widget.length) {
            return;
        }

        if (typeof $.fn.tilt == 'undefined') {
            return;
        }

        widget.each(function () {
            var t = $(this);

            var max = t.data('tilt-max'),
                scale = t.data('tilt-scale'),
                speed = t.data('tilt-speed'),
                easing = t.data('tilt-easing'),
                perspective = t.data('tilt-perspective');

            var config = {
                scale: scale,
                speed: speed,
                easing: easing,
                maxTilt: max,
                perspective: perspective,
            };

            t.tilt(config);
        });
    };

    AFC.WidgetTilt();
})(jQuery);

/**
 * Mouse Paralalx
 */
(function ($) {
    AFC.MouseParallax = function () {
        var widget = $('.afc-mouse-parallax');

        if (!widget.length) {
            return;
        }

        widget.each(function () {
            var t = $(this);

            t.on("mousemove", function (e) {
                var x = parseInt(t.data('parallax-x')),
                    y = parseInt(t.data('parallax-y'));

                var getX = (e.pageX * -1 / x),
                    getY = (e.pageY * -1 / y);

                t.css('transform', 'translate3d(' + getX + 'px,' + getY + 'px, 0)');
            });
        });
    };

    AFC.MouseParallax();
})(jQuery);

/**
 * ModalVideo
 */
// (function ($) {
//     AFC.ModalVideo = function () {
//         var widget = $('.afc-modal-video');
//         var button = widget.find('.afc-modal-video__button');
//
//         if (!widget.length) {
//             return;
//         }
//
//         if (typeof $.fn.modalVideo == 'undefined') {
//             return;
//         }
//
//         button.modalVideo({autoplay: 0});
//     };
//
//     $(window).on('elementor/frontend/init', function () {
//         elementorFrontend.hooks.addAction('frontend/element_ready/afracode-modal-video.default', AFC.ModalVideo);
//     });
// })(jQuery);

/**
 * Animation
 */
(function ($) {
    AFC.Animation = function () {

        if (typeof WOW == 'undefined') {
            return;
        }

        new WOW().init();
    }

    $(document).ready(function () {
        AFC.Animation();
    });
})(jQuery);

/**
 * Carousel
 */
(function ($) {
    AFC.Carousel = function () {
        var widget = $('.afc-carousel--widget');

        if (!widget.length) {
            return;
        }

        if (typeof Swiper == 'undefined') {
            return;
        }


        widget.each(function () {
            var swiper = $(this).find('.swiper-container'),
                loop = !!swiper.data('loop'),
                center = !!swiper.data('center'),
                autoplay = !!swiper.data('autoplay'),
                speed = swiper.data('animation-speed') || 1000,
                carouselSpace = swiper.data('space') || 24,
                xsPoint = swiper.data('xs-breakpoint') || 1,
                smPoint = swiper.data('sm-breakpoint') || 1,
                mdPoint = swiper.data('md-breakpoint') || 1,
                lgPoint = swiper.data('lg-breakpoint') || 1,
                xlPoint = swiper.data('xl-breakpoint') || 1,
                xsSpace = swiper.data('xs-space-between') || 12,
                smSpace = swiper.data('xs-space-between') || 12,
                mdSpace = swiper.data('md-space-between') || 24,
                lgSpace = swiper.data('lg-space-between') || 30,
                xlSpace = swiper.data('xl-space-between') || 30;

            var config = {
                loop: loop,
                speed: speed,
                autoplay: autoplay,
                spaceBetween: carouselSpace,
                centeredSlides: center,
                pagination: {
                    el: '.afc-swiper__pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.afc-swiper__button--prev',
                    nextEl: '.afc-swiper__button--next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: parseInt(xsPoint),
                        spaceBetween: parseInt(xsSpace),
                    },
                    576: {
                        slidesPerView: parseInt(smPoint),
                        spaceBetween: parseInt(smSpace),
                    },
                    768: {
                        slidesPerView: parseInt(mdPoint),
                        spaceBetween: parseInt(mdSpace),
                    },
                    992: {
                        slidesPerView: parseInt(lgPoint),
                        spaceBetween: parseInt(lgSpace),
                    },
                    1200: {
                        slidesPerView: parseInt(xlPoint),
                        spaceBetween: parseInt(xlSpace),
                    },
                },
            };

            new Swiper(swiper, config);
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-infobox-image.default', AFC.Carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/afracode-testimonial-carousel.default', AFC.Carousel);
    });
})(jQuery);

(function ($) {
    AFC.ScrollingProgressBar = function () {
        let top = $(document).scrollTop();
        let height = $(document).height() - $(window).height();
        let progress = 100 * top / height;
        let progressBar = $('.afc-scrolling-progress-bar');

        if (!progressBar.length) {
            return;
        }

        progressBar.css('width', progress + '%');
    }

    $(document).on('scroll', function () {
        AFC.ScrollingProgressBar();
    });
})(jQuery);

(function ($) {
    AFC.CustomSelectBox = function () {
        $('select[name="archive-dropdown"], select[name="cat"], select[name="monster-widget-just-testing"]').after("<span class='js-custom-select-box-span'></span>");
    }

    $(document).ready(function () {
        AFC.CustomSelectBox();
    });
})(jQuery);