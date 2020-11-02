import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups: Group[];
  isGroup: boolean; // TODO GTB-4: - 变量命名不合理，逻辑不清晰
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }

  group(): void{
    this.groupService.group().subscribe( groups => {
      this.groups = groups;
      this.isGroup = true;
        });
  }

}
