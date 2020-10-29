import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { TrainerService} from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  trainers: Person[];
  trainerName: string;

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.trainerService.getUngroupedTrainers().subscribe( trainers => this.trainers = trainers);
  }

  handleEnter(event): void {
    this.trainerName = event.target.value;
    const newTrainer: Person = {name: this.trainerName};
    if(event.keyCode === 13) {
        this.trainerService.createTrainer(newTrainer).subscribe( newTrainer => this.trainers.push(newTrainer));
    }
  }

}
