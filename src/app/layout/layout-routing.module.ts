import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
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
            {path:'student', loadChildren:'../student/student.module#StudentModule'},
            {path:'student-performance', loadChildren:'../student-performance/student-performance.module#StudentPerformanceModule'},
            {path:'group-details', loadChildren:'../group-details/group-details.module#GroupDetailsModule'}



            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
