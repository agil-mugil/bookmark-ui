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
 adminCount:any;
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
			err => {console.error(err),
					this.cards=[]},
			() => console.log('Cards Loaded')
		);
	}
	getCards(){
		this.cardService.getCards().subscribe(
			data => {this.cards = data},
			err => {console.error(err),
					this.cards=[]},
			() => console.log('Cards Loaded')
		);
	}
	
	onPublishClicked(cardId: number): void {
		this.cardService.publishCard(cardId).subscribe(
			data => {this.publishedCard=data;
				console.log(this.publishedCard.groupId);
				this.getCardsByGroup(this.publishedCard.groupId);
			},
			error => {
				console.log('Error in card publish'+error);
			}
		)
	}
	onDeleteClicked(card: any): void {
		this.isUserGroupAdmin(card);
	}
	
	isUserGroupAdmin(card: any): boolean {
		
		this.cardService.getCountOfGroupAdmin(card.groupId).subscribe(
			data => {this.adminCount = data},
			err => console.error(err),
			() => {
				if(this.adminCount==1) {
					this.deleteCard(card);
				}else {
					alert('Only group admin can peform delete');
					return false;
				}
			}
		)
		return false;
	}
	
	deleteCard(card: any){
		this.cardService.deleteCard(card.cardId).subscribe(
			data => {console.log('Card deleted.');
				this.getCardsByGroup(card.groupId);
			},
			error => {
				console.log('Error in deleting the card'+error);
			}
		)
	}
	
}
