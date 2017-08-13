webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>Proyecto</h1>\n  <h2>Exportar datos a una columna</h2>\n  <p>Exporte los datos de un excel hasta una fila llena de asteriscos </p>\n\n  <label class=\"custom-file\">\n    <input type=\"file\" id=\"file\" class=\"custom-file-input\" (change)=\"eventoCuandoCambieArchivo($event)\" multiple=\"false\">\n    <span class=\"custom-file-control btn btn-info\" style=\"background-color:#32a1ff;color: white; \">Elegir archivos</span>\n  </label>\n  <br>\n  <br>\n  <h3 *ngIf=\"datosExcel.length!=0\"> Datos en el excel:</h3>\n  <br>\n  <table class=\"table table-striped sjs-table\">\n    <tr *ngFor=\"let fila of datosExcel\">\n      <td *ngFor=\"let valorColumna of fila\">\n        {{valorColumna}}\n      </td>\n    </tr>\n  </table>\n\n  <br>\n\n  <button class=\"btn btn-outline-primary\" (click)=\"export()\">Exportar los datos</button>\n\n</div>\n\n\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }
    ;
    return buf;
}
var AppComponent = (function () {
    function AppComponent() {
        this.datosExcel = [];
        this.opcionesDeGuardado = {
            bookType: 'xlsx',
            type: 'binary'
        };
        this.nombreArchivo = "Proyecto.xlsx";
    }
    AppComponent.prototype.eventoCuandoCambieArchivo = function (evento) {
        var _this = this;
        /* wire up file reader */
        var archivo = (evento.target);
        if (archivo.files.length != 1) {
            throw new Error("No se puede subir mas de un archivo, lo siento.");
        }
        ;
        var lectorDeArchivos = new FileReader();
        lectorDeArchivos.onload = function (eventoLectura) {
            /* read workbook */
            var archivoFormatoBinario = eventoLectura.target.result;
            var hojaExcel = __WEBPACK_IMPORTED_MODULE_1_xlsx__["read"](archivoFormatoBinario, { type: 'binary' });
            /* grab first sheet */
            var nombrePrimeraHojaExcel = hojaExcel.SheetNames[0];
            var primeraHojaExcel = hojaExcel.Sheets[nombrePrimeraHojaExcel];
            /* save data */
            _this.datosExcel = (__WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].sheet_to_json(primeraHojaExcel, { header: 1 }));
        };
        lectorDeArchivos.readAsBinaryString(archivo.files[0]);
    };
    AppComponent.prototype.export = function () {
        /* generate worksheet */
        var hojaDeTrabajoNueva = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].aoa_to_sheet(this.datosExcel);
        var nuevoArreglo = Object.keys(hojaDeTrabajoNueva);
        var letras = [];
        nuevoArreglo.forEach(function (valor) {
            var valorSoloLetras = valor.match(/[A-z]/g);
            var noEstaEnElArregloDeLetrasYNoEsref = letras.find(function (valorArreglo) {
                var esIgualQueElArreglo = valorArreglo[0] == valorSoloLetras;
                var noEsref = valorArreglo[0] == 'r';
                return (esIgualQueElArreglo || noEsref);
            });
            if (!noEstaEnElArregloDeLetrasYNoEsref) {
                letras.push(valorSoloLetras[0]);
            }
            else {
                // return false;
            }
        });
        letras.pop();
        var numeroMayor = 0;
        nuevoArreglo.forEach(function (objeto) {
            var valor = objeto;
            var letras = valor.match(/[A-z]+/g);
            var numero = Number(valor.replace(letras, ''));
            if (numero >= numeroMayor) {
                numeroMayor = numero;
            }
        });
        console.log('NumeroMayor', numeroMayor);
        var columna = [];
        for (var i = 0; i < letras.length; i++) {
            for (var j = 0; j < numeroMayor; j++) {
                var celda = hojaDeTrabajoNueva[letras[i] + (j + 1).toString()];
                if (celda.v != '*' && j != 0) {
                    columna.push(celda.v);
                }
            }
        }
        var datosFinales = [];
        console.log(this.datosExcel);
        console.log(columna);
        datosFinales.push(columna);
        console.log('datosFinales', datosFinales);
        var contador = 0;
        var arreglo2 = [];
        columna.forEach(function (valor, indice) {
            var arreglo = [];
            arreglo.push(valor);
            arreglo2.push(arreglo);
            // console.log(arreglo.push(valor));
            // datosFinales[indice]=
            contador++;
        });
        console.log(arreglo2);
        var hojaDeTrabajoNuevaValoresUnaFila = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].aoa_to_sheet(arreglo2);
        /* generate workbook and add the worksheet */
        var excelNuevo = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].book_append_sheet(excelNuevo, hojaDeTrabajoNuevaValoresUnaFila, 'Datos en una Fila');
        /* save to file */
        var archivoExcelNuevoACrearse = __WEBPACK_IMPORTED_MODULE_1_xlsx__["write"](excelNuevo, this.opcionesDeGuardado);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(new Blob([s2ab(archivoExcelNuevoACrearse)]), this.nombreArchivo);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(143),
        styles: [__webpack_require__(138)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[175]);
//# sourceMappingURL=main.bundle.js.map