function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n\n    <ion-title>\n      Pendientes      \n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-list>\n    <app-listas [terminada]=\"false\"></app-listas>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\"\n                    (click)=\"nuevaLista()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tab1/tab1.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab1/tab1.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppPagesTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/pages/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/pages/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_8__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]
      }]), _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab1/tab1.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab1/tab1.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMS9GOlxcQmFja3VwXFxQcm95ZWN0b3MgQW5ndWxhclxcRGVzZW9zIEFuZ3VsYXJcXGRlc2Vvcy9zcmNcXGFwcFxccGFnZXNcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tab1/tab1.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab1/tab1.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppPagesTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_deseo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/deseo.service */
    "./src/app/services/deseo.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(router, deseoService, alertController) {
        _classCallCheck(this, Tab1Page);

        this.router = router;
        this.deseoService = deseoService;
        this.alertController = alertController;
      }

      _createClass(Tab1Page, [{
        key: "nuevaLista",
        value: function nuevaLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alertEjemplo, alertNuevaLista;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Subtitle',
                      message: 'This is an alert message.',
                      buttons: ['OK']
                    });

                  case 2:
                    alertEjemplo = _context.sent;
                    _context.next = 5;
                    return this.alertController.create({
                      header: 'Nueva Lista',
                      inputs: [{
                        name: 'titulo',
                        placeholder: 'Ingrese título',
                        type: 'text'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Crear',
                        handler: function handler(data) {
                          if (data.titulo.length === 0) {
                            return;
                          } else {
                            var id = _this.deseoService.nuevaLista(data.titulo);

                            _this.router.navigateByUrl("tabs/tab1/agregar/".concat(id));
                          }
                        }
                      }]
                    });

                  case 5:
                    alertNuevaLista = _context.sent;
                    alertNuevaLista.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_deseo_service__WEBPACK_IMPORTED_MODULE_2__["DeseoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/pages/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_deseo_service__WEBPACK_IMPORTED_MODULE_2__["DeseoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map