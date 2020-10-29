import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.scss']
})
export class TraineeListComponent implements OnInit {
  trainees: Person[];
  traineeName: string;

  constructor(private traineeService: TraineeService) { }

  ngOnInit(): void {
    this.traineeService.getUngroupedTrainees().subscribe( trainees => this.trainees = trainees);
  }

  handleEnter(event): void {
    this.traineeName = event.target.value;
    const newTrainee: Person = {name: this.traineeName};
    if(event.keyCode === 13) {
        this.traineeService.createTrainee(newTrainee).subscribe( newTrainee => this.trainees.push(newTrainee));
    }newTrainee
  }

}
