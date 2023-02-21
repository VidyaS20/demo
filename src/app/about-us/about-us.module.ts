import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

console.log('aboutus module loaded')

const routes : Routes = [
  {
    path : '' , component : AboutUsComponent
  }
]

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
