import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { ShortcutService } from '../../services/shortcut.service';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

bookmarkForm: FormGroup;
validMessage: string = "";
shortUrl: string ="";
  constructor(private sharedService: SharedService, private shortcutService: ShortcutService) { }

  ngOnInit(): void {
	this.setDateSettings();
	
	this.bookmarkForm = new FormGroup({
		bookmarkUrl: new FormControl('',Validators.required),
		expiryDate: new FormControl('',Validators.required),
		shortUrl: new FormControl('')
	});
	
  }

setDateSettings(){
}
createShortcut(){
	this.validMessage = "";
	if(this.bookmarkForm.valid) {
		console.log(this.bookmarkForm.get('expiryDate').value);
		const shortUrlValue = this.sharedService.getShortUrl(this.bookmarkForm.get('bookmarkUrl').value);
		const finalShortUrl = window.location.origin+"/"+shortUrlValue;
		this.bookmarkForm.patchValue({shortUrl: finalShortUrl});
		this.shortcutService.createShortUrl(this.bookmarkForm.value).subscribe(
			data => {
				this.bookmarkForm.reset();
				this.validMessage = "Short url got generated";
				this.shortUrl=finalShortUrl;
				return true;
			},
			error => {
				this.validMessage = "Short url not got generated";
				console.log(error);
			}
		)
	}else {
		this.validMessage = "Please fill out the form before submitting!";
	}
}

copyInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
