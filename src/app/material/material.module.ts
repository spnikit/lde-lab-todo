import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";


const elements = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule
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
