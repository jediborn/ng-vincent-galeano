import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MediaDialogComponent} from "../media-dialog/media-dialog.component";



export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() items: any[]
  selected: any;

  imgUrl = environment.imgUrl;


  constructor(public dialog: MatDialog) {

  }


  openDialog(item): void {
    const dialogRef = this.dialog.open(MediaDialogComponent, {
      width: '100vw',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }



  ngOnInit() {


  }



  onSelect(item) {
    this.selected = item;


  }

  onLeave(item) {
    this.selected = !this.selected;
  }


}
