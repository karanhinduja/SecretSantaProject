import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent implements OnInit {

  @Input()
  public wishlist: Array<any> = [];
  @Input()
  public enableAction: boolean = false;
  @Output() emitOnSubmit = new EventEmitter<string>();

  // private wishListFormated: Array<any> = [];
  list: FormArray;
  wishForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {


    this.wishForm = this.formBuilder.group({
      list: this.formBuilder.array([])
    });
  }
  


  ngOnInit() {
    this.list = this.wishForm.get('list') as FormArray;
    if (this.wishlist && this.wishlist.length > 0) {
      for (let wish in this.wishlist) {
        this.list.push(this.createItem(this.wishlist[wish].Description));
        // this.wishListFormated.push({ placeHolder: `Wish ${wish + 1}...`, value: wish });
      }
    }
    // if (this.wishListFormated.length < 3) {
    //   while (this.wishListFormated.length !== 3) {
    //     this.wishListFormated.push({ placeHolder: `Wish ${this.wishListFormated.length + 1}...`, value: '' });
    //   }
    // }
    if (this.list.length < 3) {
      while (this.list.length !== 3) {
        this.list.push(this.createItem(''));
      }
    }

  }

  createItem(value): FormGroup {
    return this.formBuilder.group({
      Description: value
    });
  }
  onSubmit() {
    // console.log(this.wishForm.value);
    this.emitOnSubmit.emit(this.wishForm.value);
  }

}
