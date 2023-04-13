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
                    dots: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: false,
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
    $(".slider--rhl").slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        easing: "lenear",
        appendArrows: $(".news--rhl__arrows"),
        draggable: false,
        infinite: true,
        initialSlide: 2,
        touchThreshold: 15,
        waitForAnimate: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true,
                },
            },
        ],
    });
});

// $(document).ready(function () {
//     $(".slider--bb").slick({
//         arrows: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         speed: 1000,
//         easing: "lenear",
//         appendArrows: $(".stats__arrows"),
//         draggable: false,
//         infinite: true,
//         initialSlide: 1,
//         touchThreshold: 15,
//         waitForAnimate: false,
//     });
// });

$(document).ready(function () {
    $(".photo-item__container-content-slider").slick({
        arrows: false,
        rows: 2,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    arrows: false,
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
