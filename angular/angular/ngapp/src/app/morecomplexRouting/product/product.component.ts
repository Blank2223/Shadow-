import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  goToProduct(id: string):void{
    this.router.navigate(['./',id], {relativeTo: this.route});
  }
}
