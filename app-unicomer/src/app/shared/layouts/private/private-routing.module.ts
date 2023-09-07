import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RegisterOperationComponent } from 'src/app/pages/register-operation/register-operation.component';
import { RegisterCardComponent } from 'src/app/pages/register-card/register-card.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'registerOperation', component: RegisterOperationComponent },
      { path: 'registerCard', component: RegisterCardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
