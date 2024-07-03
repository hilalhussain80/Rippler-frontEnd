import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { productsModel } from '../../models/product.model';
import { ViewProductComponent } from "../view-product/view-product.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-listing',
    standalone: true,
    templateUrl: './product-listing.component.html',
    styleUrl: './product-listing.component.scss',
    imports: [ViewProductComponent,CommonModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductListingComponent {
 public productList:productsModel[]=[
  {
    id:1 ,
    image: '/assets/images/Image-Master.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Burberry',
    productName: 'Flowy Dress With pink and gold',
    productSize: 'Size 4',
    productPrice: '£12.00',
    productType: 'Rental'
  },
  {
    id:2,
    image: '/assets/images/Image-Master-2.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Prada',
    productName: 'Beach dress',
    productSize: 'Size 8',
    productPrice: '£12.00',
    productType: 'Rental'
  },
  {
    id:3,
    image: '/assets/images/Image-Master-1.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Bhandage',
    productName: 'Red dress for evening wear',
    productSize: 'Size 12',
    productPrice: '£12.00',
    productType: 'Rental'
  },
  {
    id:4,
    image: '/assets/images/Image-Master-3.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Parda',
    productName: 'Wedding guest',
    productSize: 'Size 12',
    productPrice: '£12.00',
    productType: 'Rental'
  },
  {
    id:5,
    image: '/assets/images/Image-Master-4.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Ansell',
    productName: 'Nightwear',
    productSize: 'Size 14',
    productPrice: '£12.00',
    productType: 'Rental'
  },
  {
    id:6,
    image: '/assets/images/Image-Master-5.png',
    discountPrice: 'RRP £129.99',
    brandName: 'Desacada',
    productName: 'Summer Dress',
    productSize: 'Size 8',
    productPrice: '£12.00',
    productType: 'Rental'
  }
 ]

}
