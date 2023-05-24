$(document).ready(function () {
    $(".searchingPopup").magnificPopup({
        alignTop: true,
    });
});

$(document).ready(function () {
    $("#crossSearching").click(function () {
        $.magnificPopup.close();
    });
});

// popup в popup-е
$(document).ready(function () {
    let elem = document.getElementById("myModal");
    $(".stats__bombardier-all").click(function () {
        elem.style.display = "flex";
    });
    $(".stats__closePopup.modal").click(function () {
        elem.style.display = "none";
    });
});

// popup в popup-е
$(document).ready(function () {
    let elem2 = document.getElementById("form");

    $(".stats__playerBombardier").click(function () {
        elem2.style.display = "flex";
    });
    $(".stats__cross").click(function () {
        elem2.style.display = "none";
    });
});

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
        // draggable: false,
        swipe: true,
        touchThreshold: 15,
        swipeToSlide: true,
        // waitForAnimate: false,
        variableWidth: true,
        appendArrows: $(".match__arrows"),

        responsive: [
            {
                breakpoint: 768,
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
        // waitForAnimate: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        // draggable: false,

        responsive: [
            {
                breakpoint: 1067,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
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

$(document).ready(function () {
    $(".slider--rhl").slick({
        arrows: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
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
        // // draggable: false,
        swipe: true,
        swipeToSlide: true,
        // // waitForAnimate: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    initialSlide: 0,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".slider-photo").slick({
        arrows: true,
        // slidesToScroll: 1,
        speed: 1000,
        easing: "ease",
        appendArrows: $(".slider-photo__arrows"),
        centerMode: true,
        centerPadding: "50px", // добавляем опцию centerPadding
        slidesToShow: 3,
        infinite: true,
        initialSlide: 0,
        touchThreshold: 15,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        // // draggable: false,
        swipe: true,
        swipeToSlide: true,
        // // waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
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
        // waitForAnimate: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        // draggable: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dotsClass: "projects-dots",
                    dots: true,
                },
            }
        ],
    });
});

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
        // waitForAnimate: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        // draggable: false,
        centerMode: true,
        centerPadding: "110px", // добавляем опцию centerPadding

        responsive: [
            {
                breakpoint: 1067,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true,
                    dots: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: false,
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
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                },
            },
        ],
    });
    $(
        ".photo-item__container-content-slider .slick-cloned>div>div>a"
    ).removeAttr("data-fancybox");
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
