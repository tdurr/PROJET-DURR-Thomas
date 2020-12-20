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
      this.filterEvent.emit(this.filterForm.valueChanges);
  }
}
