import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images = [
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-1.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-10.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-11.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-12.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-13.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-14.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-15.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-16.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-17.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-18.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-19.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-2.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-20.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-21.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-22.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-23.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-24.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-25.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-26.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-27.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-28.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-29.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-3.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-30.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-31.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-32.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-33.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-34.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-35.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-36.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-4.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-5.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-6.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-7.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-8.jpg",
    "../../../assets/images/wedding-photos/SP-A&amp_V-NJ-9.jpg",
]
  
  
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(image): void {
    const dialogRef = this.dialog.open(PhotoModal, {
      maxHeight: '80%',
      minHeight: '80%',
      maxWidth: '80vw',
      data: image,
      panelClass: 'modal-container', // Add a custom class here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'photo-modal',
  templateUrl: 'photo-modal.component.html',
  styleUrls: ['./photo-modal.scss']
})
export class PhotoModal {

  constructor(
    public dialogRef: MatDialogRef<PhotoModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    ngOnInit(){
      // this.dialogRef.updateSize('80%', '80%');
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
