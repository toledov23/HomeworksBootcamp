import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../entities/item';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public dialogRef: MatDialogRef<ProductFormComponent>
  ) {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      prices: this.fb.array([], this.minLengthArray(1)),
      photos: this.fb.array([], this.minLengthArray(1))
    });
  }

  ngOnInit(): void {
    this.addPrice();
    this.addPhoto();
  }

  get prices(): FormArray {
    return this.productForm.get('prices') as FormArray;
  }

  get photos(): FormArray {
    return this.productForm.get('photos') as FormArray;
  }

  addPrice(): void {
    const priceGroup = this.fb.group({
      tag: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), this.uniqueTagValidator()]],
      price: [0, Validators.required]
    });
    this.prices.push(priceGroup);
  }

  removePrice(index: number): void {
    this.prices.removeAt(index);
  }

  addPhoto(): void {
    const photoControl = this.fb.control('', [Validators.required, this.uniquePhotoValidator()]);
    this.photos.push(photoControl);
  }

  removePhoto(index: number): void {
    this.photos.removeAt(index);
  }

  /* onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.addProduct(product);
      console.log('Product added:', product);
      this.dialogRef.close();
    }
  } */

  minLengthArray(min: number): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if (c.value.length >= min) {
        return null;
      }
      return { minLengthArray: true };
    };
  }

  uniqueTagValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const tags = this.prices.controls.map(group => group.get('tag')?.value);
      if (tags.filter(tag => tag === control.value).length > 1) {
        return { uniqueTag: true };
      }
      return null;
    };
  }

  uniquePhotoValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const photos = this.photos.controls.map(photoControl => photoControl.value);
      if (photos.filter(photo => photo === control.value).length > 1) {
        return { uniquePhoto: true };
      }
      return null;
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newItem: Item = {
        id: this.generateId(),
        title: this.productForm.value.title,
        description: this.productForm.value.description,
        prices: this.productForm.value.prices.reduce((acc: any, price: any) => {
          acc[price.tag] = price.price;
          return acc;
        }, {}),
        photos: this.productForm.value.photos.map((photo: any) => photo.url),
        offerDiscount: this.productForm.value.offerDiscount
      };

      this.productService.addProduct(newItem);
      this.dialogRef.close();
    }
  }



}
