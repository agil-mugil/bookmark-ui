import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
 cards:any;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
	this.getCards();
  }

	getCards(){
		this.cardService.getCards().subscribe(
			data => {this.cards = data},
			err => console.error(err),
			() => console.log('Cards Loaded')
		);
	}
	
}
