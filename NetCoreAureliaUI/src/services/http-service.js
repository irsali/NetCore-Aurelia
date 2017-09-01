var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-fetch-client", "aurelia-framework"], function (require, exports, aurelia_fetch_client_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpService = (function () {
        function HttpService(httpClient) {
            this.httpClient = httpClient;
            httpClient.configure(function (config) {
                config
                    .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                    .withInterceptor({
                    request: function (request) {
                        console.log("Requesting " + request.method + " " + request.url);
                        return request;
                    },
                    response: function (response) {
                        console.log("Received " + response.status + " " + response.url);
                        return response;
                    }
                });
            });
        }
        HttpService.prototype.postJson = function (urlFragment, object) {
            var response = this.postRequest(urlFragment, object)
                .then(function (t) { return t.json(); });
            return response;
        };
        HttpService.prototype.getJson = function (urlFragment) {
            var response = this.getRequest(urlFragment)
                .then(function (t) { return t.json(); });
            return response;
        };
        HttpService.prototype.getString = function (urlFragment) {
            var response = this.getRequest(urlFragment)
                .then(function (t) { return t.text(); });
            return response;
        };
        HttpService.prototype.getRequest = function (urlFragment) {
            return this.httpClient.fetch(urlFragment, {
                method: 'get'
            });
        };
        HttpService.prototype.postRequest = function (urlFragment, object) {
            var response = this.httpClient.fetch(urlFragment, {
                method: 'post',
                body: aurelia_fetch_client_1.json(object)
            });
            return response;
        };
        return HttpService;
    }());
    HttpService = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], HttpService);
    exports.HttpService = HttpService;
});
//# sourceMappingURL=http-service.js.map