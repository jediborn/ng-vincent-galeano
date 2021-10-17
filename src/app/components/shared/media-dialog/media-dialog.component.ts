import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {environment} from "../../../../environments/environment";




export interface DialogData {
  description: string;
  icon: string;
  id: any;
  img: string;
  link: string;
  name: string;
}




@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent implements OnInit {
  imgUrl = environment.imgUrl;


  constructor(public dialogRef: MatDialogRef<MediaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
