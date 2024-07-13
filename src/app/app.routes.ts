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
import { GetAPIComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostAPIComponent } from './components/apiIntegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './components/directive/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './components/directive/ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './components/decorators/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';
 
export const routes: Routes = [
    //defualt route
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    }, 
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'add-emp',
                component: AddEmployeeComponent
            },
            {
                path:'signal',
                component: SignalComponent
            },
            {
                path:'data-binding',
                component:DataBindingComponent,
                canActivate: [authGuard]
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
            },
            {
                path: 'get-api',
                component: GetAPIComponent
            },
            {
                path: 'post-api',
                component: PostAPIComponent
            },
            {
                path: 'Life-cycle',
                component: LifecycleEventComponent
            },
            {
                path: 'ng-template',
                component: NgtemplateComponent
            },
            {
                path: 'ng-container',
                component: NgcontainerComponent
            },
            {
                path: 'viewChild',
                component: ViewchildComponent
            }
        
        ]
    }
   
];
