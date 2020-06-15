function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-agregar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAgregarAgregarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">  \n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ lista.titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Título</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nombreItem\" (keyup.enter)=\"agregarItem()\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header *ngIf=\"lista.items.length > 0\">\n      <ion-label color=\"tertiary\">Tareas por hacer</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let item of lista.items; let i = index\">\n      \n      <ion-item>\n        <ion-label>{{ item.descripcion }}</ion-label>\n        <ion-checkbox slot=\"start\" (ionChange)=\"cambioCheck(item)\" [(ngModel)]=\"item.completado\"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminarItem(i)\">\n          <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/models/lista-item.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/lista-item.model.ts ***!
    \********************************************/

  /*! exports provided: ListaItem */

  /***/
  function srcAppModelsListaItemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaItem", function () {
      return ListaItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ListaItem = function ListaItem(descripcion) {
      _classCallCheck(this, ListaItem);

      this.descripcion = descripcion;
      this.completado = false;
    };
    /***/

  },

  /***/
  "./src/app/models/lista.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/lista.model.ts ***!
    \***************************************/

  /*! exports provided: Lista */

  /***/
  function srcAppModelsListaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Lista", function () {
      return Lista;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Lista = function Lista(titulo) {
      _classCallCheck(this, Lista);

      this.titulo = titulo;
      this.creadaEn = new Date();
      this.terminada = false;
      this.items = [];
      this.id = new Date().getTime();
    };
    /***/

  },

  /***/
  "./src/app/pages/agregar/agregar-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/agregar/agregar-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AgregarPageRoutingModule */

  /***/
  function srcAppPagesAgregarAgregarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgregarPageRoutingModule", function () {
      return AgregarPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _agregar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agregar.page */
    "./src/app/pages/agregar/agregar.page.ts");

    var routes = [{
      path: '',
      component: _agregar_page__WEBPACK_IMPORTED_MODULE_3__["AgregarPage"]
    }];

    var AgregarPageRoutingModule = function AgregarPageRoutingModule() {
      _classCallCheck(this, AgregarPageRoutingModule);
    };

    AgregarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AgregarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/agregar/agregar.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/agregar/agregar.module.ts ***!
    \*************************************************/

  /*! exports provided: AgregarPageModule */

  /***/
  function srcAppPagesAgregarAgregarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function () {
      return AgregarPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./agregar-routing.module */
    "./src/app/pages/agregar/agregar-routing.module.ts");
    /* harmony import */


    var _agregar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./agregar.page */
    "./src/app/pages/agregar/agregar.page.ts");

    var AgregarPageModule = function AgregarPageModule() {
      _classCallCheck(this, AgregarPageModule);
    };

    AgregarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarPageRoutingModule"]],
      declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]]
    })], AgregarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/agregar/agregar.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/agregar/agregar.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAgregarAgregarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVnYXIvYWdyZWdhci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/agregar/agregar.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/agregar/agregar.page.ts ***!
    \***********************************************/

  /*! exports provided: AgregarPage */

  /***/
  function srcAppPagesAgregarAgregarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgregarPage", function () {
      return AgregarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_lista_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/lista-item.model */
    "./src/app/models/lista-item.model.ts");
    /* harmony import */


    var src_app_services_deseo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/deseo.service */
    "./src/app/services/deseo.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AgregarPage = /*#__PURE__*/function () {
      function AgregarPage(deseoService, route) {
        _classCallCheck(this, AgregarPage);

        this.deseoService = deseoService;
        this.route = route;
        var idLista = this.route.snapshot.paramMap.get('idLista');
        this.lista = this.deseoService.obtenerLista(idLista);
      }

      _createClass(AgregarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarItem",
        value: function agregarItem() {
          if (this.nombreItem.length != 0) {
            var nuevoItem = new _models_lista_item_model__WEBPACK_IMPORTED_MODULE_1__["ListaItem"](this.nombreItem);
            this.lista.items.push(nuevoItem);
            this.nombreItem = '';
            this.deseoService.insertarListas();
          }
        }
      }, {
        key: "cambioCheck",
        value: function cambioCheck(item) {
          var pendientes = this.lista.items.filter(function (itemData) {
            return !itemData.completado;
          }).length;

          if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
          } else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
          }

          this.deseoService.insertarListas();
        }
      }, {
        key: "eliminarItem",
        value: function eliminarItem(i) {
          this.lista.items.splice(i, 1);
          this.deseoService.insertarListas();
        }
      }]);

      return AgregarPage;
    }();

    AgregarPage.ctorParameters = function () {
      return [{
        type: src_app_services_deseo_service__WEBPACK_IMPORTED_MODULE_2__["DeseoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    AgregarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-agregar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agregar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agregar.page.scss */
      "./src/app/pages/agregar/agregar.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_deseo_service__WEBPACK_IMPORTED_MODULE_2__["DeseoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AgregarPage);
    /***/
  },

  /***/
  "./src/app/services/deseo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/deseo.service.ts ***!
    \*******************************************/

  /*! exports provided: DeseoService */

  /***/
  function srcAppServicesDeseoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeseoService", function () {
      return DeseoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_lista_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/lista.model */
    "./src/app/models/lista.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeseoService = /*#__PURE__*/function () {
      function DeseoService() {
        _classCallCheck(this, DeseoService);

        // const lista1 = new Lista('Hacer las compras');
        // const lista2 = new Lista('Terminar el curso de Ionic');
        this.listas = []; // this.listas.push(lista1, lista2);

        this.cargarListas();
      }

      _createClass(DeseoService, [{
        key: "nuevaLista",
        value: function nuevaLista(titulo) {
          var nuevaLista = new _models_lista_model__WEBPACK_IMPORTED_MODULE_1__["Lista"](titulo);
          this.listas.push(nuevaLista);
          this.insertarListas();
          return nuevaLista.id;
        }
      }, {
        key: "obtenerLista",
        value: function obtenerLista(id) {
          id = Number(id);
          return this.listas.find(function (listaData) {
            return listaData.id === id;
          });
        }
      }, {
        key: "insertarListas",
        value: function insertarListas() {
          localStorage.setItem('data', JSON.stringify(this.listas));
        }
      }, {
        key: "cargarListas",
        value: function cargarListas() {
          if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
          }
        }
      }, {
        key: "eliminarLista",
        value: function eliminarLista(lista) {
          var index = this.listas.indexOf(lista);
          this.listas.splice(index, 1);
          this.insertarListas();
        }
      }]);

      return DeseoService;
    }();

    DeseoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DeseoService);
    /***/
  }
}]);
//# sourceMappingURL=agregar-agregar-module-es5.js.map