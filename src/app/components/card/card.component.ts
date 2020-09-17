import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
 cards:any;

  constructor(private cardService: CardService, private route: ActivatedRoute,
			  private router: Router) { }

  ngOnInit(): void {
	const param = this.route.snapshot.paramMap.get('groupId');
    if (param) {
      const groupId = +param;
      this.getCardsByGroup(groupId);
    }else {
		this.getCards();
	}
  }

	publishedCard: any;
	getCardsByGroup(groupId: any) {
		this.cardService.getCardsByGroup(groupId).subscribe(
			data => {this.cards = data},
			err => console.error(err),
			() => console.log('Cards Loaded')
		);
	}
	getCards(){
		this.cardService.getCards().subscribe(
			data => {this.cards = data},
			err => console.error(err),
			() => console.log('Cards Loaded')
		);
	}
	
	onPublishClicked(cardId: number): void {
		this.cardService.publishCard(cardId).subscribe(
			data => {this.publishedCard=data;
				console.log(this.publishedCard.groupId);
				this.getCardsByGroup(this.publishedCard.groupId);
				return true;
			},
			error => {
				console.log('Error in card publish'+error);
			}
		)
	}
}
