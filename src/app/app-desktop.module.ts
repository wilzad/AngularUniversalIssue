import { NgModule } from '@angular/core';
import { DesktopComponent } from './desktop/desktop.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:'',
        component:DesktopComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations:[
        DesktopComponent
    ],
    exports: []
  })
  export class AppDesktopModule { }