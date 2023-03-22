import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder.component';
import { RouterModule, Routes } from '@angular/router';

const placeholderRoutes: Routes = [
  { path: '', component: PlaceholderComponent,
   children:[
     {path:'one',component:OneComponent},
     {path:'two',component:twoComponent},
   ]
  }
]

@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(placeholderRoutes)
  ]
})
export class PlaceholderModule { }
