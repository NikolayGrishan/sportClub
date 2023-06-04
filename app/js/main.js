$(document).ready(function () {
    let e = document.getElementsByName(".searchingPopup");
    if (e) {
        $(".searchingPopup").magnificPopup({
            alignTop: true,
        });
    }
});

$(document).ready(function () {
    if ($("#crossSearching").length) {
        $("#crossSearching").click(function () {
            $.magnificPopup.close();
        });
    }
});

// popup в popup-е
$(document).ready(function () {
    let elem = document.getElementById("myModal");
    $(".stats__bombardier-all").click(function () {
        elem.style.display = "flex";
    });
    $("#closeBombardir").click(function () {
        elem.style.display = "none";
    });
    $(document).mouseup(function (e) {
        let div = $("#allBombardires"); // тут указываем ID элемента
        if (div) {
            if (elem) {
                // событие клика по веб-документу
                if (
                    !div.is(e.target) && // если клик был не по нашему блоку
                    div.has(e.target).length === 0
                ) {
                    // и не по его дочерним элементам
                    elem.style.display = "none";
                }
            }
        }
    });
});
// popup в popup-е
$(document).ready(function () {
    let elem = document.getElementById("myModal");
    let elem2 = document.getElementById("form");

    $(".allBombardires__table-body-content-item-player").click(function () {
        elem2.style.display = "flex";
        elem.style.display = "none";
    });
    $(".form-container-cross").click(function () {
        elem2.style.display = "none";
        elem.style.display = "flex";
    });
});
// слайдер Следующие матчи
$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        touchThreshold: 15,
        swipeToSlide: true,
        variableWidth: true,
        appendArrows: $(".match__arrows"),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});
// слайдер Новости
$(document).ready(function () {
    $(".slider--n").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        appendArrows: $(".news__arrows"),
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    dotsClass: "news-dots",
                },
            },
        ],
    });
});
// слайдер на странице Новости
$(document).ready(function () {
    $(".slider--rhl").slick({
        arrows: true,
        slidesToShow: 3,
        speed: 1000,
        easing: "lenear",
        appendArrows: $(".news--rhl__arrows"),
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                },
            },
        ],
    });
});
// слайдер фото на главной
$(document).ready(function () {
    $(".slider-photo").slick({
        arrows: true,
        speed: 1000,
        easing: "ease",
        appendArrows: $(".slider-photo__arrows"),
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 3,
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: "slider-dots",
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                },
            },
        ],
    });
});
// слайдер Проекты
$(document).ready(function () {
    $(".projects__container-slider").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dotsClass: "projects-dots",
                    dots: true,
                },
            },
        ],
    });
});
// слайдер фото на странице подробной новости
$(document).ready(function () {
    $(".newsMatch__container-wrapper-case-slider").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        appendArrows: $(".newsMatch__container-wrapper-case__arrows"),
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    variableWidth: true,
                    dots: true,
                    centerMode: false,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".stats__document-link").hover(
        function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        }
    );
});

$(document).ready(function () {
    $(".stats__document-pdf").hover(
        function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        }
    );
});
// слайдер Фотоотчета
$(document).ready(function () {
    $(".photo-item__container-content-slider").slick({
        arrows: false,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1101,
                settings: {
                    rows: 1,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    dots: true,
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(
        ".photo-item__container-content-slider .slick-cloned>div>div>a"
    ).removeAttr("data-fancybox");
});

// слайдер фото на странице фотогалереи
$(document).ready(function () {
    $(".photo-item__photoContainer-content-slider").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    dots: true,
                    dotsClass: "photo-item__photoContainer-content-slider-dots",
                },
            },
        ],
    });
});

$(".photo-item__container-content-slider .slick-cloned>div>div>a").removeAttr(
    'data-fancybox="images"'
);

$(".photo-item__container-content-arrows-slickPrev").on("click", function () {
    $(".photo-item__container-content-slider").slick("slickPrev");
});

$(".photo-item__container-content-arrows-slickNext").on("click", function () {
    $(".photo-item__container-content-slider").slick("slickNext");
});
$(".photo-item__photoContainer-case-arrows-slickPrev").on("click", function () {
    $(".photo-item__photoContainer-content-slider").slick("slickPrev");
});

$(".photo-item__photoContainer-case-arrows-slickNext").on("click", function () {
    $(".photo-item__photoContainer-content-slider").slick("slickNext");
});

document.addEventListener("DOMContentLoaded", function () {
    function openMobileSidebar() {
        const burgerBtn = document.querySelector(".header__burger");
        const closeMenuBtn = document.querySelector(".sidebar__close");
        const mobMenu = document.querySelector(".sidebar");

        burgerBtn.addEventListener("click", () => {
            mobMenu.style.transform = "translateX(0%)";
        });

        closeMenuBtn.addEventListener("click", () => {
            mobMenu.style.transform = "translateX(200%)";
        });

        mobMenu.addEventListener("click", (event) => {
            if (event.target) {
                mobMenu.style.transform = "translateX(200%)";
            }
        });
    }
    openMobileSidebar();

    function statsTabs() {
        let statsNav = $(".stats__title--tab");
        let statsContent = $(".stats__block--tab");

        statsNav.on("click", function (event) {
            let activeContent = $(this).attr("data-target");
            statsNav.removeClass("stats__title--tab_active");
            statsContent.removeClass("stats__block--tab_active");
            $(activeContent).addClass("stats__block--tab_active");
            $(this).addClass("stats__title--tab_active");
        });
    }
    statsTabs();

    function dropDown() {
        $(".stats__document-title").click(function (event) {
            $(this).toggleClass("active").next().slideToggle();
        });
    }
    dropDown();
});
