function doneFn() {
    $(".addon").show(300), $("#sidebar").removeClass("sidebar-nav-sm"), $("#left-nav a i").removeClass("ion-log-in").animate(200), $("#left-nav a i").addClass("ion-log-out").animate(200)
}
var $border_color = "#F5F8FA",
    $grid_color = "#e1e8ed",
    $default_black = "#666",
    $red = "#e77338",
    $grey = "#999999",
    $yellow = "#FAD150",
    $pink = "#666",
    $blue = "#6e91cb",
    $green = "#a6d45c";
$("#mob-nav").click(function () {
    $("aside.open").length > 0 ? $("aside").animate({
        left: "-250px"
    }, 500).removeClass("open") : $("aside").animate({
        left: "0px"
    }, 500).addClass("open")
});
var tid = setInterval(function () {
    if ("complete" === document.readyState) {
        clearInterval(tid);
        var a = document.querySelector.bind(document),
            b = document.querySelector(".vertical-nav");
        a(".collapse-menu").onclick = function () {
            b.classList.toggle("vertical-nav-sm"), $(".dashboard-wrapper").toggleClass("dashboard-wrapper-lg", 200), $("i", this).toggleClass("icon-menu2 icon-cross2")
        }, a(".toggle-menu").onclick = function () {
            b.classList.toggle("vertical-nav-opened")
        }
    }
}, 1e3);
$(function () {
        $(".vertical-nav").metisMenu()
    }),
    function (a, b, c, d) {
        function e(b, c) {
            this.element = b, this.settings = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
        }
        var f = "metisMenu",
            g = {
                toggle: !0
            };
        e.prototype = {
            init: function () {
                var b = a(this.element),
                    c = this.settings.toggle;
                b.find("li.active").has("ul").children("ul").addClass("collapse in"), b.find("li").not(".active").has("ul").children("ul").addClass("collapse"), b.find("li").has("ul").children("a").on("click", function (b) {
                    b.preventDefault(), a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), c && a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")
                })
            }
        }, a.fn[f] = function (b) {
            return this.each(function () {
                a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
            })
        }
    }(jQuery, window, document), $(function () {
        $.scrollUp({
            scrollName: "scrollUp",
            scrollDistance: 180,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollText: '<i class="icon-chevron-up"></i>',
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        })
    }), $("a").tooltip("hide"), $(".meeting-personal").click(function (a) {
        $(this).css("text-decoration", "line-through"), a.stopPropagation()
    }), $(window).load(function () {
        $(".sunrise-loading").fadeOut(1e3)
    }), $(function () {
        $("#sale_weekly").sparkline([3, 4, 5, 6, 3, 4, 3, 4, 5, 3, 3, 2, 1, 1, 1], {
            height: "24",
            type: "bar",
            barSpacing: 3,
            barWidth: 6,
            barColor: "#6e91cb",
            tooltipPrefix: "Users: "
        }), $("#sale_weekly").sparkline([3, 3, 4, 5, 5, 5, 4, 4, 4, 3, 2, 1, 1, 1, 1, 1], {
            composite: !0,
            height: "30",
            fillColor: !1,
            lineColor: "#058DC7",
            tooltipPrefix: "Sale Online: "
        }), $("#sale_today").sparkline([2, 3, 4, 5, 7, 5, 4, 3, 3, 2, 1, 1, 2, 3], {
            height: "24",
            type: "bar",
            barSpacing: 3,
            barWidth: 6,
            barColor: "#e77338",
            tooltipPrefix: "Users: "
        }), $("#sale_today").sparkline([1, 1, 2, 3, 4, 9, 9, 11, 11, 13, 13, 13, 10, 1], {
            composite: !0,
            height: "30",
            fillColor: !1,
            lineColor: "#f7b53c",
            tooltipPrefix: "Sale Online: "
        })
    });