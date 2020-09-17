import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import {FormGroup, FormControl} from '@angular/forms';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  errorMessage = '';
  validMessage = '';
  currentUser: string;
  constructor(private groupService: GroupService, private sharedService: SharedService) { }
  groups: any;
  groupAdmin: FormGroup;
  ngOnInit(): void {
	this.getGroups();
	
	this.groupAdmin = new FormGroup({
		groupId: new FormControl(''),
		userId: new FormControl('')
	});
	this.currentUser = this.sharedService.getUserName();
  }

getGroups() {
		this.groupService.getGroups().subscribe(
			data => {this.groups = data},
			err => {console.error(err)
					if (err.status=404) {
						this.errorMessage = "No Groups found";
					}},
			() => console.log('Groups Loaded')
		);
	}

deleteAdmin(groupId: number){
	this.groupService.deleteGroupAdmin(groupId).subscribe(
			data => {
				this.getGroups();
				this.validMessage = "The user removed from the group admin";
				console.log(data);
			},
			err => {console.error(err)},
			() => console.log('Group admin deleted')
		);
	}

addAdminToGroup(groupId: number){
	this.validMessage = '';
	if(this.groupAdmin.get('userId').value.trim() == '') {
		alert("Please enter user id");
		return false;
	}
	this.groupAdmin.patchValue({groupId: groupId});
	console.log(this.groupAdmin);
		this.groupService.addAdminToGroup(this.groupAdmin).subscribe (
			data => {
				this.validMessage = "The "+this.groupAdmin.get('userId').value+" added to the group as admin";
				this.getGroups();
				this.groupAdmin.reset();
				console.log(data);
				return true;
			},
			err => {console.error(err),
			this.errorMessage = "The "+this.groupAdmin.get('userId').value+" is already part of admin group";
			},
			() => console.log('Group admin deleted')
		)
}

isCurrentUserGroupAdmin(groupAdmins: any[]){
	return(groupAdmins.some(groupAdmin => groupAdmin.userId === this.currentUser));
}

}
