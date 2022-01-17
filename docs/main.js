(self["webpackChunkhome"] = self["webpackChunkhome"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/section-container/section-container.component */ 9045);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @clr/angular */ 8663);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/resume/resume.component */ 6837);
/* harmony import */ var _components_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/libraries/libraries.component */ 7668);
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/articles/articles.component */ 9013);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);













const _c0 = ["scrollingContainer"];
const _c1 = function (a0) { return { "active": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'home';
        this.components = [];
        this.activeComponent = '';
        this.components.push({
            component: 'about',
            partialVisible: false,
            fullVisible: false
        }, {
            component: 'resume',
            partialVisible: false,
            fullVisible: false
        }, 
        // {
        //   component: 'work',
        //   partialVisible: false,
        //   fullVisible: false
        // },
        {
            component: 'npm',
            partialVisible: false,
            fullVisible: false
        }, {
            component: 'articles',
            partialVisible: false,
            fullVisible: false
        }, {
            component: 'projects',
            partialVisible: false,
            fullVisible: false
        });
    }
    ngOnInit() {
        var _a;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)((_a = this.scrollContainer) === null || _a === void 0 ? void 0 : _a.nativeElement, 'scroll').
            pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100)).
            subscribe(e => {
            this.onWindowScroll();
        });
    }
    ngAfterViewInit() {
        this.onWindowScroll();
    }
    visibilityToggle(component, type, visibility) {
        const comp = this.components.find(c => c.component === component);
        if (comp) {
            if (type === 'partial') {
                comp.partialVisible = visibility;
            }
            if (type === 'full') {
                comp.fullVisible = visibility;
            }
        }
        this.onWindowScroll();
    }
    scrollTo(id) {
        if (this.sectionContainers) {
            const comp = this.sectionContainers.find(elem => elem.nativeElement.id === id);
            if (comp) {
                comp.nativeElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    onWindowScroll() {
        const fullVisibile = this.components.find(c => c.fullVisible);
        if (fullVisibile) {
            this.activeComponent = fullVisibile.component;
        }
        else {
            const partialVisible = this.components.filter(c => c.partialVisible);
            if (partialVisible.length >= 2) {
                // console.log(`Visible component is ${partialVisible[1].component}`);
                this.activeComponent = partialVisible[1].component;
            }
            else if (partialVisible.length >= 1) {
                // console.log(`Visible component is ${partialVisible[0].component}`);
                this.activeComponent = partialVisible[0].component;
            }
            else {
                // console.log(`No Change in visibility`);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_0__.SectionContainerComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.scrollContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sectionContainers = _t);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, decls: 53, vars: 21, consts: [[1, "branding"], ["href", "javascript:void(0)"], [1, "title"], [1, "content-container"], [1, "content-area"], ["scrollingContainer", ""], [1, "scrolling-contents"], ["id", "about", 3, "title", "partialVisible", "fullVisible"], ["id", "resume", 3, "title", "partialVisible", "fullVisible"], ["id", "npm", 3, "title", "partialVisible", "fullVisible"], ["id", "articles", 3, "title", "partialVisible", "fullVisible"], ["id", "projects", 3, "title", "partialVisible", "fullVisible"], [1, "sidenav", 3, "clr-nav-level"], [1, "sidenav-content"], [1, "nav-group"], [1, "image-container"], ["src", "./assets/images/my-image.jpg", "alt", "", 1, "my-photo"], [1, "my-name"], [1, "social-icons"], ["href", "https://www.linkedin.com/in/sureshnagar/", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://www.facebook.com/suresh.nagar.12/", "target", "_blank", 1, "fa", "fa-facebook"], ["href", "https://twitter.com/SureshNagar21", "target", "_blank", 1, "fa", "fa-twitter"], ["href", "https://github.com/nagarsuresh", "target", "_blank", 1, "fa", "fa-github"], [1, "nav-list"], [1, "nav-link", 3, "ngClass", "click"], ["shape", "user"], ["shape", "file"], ["shape", "blocks-group"], ["shape", "form"], ["shape", "applications"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "clr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Suresh Nagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "main", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "app-section-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("partialVisible", function AppComponent_Template_app_section_container_partialVisible_10_listener($event) { return ctx.visibilityToggle("about", "partial", $event); })("fullVisible", function AppComponent_Template_app_section_container_fullVisible_10_listener($event) { return ctx.visibilityToggle("about", "full", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-section-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("partialVisible", function AppComponent_Template_app_section_container_partialVisible_12_listener($event) { return ctx.visibilityToggle("resume", "partial", $event); })("fullVisible", function AppComponent_Template_app_section_container_fullVisible_12_listener($event) { return ctx.visibilityToggle("resume", "full", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-section-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("partialVisible", function AppComponent_Template_app_section_container_partialVisible_14_listener($event) { return ctx.visibilityToggle("npm", "partial", $event); })("fullVisible", function AppComponent_Template_app_section_container_fullVisible_14_listener($event) { return ctx.visibilityToggle("npm", "full", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "app-section-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("partialVisible", function AppComponent_Template_app_section_container_partialVisible_16_listener($event) { return ctx.visibilityToggle("articles", "partial", $event); })("fullVisible", function AppComponent_Template_app_section_container_fullVisible_16_listener($event) { return ctx.visibilityToggle("articles", "full", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-section-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("partialVisible", function AppComponent_Template_app_section_container_partialVisible_18_listener($event) { return ctx.visibilityToggle("projects", "partial", $event); })("fullVisible", function AppComponent_Template_app_section_container_fullVisible_18_listener($event) { return ctx.visibilityToggle("projects", "full", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Suresh Nagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_a_click_34_listener() { return ctx.scrollTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "clr-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_a_click_38_listener() { return ctx.scrollTo("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "clr-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_a_click_42_listener() { return ctx.scrollTo("npm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "clr-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " NPM Libraries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_a_click_46_listener() { return ctx.scrollTo("articles"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "clr-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, " Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_a_click_50_listener() { return ctx.scrollTo("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "clr-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, " Github Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "NPM Libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Github Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("clr-nav-level", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, ctx.activeComponent === "about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c1, ctx.activeComponent === "resume"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c1, ctx.activeComponent === "npm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c1, ctx.activeComponent === "articles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c1, ctx.activeComponent === "projects"));
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_9__.ClrMainContainer, _clr_angular__WEBPACK_IMPORTED_MODULE_9__.MainContainerWillyWonka, _clr_angular__WEBPACK_IMPORTED_MODULE_9__.ClrHeader, _clr_angular__WEBPACK_IMPORTED_MODULE_9__.NavDetectionOompaLoompa, _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_0__.SectionContainerComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__.ResumeComponent, _components_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_3__.LibrariesComponent, _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__.ArticlesComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _clr_angular__WEBPACK_IMPORTED_MODULE_9__.ClrNavLevel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _clr_angular__WEBPACK_IMPORTED_MODULE_9__.ClrIconCustomTag], styles: [".scrolling-contents[_ngcontent-%COMP%] {\n  height: 5000px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  line-height: 2rem;\n  grid-gap: 12px;\n  gap: 12px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  transition: color 0.3s;\n}\n\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.nav-link[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]   cds-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.my-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 150px;\n  border: 8px solid;\n}\n\n.my-name[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 20px;\n  color: white;\n  font-weight: 600;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.image-container[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  grid-gap: 24px;\n  gap: 24px;\n  margin-bottom: 3rem;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLGVBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsaW5nLWNvbnRlbnRzIHtcbiAgaGVpZ2h0OiA1MDAwcHg7XG59XG5cbi5zaWRlbmF2IC5uYXYtZ3JvdXAgLm5hdi1saXN0IC5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGdhcDogMTJweDtcbn1cblxuLnNpZGVuYXYgLm5hdi1ncm91cCAubmF2LWxpc3QgLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5uYXYtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWxpbmsge1xuICBjbHItaWNvbixcbiAgY2RzLWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxufVxuXG4ubXktcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQ7XG59XG5cbi5teS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuc29jaWFsLWljb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clr/angular */ 8663);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/section-container/section-container.component */ 9045);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resume/resume.component */ 6837);
/* harmony import */ var _components_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/libraries/libraries.component */ 7668);
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/articles/articles.component */ 9013);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/work/work.component */ 4060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _cds_core_alert_register_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cds/core/alert/register.js */ 2429);
/* harmony import */ var _components_resume_timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resume/timeline-card/timeline-card.component */ 8443);
/* harmony import */ var _cds_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @cds/angular */ 1505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _clr_angular__WEBPACK_IMPORTED_MODULE_13__.ClarityModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _cds_angular__WEBPACK_IMPORTED_MODULE_16__.CdsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_2__.SectionContainerComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__.ResumeComponent,
        _components_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_5__.LibrariesComponent,
        _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_6__.ArticlesComponent,
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent,
        _components_work_work_component__WEBPACK_IMPORTED_MODULE_8__.WorkComponent,
        _components_resume_timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_10__.TimelineCardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _clr_angular__WEBPACK_IMPORTED_MODULE_13__.ClarityModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _cds_angular__WEBPACK_IMPORTED_MODULE_16__.CdsModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 34, vars: 0, consts: [[1, "personal-details", "break-word"], [1, "clr-row"], [1, "clr-col-md-6", "clr-col-sm-12"], [2, "padding-left", "6px"], ["href", "tel:+1-408-498-2168"], ["href", "mailto:nagar.suresh@gmail.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UI Architect with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "18+ years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " of experience in design, development and maintenance of enterprise web applications using web technologies like Typescript, Javascript, HTML, CSS, Angular, RxJS, Redux, NgRx, Java, Rest, ExtJS, ES5/6, Spring, JPA and MySql etc\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "14+ years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " of full stack experience in architecting and development of scalable and testable solutions under aggressive timelines.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " +1 (408) 498 2168");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " nagar.suresh@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fremont California");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Visa Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "H1B (EAD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 2rem;\n}\n[_nghost-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n}\n.personal-details[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  padding: 5rem 0rem 0 0;\n  width: 100%;\n  font-size: 20px;\n}\n.personal-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.personal-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQU1BO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUNFLHFCQUFBO0FBRko7QUFJRTtFQUNFLHFCQUFBO0FBRkoiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuICBzdHJvbmcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5cblxuLnBlcnNvbmFsLWRldGFpbHMge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogNXJlbSAwcmVtIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 9013:
/*!***********************************************************!*\
  !*** ./src/app/components/articles/articles.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesComponent": () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function ArticlesComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
} }
function ArticlesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticlesComponent_div_0_span_1_Template, 1, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", link_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1 == null ? null : link_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", link_r1 == null ? null : link_r1.previewObj == null ? null : link_r1.previewObj.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1 == null ? null : link_r1.previewObj == null ? null : link_r1.previewObj.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.url, " ");
} }
class ArticlesComponent {
    constructor(http) {
        this.http = http;
        this.LINK_PREVIEW_KEY = 'd4f708d8a851da0ce92c63d6c5a8be33';
        this.links = [
            {
                url: 'https://medium.com/@naagarsuresh78/multiple-undo-using-ngrx-e71cb44be3b5',
                loading: false,
                title: 'Multiple Undo using NgRx',
                previewObj: {
                    image: 'https://miro.medium.com/max/1400/1*TuxGvHQmigjE8kmwcodFFg.jpeg',
                    description: 'An article about implementing multiple undo functionality in UI.  Using metaReducers maintain stack of previous ngrx states to enable multiple state undos'
                }
            },
            {
                url: 'https://medium.com/@naagarsuresh78/rxify-webworker-communication-in-angular8-b0cddbdcf2e',
                loading: false,
                title: 'WebWorker Communication using RxJS',
                previewObj: {
                    image: 'https://miro.medium.com/max/1400/0*q6CXm6s0CM1bAoEQ',
                    description: 'An article about communication with web worker using RxJs.  A conventional way of communicating with web worker is using postMessage which is difficult to manage.  This articles explains on how to expose a worker as RxJs Subject.'
                }
            },
            {
                url: 'https://medium.com/@naagarsuresh78/handling-keyboard-shortcuts-in-angular-bd4587787375',
                loading: false,
                title: 'Handling keyboard shortcuts in Angular',
                previewObj: {
                    image: 'https://miro.medium.com/max/1400/1*GJdxPHqphXkuLCZEB47q1g.jpeg',
                    description: 'How to handle and implement keyboard shortcuts and hotkeys in Angular.  This Article explains how to angularize the popular library "mousetrap" and hide the complexity of event binding under Angular Directives'
                }
            }
        ];
        // this.links.forEach((link, index) => this.getPreview(link.url, index));
    }
    ngOnInit() {
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ArticlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "spinner spinner-sm", 4, "ngIf"], ["target", "_blank", 1, "card", "clickable"], [1, "card-block"], [1, "card-title"], [1, "card-img"], ["width", "400"], [1, "card-text"], [1, "card-text", "link-url"], [1, "spinner", "spinner-sm"]], template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticlesComponent_div_0_Template, 13, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 500px);\n  grid-column-gap: 2rem;\n  column-gap: 2rem;\n  align-items: center;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.link-url[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUVBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGIiwiZmlsZSI6ImFydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNTAwcHgpO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtaW1nIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuLmxpbmstdXJsIHtcbiAgY29sb3I6ICNmYWZhZmE7XG59XG5cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7668:
/*!*************************************************************!*\
  !*** ./src/app/components/libraries/libraries.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibrariesComponent": () => (/* binding */ LibrariesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function LibrariesComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
} }
function LibrariesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LibrariesComponent_div_0_span_1_Template, 1, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", link_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1 == null ? null : link_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", link_r1 == null ? null : link_r1.previewObj == null ? null : link_r1.previewObj.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1 == null ? null : link_r1.previewObj == null ? null : link_r1.previewObj.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.url, " ");
} }
class LibrariesComponent {
    constructor(http) {
        this.http = http;
        this.LINK_PREVIEW_KEY = 'd4f708d8a851da0ce92c63d6c5a8be33';
        this.links = [
            {
                url: 'https://www.npmjs.com/package/ngx-mousetrap',
                loading: false,
                title: 'ngx-mousetrap',
                previewObj: {
                    image: './assets/icons/npm-logo.png',
                    description: 'A convenient Angular wrapper over mousetrap library to hide complexity and expose Angular Directive and Services'
                }
            },
            {
                url: 'https://www.npmjs.com/package/stack-source-mapper',
                loading: false,
                title: 'stack-source-mapper',
                previewObj: {
                    image: './assets/icons/npm-logo.png',
                    description: 'Production exception stack trace is often non readable as source maps are not bundled with app.  This library can translate a production stack to meaningful stack using offline/hidden source maps'
                }
            },
            {
                url: 'https://www.npmjs.com/package/rxify-webworker',
                title: 'rxify-webworker',
                loading: false,
                previewObj: {
                    image: './assets/icons/npm-logo.png',
                    description: 'An RxJS library to communicate with WebWorkers using Observables and hide all the complexities of dealing with worker postMessaging.'
                }
            },
        ];
        // this.links.forEach((link, index) => this.getPreview(link.url, index));
    }
    ngOnInit() {
    }
}
LibrariesComponent.ɵfac = function LibrariesComponent_Factory(t) { return new (t || LibrariesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
LibrariesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibrariesComponent, selectors: [["app-libraries"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "spinner spinner-sm", 4, "ngIf"], ["target", "_blank", 1, "card", "clickable"], [1, "card-block"], [1, "card-title"], [1, "card-img"], [1, "card-text"], [1, "card-text", "link-url"], [1, "spinner", "spinner-sm"]], template: function LibrariesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LibrariesComponent_div_0_Template, 13, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 500px);\n  grid-column-gap: 2rem;\n  column-gap: 2rem;\n  align-items: center;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.link-url[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFFQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERiIsImZpbGUiOiJsaWJyYXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA1MDBweCk7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1pbWcge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubGluay11cmwge1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cblxuLmNhcmQge1xuICAvLyBtYXgtd2lkdGg6IDQ1MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 260, vars: 0, consts: [[1, "project"], [1, "project-info"], [2, "margin-top", "0.5rem"], [1, "repo-url"], ["href", "https://github.com/nagarsuresh/angular-threejs"], [1, "project-demo"], ["href", "https://nagarsuresh.github.io/angular-threejs/#/solar-system", "target", "_blank", 1, "card", "clickable", "demo-card"], [1, "card-img"], ["src", "./assets/images/solar-system.png", "alt", "", 1, "image"], [1, "card-block"], [1, "card-text", "link-url"], ["href", "https://github.com/nagarsuresh/clarity-tooltip-structural-directive"], ["href", "https://nagarsuresh.github.io/clarity-tooltip-structural-directive/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/tooltip-demo.png", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/ngrx-multiple-undo"], ["href", "https://nagarsuresh.github.io/ngrx-multiple-undo/ngrx-multiple-undo/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "https://miro.medium.com/max/700/1*TuxGvHQmigjE8kmwcodFFg.jpeg", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/ngx-mousetrap-angular"], ["href", "https://nagarsuresh.github.io/ngx-mousetrap-angular/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "https://miro.medium.com/max/700/1*GJdxPHqphXkuLCZEB47q1g.jpeg", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/clarity-scrolling-tab"], ["href", "https://nagarsuresh.github.io/clarity-scrolling-tab/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/scrolling-tabs.png", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/clarity-wrapper-grid"], ["href", "https://nagarsuresh.github.io/clarity-wrapper-grid/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/grid-wrapper.png", "alt", "", 1, "image"], ["href", "https://www.udemy.com/course/the-complete-guide-to-angular-2/"], ["href", "https://github.com/nagarsuresh/ng2-recipe-book"], ["href", "https://nagarsuresh.github.io/ng2-recipe-book/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "http://www.texaschicken.com.sg/menu/sides-french-fries.png", "alt", "", 1, "image"], [2, "background-color", "#0F171C", "border-width", "0", "height", "1px", "margin-top", "4rem"], ["href", "https://github.com/nagarsuresh/rxify-worker-angular"], ["href", "https://nagarsuresh.github.io/rxify-worker-angular/rxify-worker-angular/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "https://miro.medium.com/max/700/1*ttkbTh1esTmiO7RBUDP8ww.gif", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/interframe-communication-rxjs"], ["href", "https://nagarsuresh.github.io/interframe-communication-rxjs/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/inter-frame.png", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/guessword"], ["href", "https://nagarsuresh.github.io/guessword/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/guessword-game.png", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/playnine"], ["href", "https://nagarsuresh.github.io/playnine/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/playnine-game.png", "alt", "", 1, "image"], ["href", "https://github.com/nagarsuresh/ng2-in-extjs"], ["href", "https://nagarsuresh.github.io/ng2-in-extjs/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["href", "https://github.com/nagarsuresh/extjs-typeahead"], ["href", "https://nagarsuresh.github.io/extjs-typeahead/", "target", "_blank", 1, "card", "clickable", "demo-card"], ["src", "./assets/images/typeahead-extjs.png", "alt", "", 1, "image"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular + ThreeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Various ThreeJS examples with Angular and Typescript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular, ThreeJS, RxJs, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "https://github.com/nagarsuresh/angular-threejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " https://nagarsuresh.github.io/angular-threejs/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Structural Directive over VMware Clarity Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "An Angular structural directive wraps VMware Clarity Tooltip component to add tooltip on any element without boilerplate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Angular, Clarity, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "https://github.com/nagarsuresh/clarity-tooltip-structural-directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " https://nagarsuresh.github.io/clarity-tooltip-structural-directive/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "NgRx Multiple Undos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Implementing multiple undos using ngrx meta reducers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Angular, NgRx, Clarity, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "https://github.com/nagarsuresh/ngrx-multiple-undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " https://nagarsuresh.github.io/ngrx-multiple-undo/ngrx-multiple-undo/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "ngx-mousetrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "An Angular wrapper over a famour mousetrap library to expose it as Angular Directives and Service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Angular, mousetrap, RxJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "https://github.com/nagarsuresh/ngx-mousetrap-angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " https://nagarsuresh.github.io/ngx-mousetrap-angular/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Scrolling Tab Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "A scrolling tab container where overflow tabs scroll in the header rather than getting cut of display in dropdown menu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Angular, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "https://github.com/nagarsuresh/clarity-scrolling-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " https://nagarsuresh.github.io/clarity-scrolling-tab/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Configuration Driven Data Ggrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "A configuration based data grid built on top of VMWare Clarity Datagrid.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Angular, Clarity, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "https://github.com/nagarsuresh/clarity-wrapper-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " https://nagarsuresh.github.io/clarity-wrapper-grid/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Recipe App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Based on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Angular - The Complete Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Udemy course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Angular, RxJs, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "https://github.com/nagarsuresh/ng2-recipe-book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " https://nagarsuresh.github.io/ng2-recipe-book/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "RxJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "RxJs Webworker Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "An RxJS library over webworker to hide complexities of post messaging and exposing webworker as Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "RxJs, Typescript, WebWorker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "https://github.com/nagarsuresh/rxify-worker-angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " https://nagarsuresh.github.io/rxify-worker-angular/rxify-worker-angular/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Interframe communication using RxJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Communication channel in multiple frames using RxJs. A wrapper over native window post messaging api. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "RxJs, Javscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " https://github.com/nagarsuresh/interframe-communication-rxjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " https://nagarsuresh.github.io/interframe-communication-rxjs/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Guessword Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "A game to guess a system chosen word in 15 attempts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "React, Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " https://github.com/nagarsuresh/guessword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " https://nagarsuresh.github.io/guessword/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Playnine Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "A game to match the system choosen number with given set of numbers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "React, Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " https://github.com/nagarsuresh/playnine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " https://nagarsuresh.github.io/playnine/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "ExtJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Loading Angular Module inside ExtJS Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Loading multiple angular modules in ExtJS Application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "ExtJS, Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " https://github.com/nagarsuresh/ng2-in-extjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " https://nagarsuresh.github.io/ng2-in-extjs/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "ExtJS Typeahead plugin for TextArea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "A typeahead plugin in ExtJS for a text area where suggestion can be provided at any location. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "ExtJS, Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " https://github.com/nagarsuresh/extjs-typeahead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " https://nagarsuresh.github.io/extjs-typeahead/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n}\n\n.project[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  grid-gap: 1rem;\n  gap: 1rem;\n  border: 1px solid #0e161b;\n  box-shadow: 0 0.15rem 0 0 #0e161b;\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n\n.project[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n.project[_ngcontent-%COMP%]   .project-demo[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 375px;\n}\n\n.project[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.project[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.project[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.project[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  height: 200px;\n  margin: 0;\n  padding: 1rem 1rem 0 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.project[_ngcontent-%COMP%]   .link-url[_ngcontent-%COMP%] {\n  color: #fafafa;\n  text-align: center;\n}\n\n.project[_ngcontent-%COMP%]   .repo-url[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDRTtFQUNFLE9BQUE7QUFDSjs7QUFDRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBRUk7RUFDRSxZQUFBO0FBQU47O0FBSUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBSkoiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2plY3Qge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlMTYxYjtcbiAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDAgMCAjMGUxNjFiO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnByb2plY3QtaW5mbyB7XG4gICAgZmxleDogMjtcbiAgfVxuICAucHJvamVjdC1kZW1vIHtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogMzc1cHg7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5jYXJkLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuaW1hZ2Uge1xuICAgICAgd2lkdGg6IDE1MHB4XG4gICAgfVxuICB9XG5cbiAgLmRlbW8tY2FyZCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmxpbmstdXJsIHtcbiAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucmVwby11cmwge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gIH1cblxufVxuIl19 */"] });


/***/ }),

/***/ 6837:
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline-card/timeline-card.component */ 8443);


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 65, vars: 0, consts: [[1, "education"], [2, "background-color", "#0F171C", "border-width", "0", "height", "1px"], ["title", "Master of Computer Applications", "timeRange", "1998 - 2001", "institueName", "Unversity of Jammu. Jammu & Kashmir. India"], ["title", "Bachelor of Commerce", "timeRange", "1995 - 1998", "institueName", "Unversity of Jammu.  Jammu & Kashmir. India"], [1, "experience", 2, "margin-top", "3rem"], ["title", "Staff Engineer II", "timeRange", "2016 - PRESENT", "institueName", "VMware", "location", "Palo Alto, California", "instituteIconClass", "vmware"], ["href", "https://docs.vmware.com/en/VMware-NSX-Intelligence/1.1/user-guide/GUID-EF27B5EB-BD83-4AC4-81C9-45D0D7E07AB6.html", "target", "_blank", 1, "padded-link"], ["href", "https://www.youtube.com/watch?v=rNSL0IrIX_M", "target", "_blank", 1, "padded-link"], [2, "padding-top", "12px"], [2, "font-size", "20px"], ["href", "https://blogs.vmware.com/networkvirtualization/2018/05/nsx641-html5-ui.html/", "target", "_blank", 1, "padded-link"], ["title", "Principal Software Engineer", "timeRange", "2013 - 2016", "institueName", "Nexant Inc", "location", "Foster City, California", "instituteIconClass", "nexant"], ["title", "Senior Technical Manager", "timeRange", "2005 - 2012", "institueName", "Infosys Ltd", "location", "Chandigarh, India", "instituteIconClass", "infosys"], ["title", "Member Software Development Group", "timeRange", "2003 - 2005", "institueName", "Quark Software Inc", "location", "Chandigarh, India", "instituteIconClass", "quark"], ["title", "Senior Software Engineer", "timeRange", "2001 - 2003", "institueName", "Aithent Inc", "location", "Gurugram, India", "instituteIconClass", "aithent"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-timeline-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Master of computer applications from University of Jammu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gold Medalist of batch 1998-2001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-timeline-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Professional Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-timeline-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "UI Architect and Lead Engineer for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "NSX Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "https://docs.vmware.com/en/VMware-NSX-Intelligence/1.1/user-guide/GUID-EF27B5EB-BD83-4AC4-81C9-45D0D7E07AB6.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "https://www.youtube.com/watch?v=rNSL0IrIX_M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "u", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Other projects worked on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "UI Architect and Lead developer for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " NSX-T on VMC (Vmware on Cloud)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Lead developer for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " NSX Firewall UI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " https://blogs.vmware.com/networkvirtualization/2018/05/nsx641-html5-ui.html/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "app-timeline-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "UI Architect and Lead Engineer for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "DSM Central iEnergy Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "app-timeline-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Senior Technical Manager for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Finacle Banking Solution (Edgeverve)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "app-timeline-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Senior Software Engineer in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Quark Publication Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "app-timeline-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Senior Software Engineer involved in development and implementation of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "SBS (State Based System)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_0__.TimelineCardComponent], styles: ["li[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn0iXX0= */"] });


/***/ }),

/***/ 8443:
/*!****************************************************************************!*\
  !*** ./src/app/components/resume/timeline-card/timeline-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineCardComponent": () => (/* binding */ TimelineCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function TimelineCardComponent_em_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.institueName);
} }
function TimelineCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.instituteIconClass);
} }
function TimelineCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r2.location, ")");
} }
const _c0 = ["*"];
class TimelineCardComponent {
    constructor() {
        this.title = '';
        this.timeRange = '';
        this.institueName = '';
        this.instituteIconClass = '';
        this.location = '';
    }
    get isEmployer() {
        return !!this.instituteIconClass;
    }
    ngOnInit() {
    }
}
TimelineCardComponent.ɵfac = function TimelineCardComponent_Factory(t) { return new (t || TimelineCardComponent)(); };
TimelineCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineCardComponent, selectors: [["app-timeline-card"]], hostVars: 2, hostBindings: function TimelineCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("employer", ctx.isEmployer);
    } }, inputs: { title: "title", timeRange: "timeRange", institueName: "institueName", instituteIconClass: "instituteIconClass", location: "location" }, ngContentSelectors: _c0, decls: 10, vars: 5, consts: [[1, "timeline-title"], [1, "timerange", "label", "label-success"], [1, "institute-container"], ["class", "institute-name", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "text", "break-word"], [1, "institute-name"], [3, "ngClass"], [1, "location"]], template: function TimelineCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TimelineCardComponent_em_5_Template, 2, 1, "em", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimelineCardComponent_span_6_Template, 1, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimelineCardComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.institueName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instituteIconClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["[_nghost-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5rem;\n  display: block;\n  position: relative;\n  border-left: 2px solid #ccc;\n  padding: 0 0 24px 24px;\n}\n[_nghost-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #fafafa;\n}\n[_nghost-%COMP%]   .timerange[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-radius: 0;\n}\n[_nghost-%COMP%]   .institute-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n  font-size: 18px;\n  margin-bottom: 12px;\n}\n[_nghost-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .institute-container[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  grid-gap: 12px;\n  gap: 12px;\n}\n[_nghost-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.employer[_nghost-%COMP%]   .institute-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fafafa;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50px;\n  left: -9px;\n  top: 0px;\n  background: #ccc;\n  border: 2px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQUY7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7QUFGSjtBQVFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMSjtBQVNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU5GIiwiZmlsZSI6InRpbWVsaW5lLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDAgMCAyNHB4IDI0cHg7XG5cbiAgLnRpbWVsaW5lLXRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmFmYWZhO1xuICB9XG4gIC50aW1lcmFuZ2Uge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuaW5zdGl0dXRlLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbiAgLmxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmluc3RpdHV0ZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxufVxuXG46aG9zdCguZW1wbG95ZXIpIHtcbiAgLmluc3RpdHV0ZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gIH1cbn1cblxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbGVmdDogLTlweDtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9045:
/*!*****************************************************************************!*\
  !*** ./src/app/components/section-container/section-container.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionContainerComponent": () => (/* binding */ SectionContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


const _c0 = ["*"];
class SectionContainerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = '';
        this.partialVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.fullVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // tslint:disable-next-line:variable-name
        this._show = false;
        // pick first completely visible, if none then pick second partial visible!
        const partialObserver = new IntersectionObserver((entries) => {
            const isVisible = entries[0].isIntersecting;
            this.partialVisible.emit(isVisible);
            this._show = isVisible;
        }, { threshold: 0 });
        partialObserver.observe(elementRef.nativeElement);
        const fullObserver = new IntersectionObserver((entries) => {
            const isVisible = entries[0].isIntersecting;
            this.fullVisible.emit(isVisible);
        }, { threshold: 1 });
        fullObserver.observe(elementRef.nativeElement);
    }
    get show() {
        return this._show;
    }
    ngOnInit() {
    }
}
SectionContainerComponent.ɵfac = function SectionContainerComponent_Factory(t) { return new (t || SectionContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
SectionContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionContainerComponent, selectors: [["app-section-container"]], hostVars: 2, hostBindings: function SectionContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
    } }, inputs: { title: "title" }, outputs: { partialVisible: "partialVisible", fullVisible: "fullVisible" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-block"]], template: function SectionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 3rem;\n  margin-right: 2rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0;\n  padding-bottom: 10px;\n}\n\nh1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #149ddd;\n  bottom: 0;\n  left: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-top: 0;\n  min-height: 500px;\n  padding: 0 2rem 2rem;\n  border: none;\n  box-shadow: 12px 12px 12px #0e161b;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBTEY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQU5GOztBQU9FO0VBQ0UsbUJBQUE7QUFMSiIsImZpbGUiOiJzZWN0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgLy8gb3BhY2l0eTogMDtcbn1cblxuLy8gOmhvc3QoLnNob3cpIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuLy8gfVxuXG5oMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmgxOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogIzE0OWRkZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmc6IDAgMnJlbSAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDEycHggMTJweCAxMnB4ICMwZTE2MWI7XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 4060:
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 2, vars: 0, template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _cds_core_icon_register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cds/core/icon/register.js */ 3905);
/* harmony import */ var _cds_core_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cds/core/icon */ 9713);
/* harmony import */ var _cds_core_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cds/core/icon */ 1692);






_cds_core_icon__WEBPACK_IMPORTED_MODULE_3__.ClarityIcons.addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_4__.userIcon);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map