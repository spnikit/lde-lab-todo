import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


const elements = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
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
