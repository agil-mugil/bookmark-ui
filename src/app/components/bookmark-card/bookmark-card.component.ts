import { Component, Input,Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.css']
})
export class BookmarkCardComponent implements OnInit {

 @Input() card: any;
 @Output() publishClicked: EventEmitter<string> = 
			new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
	this.publishClicked.emit(this.card.cardId);
  }

}
