import { Component, Input } from '@angular/core';
import { productsModel } from '../../models/product.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {
 @Input () product: productsModel=new productsModel();
}
