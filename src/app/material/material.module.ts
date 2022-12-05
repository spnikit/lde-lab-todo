import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


const elements = [
  MatInputModule,
  MatButtonModule
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
