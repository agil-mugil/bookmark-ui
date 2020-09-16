import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

groupTypes: any;
groupValues: any;

groupForm: FormGroup;

validMessage: string = "";
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
	this.getGroupTypes();
	this.groupForm = new FormGroup({
		groupType: new FormControl('',Validators.required),
		groupValue: new FormControl('',Validators.required)
	});
  }

getGroupTypes() {
	this.groupService.getGroupTypes().subscribe(
			data => {this.groupTypes = data},
			err => console.error(err),
			() => console.log('group types Loaded')
		);
}
getGroupValues(groupType: string) {
	this.groupService.getGroupValues(groupType).subscribe(
			data => {this.groupValues = data},
			err => console.error(err),
			() => console.log('Group values Loaded')
		);
}
createGroup(){
	if(this.groupForm.valid){
		this.validMessage = "Your group has been created succesfully. Add Cards to it.";
		this.groupService.createGroup(this.groupForm.value).subscribe(
			data => {
				this.groupForm.reset();
				return true;
			},
			error => {
				return Observable.throw(error);
			}
		)
	} else {
		this.validMessage = "Please fill out the form before submitting!";
	}
}

}
