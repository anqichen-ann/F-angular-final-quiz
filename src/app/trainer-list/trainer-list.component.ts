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

  constructor(private trainService: TrainerService) { }

  ngOnInit(): void {
    this.trainService.getUngroupedTrainers().subscribe( trainers => this.trainers = trainers);
  }

}
