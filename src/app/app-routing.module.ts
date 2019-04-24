import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





 
  
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      loadChildren: () => new Promise(
        resolve => {
          
          
          (require as any).ensure([], require => {
              if(1===1){ //I need to conditionally load two modules here
              resolve(require('./app-desktop.module').AppDesktopModule);
              }
            
          });
        }
      )
    }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
