import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { RegisterOperationComponent } from '../../../pages/register-operation/register-operation.component';
import { FormsModule } from '@angular/forms';
import { RegisterCardComponent } from 'src/app/pages/register-card/register-card.component';


@NgModule({
  declarations: [
    PrivateComponent,
    NavbarComponent,
    HomeComponent,
    RegisterOperationComponent,
    RegisterCardComponent  
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class PrivateModule { }
