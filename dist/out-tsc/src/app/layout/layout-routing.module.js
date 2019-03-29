var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
var routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'state', loadChildren: '../state/state.module#StateModule' },
            { path: 'city', loadChildren: '../city/city.module#CityModule' },
            { path: 'school', loadChildren: '../school/school.module#SchoolModule' },
            { path: 'holiday-calendar', loadChildren: '../holiday-calendar/holiday-calendar.module#HolidayCalendarModule' },
            { path: 'student', loadChildren: '../student/student.module#StudentModule' },
            { path: 'student-performance', loadChildren: '../student-performance/student-performance.module#StudentPerformanceModule' },
            { path: 'group-details', loadChildren: '../group-details/group-details.module#GroupDetailsModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());
export { LayoutRoutingModule };
//# sourceMappingURL=layout-routing.module.js.map