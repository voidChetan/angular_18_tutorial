import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component'; 
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path:'structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'attributedirective',
        component: AttributeDirectiveComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'template-form',
        component: TemplateComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveComponent
    }

];
