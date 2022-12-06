import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


const elements = [
  MatInputModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    elements
  ],
  exports: [elements]
})
export class MaterialModule {
}
