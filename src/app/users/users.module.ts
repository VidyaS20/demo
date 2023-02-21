import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

console.log('UsersModule loaded')

const userRoutes : Routes = [
  {
    path: '', component : UsersComponent
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],

})
export class UsersModule { }
