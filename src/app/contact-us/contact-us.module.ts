import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

console.log('ContactUsModule loaded')

const contactRoute : Routes = [
  {
    path: '', component: ContactUsComponent
  }
]

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(contactRoute)
  ]
})
export class ContactUsModule { }
