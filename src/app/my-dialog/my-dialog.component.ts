import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AvailabilityPipe } from "../availability.pipe";


@Component({
    selector: 'app-my-dialog',
    standalone: true,
    templateUrl: './my-dialog.component.html',
    styleUrl: './my-dialog.component.css',
    encapsulation: ViewEncapsulation.None, // This is optional based on your styling needs
    imports: [CommonModule, AvailabilityPipe]
})
export class MyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
