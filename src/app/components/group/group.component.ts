import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  errorMessage = '';
  constructor(private groupService: GroupService) { }
  groups: any;
  ngOnInit(): void {
	this.getGroups();
  }

getGroups() {
		this.groupService.getGroups().subscribe(
			data => {this.groups = data},
			err => {console.error(err)
					if (err.status=404) {
						this.errorMessage = "You are not admin of any group!";
					}},
			() => console.log('Groups Loaded')
		);
	}

deleteAdmin(groupId: number){
	this.groupService.deleteGroupAdmin(groupId).subscribe(
			data => {
				this.getGroups()
				console.log(data);
			},
			err => {console.error(err)},
			() => console.log('Group admin deleted')
		);
	}

}
