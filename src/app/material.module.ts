import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatDialogModule
} from "@angular/material";

import { NgModule } from '@angular/core';
import {MediaDialogComponent} from "./components/shared/media-dialog/media-dialog.component";



@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule
  ],
  entryComponents: [MediaDialogComponent],
  declarations: [],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
