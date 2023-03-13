import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormtarjetaComponent } from './formtarjeta/formtarjeta.component';

const routes: Routes = [
  {
    path: '',
    component: FormtarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
