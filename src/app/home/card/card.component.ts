import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() item: any;
  ratings!: any[];
  isSelected = false;

  constructor() { }

  ngOnInit(): void {
    if (this.item && this.item.rating) {
      this.ratings = Array(Math.round(this.item.rating.rate));
    }
  }

  showBorder(){
    this.isSelected = !this.isSelected;
  }

}
