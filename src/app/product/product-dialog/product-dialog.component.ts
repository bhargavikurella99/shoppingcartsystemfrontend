import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-product-dialog',
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent {

  title: string;
  items: any = {
    productName: '',
    quantity: '',
    price: '',
    customerId: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      this.title = this.translocoService.translate(
        'productmanagementmanagement.addTitle',
      );
    } else {
      this.title = this.translocoService.translate(
        'productmanagementmanagement.editTitle',
      );
        this.items.productName = dialogData.productName;
        this.items.quantity = dialogData.quantity;
        this.items.price = dialogData.price;
        this.items.customerId = dialogData.customerId;
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
