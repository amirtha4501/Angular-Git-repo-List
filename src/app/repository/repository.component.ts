import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
  }

}
