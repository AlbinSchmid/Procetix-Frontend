import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { url } from 'inspector';

@Component({
  selector: 'app-products',
  imports: [
    ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
products = [
  {
    name: 'Prozessoptimierung',
    description: 'Effiziente Optimierung Ihrer Geschäftsprozesse.',
    imageUrl: '/assets/img/product-1.png',
    url: '/process-improvement'
  },
  {
    name: 'Marketing',
    description: 'Zielgerichtetes Online-Marketing für mehr Kunden.',
    imageUrl: '/assets/img/product-2.png',
    url: '/'
  },
  {
    name: 'Webseitenerstellung und -optimierung',
    description: 'Professionelle Webseiten für Ihren Online-Erfolg.',
    imageUrl: '/assets/img/product-3.png',
    url: '/'
  },
]
}
