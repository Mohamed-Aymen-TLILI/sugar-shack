import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {FilterPipe} from "./filter.pipe";
import {TranslateTypePipe} from "./translate-type.pipe";


const dependencies = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatSnackBarModule,
  MatInputModule,
  ReactiveFormsModule,
  MatTableModule,
  MatMenuModule,
  HttpClientModule,
  MatSidenavModule,
  MatBadgeModule,
  MatDialogModule,
];

@NgModule({
  declarations: [FilterPipe, TranslateTypePipe],
  imports: [dependencies],
  exports: [...dependencies, FilterPipe, TranslateTypePipe],
})
export class SharedModule { }
