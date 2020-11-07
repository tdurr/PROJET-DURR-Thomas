import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  filterForm = new FormGroup ({
    nameFilter : new FormControl(''),
    categoryFilter : new FormControl(''),
    priceFilter : new FormControl('')
  });

  @Output() filterEvent: EventEmitter<Observable<any>> = new EventEmitter<Observable<any>>();


  constructor() { 
  }

  ngOnInit() : void {

    /*this.filterForm.valueChanges.subscribe(filterValues => {
      let filteredProducts : Observable<Product[]>;

      this.products.pipe(map( items => items.filter(
        
        // categorie
        i => i.category.includes(filterValues.categoryFilter) && 

        // prix
        (filterValues.priceFilter !== '' ? i.price <= filterValues.priceFilter : true) &&

        // nom
        i.name.includes(filterValues.nameFilter) ))).subscribe({
          next : 
          error: err => console.error(err),
          complete: () => this.filterEvent.emit(filteredProducts)
        });
      }); */

      this.filterEvent.emit(this.filterForm.valueChanges);
  }
}
