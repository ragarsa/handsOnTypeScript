var OptionalChaining;
(function (OptionalChaining) {
    var _a, _b, _c;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    var count = (_b = (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0;
    console.log("car", car);
    console.log("car", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("car", (_c = car === null || car === void 0 ? void 0 : car.wheels) === null || _c === void 0 ? void 0 : _c.count);
    console.log(count);
})(OptionalChaining || (OptionalChaining = {}));
