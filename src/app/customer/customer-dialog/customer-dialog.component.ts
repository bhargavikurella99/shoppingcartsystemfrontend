import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-customer-dialog',
  templateUrl: './customer-dialog.component.html',
})
export class CustomerDialogComponent {

  title: string;
  items: any = {
    customerName: '',
    email: '',
    gender: '',
    mobileNumber: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      this.title = this.translocoService.translate(
        'customermanagementmanagement.addTitle',
      );
    } else {
      this.title = this.translocoService.translate(
        'customermanagementmanagement.editTitle',
      );
        this.items.customerName = dialogData.customerName;
        this.items.email = dialogData.email;
        this.items.gender = dialogData.gender;
        this.items.mobileNumber = dialogData.mobileNumber;
      this.items.id = dialogData.id;
      this.items.modificationCounter = dialogData.modificationCounter;
    }
  }

  /* getTranslation(text: string): string {
    let value: string;
    this.translocoService.get(text).subscribe((res: any) => {
      value = res;
    });
    return value;
  } */
}
