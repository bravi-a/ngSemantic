System.register(["angular2/core", "angular2/http", "rxjs/operator/map"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var DataServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DataServices = (function () {
                function DataServices(http) {
                    this.http = http;
                }
                DataServices.prototype.array = function (name) {
                    return this.http
                        .get("/assets/data/" + name + ".json")
                        .map(function (respond) { return respond.json(); });
                };
                DataServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataServices);
                return DataServices;
            }());
            exports_1("DataServices", DataServices);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVDLHNCQUFtQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBQUksQ0FBQztnQkFFbEMsNEJBQUssR0FBTCxVQUFNLElBQVk7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDZCxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7eUJBQ3JDLEdBQUcsQ0FBQyxVQUFDLE9BQVksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFURjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFVYixtQkFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBVEQsdUNBU0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZXMge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuXHRhcnJheShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5nZXQoXCIvYXNzZXRzL2RhdGEvXCIgKyBuYW1lICsgXCIuanNvblwiKVxuXHRcdFx0Lm1hcCgocmVzcG9uZDogYW55KSA9PiByZXNwb25kLmpzb24oKSk7XG5cdH1cbn1cbiJdfQ==