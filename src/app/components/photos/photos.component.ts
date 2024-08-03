import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images = [
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2529.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2547-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2561.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2565.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2567.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2575.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2591-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2610.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2613.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2641.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2662-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2720.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2730.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2736.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2784.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2793.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2818-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2845-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2857.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2861-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2912.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2926-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2937.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2957.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2962-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-2991.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3000.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3060.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3090.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3118.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3129-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3161.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3172.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3184-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3213.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3218.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3234.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3395.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3409.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3425.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3435-2.jpg",
    "../../../assets/images/gallery/AllieRyannPhoto-DallasWeddingPhotographer-3445.jpg",
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
