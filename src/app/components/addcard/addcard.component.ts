import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

cardForm: FormGroup;
validMessage: string = "";
groupId:number;
groupValue:string;


/** Short URL preparation varilables */
objectkeys = Object.keys;
  constructor(private cardService: CardService,private route: ActivatedRoute,
			  private sharedService: SharedService
			  ) { }
  

  ngOnInit(): void {
	const param = this.route.snapshot.paramMap.get('groupId');
    if (param) {
      this.groupId = +param;
	  this.groupValue =  this.route.snapshot.paramMap.get('groupValue');
	  
    }
	this.cardForm = new FormGroup({
		cardTitle: new FormControl('',Validators.required),
		cardDesc: new FormControl('',Validators.required),
		bookmarkUrl: new FormControl('',Validators.required),
		shortUrl: new FormControl(''),
		imageUrl: new FormControl(''),
		groupId: new FormControl(this.groupId,Validators.required)
	});
  }
createCard() {

	if(this.cardForm.valid) {
		const shortUrlValue = this.sharedService.getShortUrl(this.cardForm.get('bookmarkUrl').value);
		const finalShortUrl = window.location.origin+'/'+this.groupValue+"/"+shortUrlValue;
		this.cardForm.patchValue({shortUrl: finalShortUrl});
		this.validMessage = "Your Card has been added succesfully to your group.";
		this.cardService.createCard(this.cardForm.value).subscribe(
			data => {
				this.cardForm.reset();
				return true;
			},
			error => {
				this.validMessage = "Card not created and had issue";
				return Observable.throw(error);
			}
		)
	} else {
		this.validMessage = "Please fill out the form before submitting!";
	}
}



}
