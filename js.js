var Cat = /** @class */ (function () {
    function Cat(element) {
        this.element = element;
    }
    Cat.prototype.walk = function (steps, direction) {
        this.element.style[direction.toLowerCase()] = this.element['offset' + direction] + steps + 'px';
    };
    return Cat;
}());
var cat1 = new Cat(document.getElementsByClassName('cat-img')[0]);
document.body.onkeydown = function (e) {
    var key = e.keyCode || e.charCode || e.which; // cross browser complications
    var steps = 40;
    switch (key) {
        case 39:
            cat1.walk(steps, 'Left');
            break;
        case 37:
            cat1.walk(-steps, 'Left');
            break;
        case 38:
            cat1.walk(-steps, 'Top');
            break;
        case 40:
            cat1.walk(steps, 'Top');
            break;
        default:
            break;
    }
};
//# sourceMappingURL=js.js.map