import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private groupService: GroupService) { }
  groups: any;
  ngOnInit(): void {
	this.getGroups();
  }

getGroups() {
		this.groupService.getGroups().subscribe(
			data => {this.groups = data},
			err => console.error(err),
			() => console.log('Groups Loaded')
		);
	}

}
