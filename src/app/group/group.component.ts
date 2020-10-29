import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
@Input() group: Group;
 getGroup: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.group);
  }
  ngDoCheck(): void{
    console.log(this.group);
    // if(group.id){
    //   this.getGroup = true;
    // }
  }

}
