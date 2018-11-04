import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.scss']
})
export class CharacterSummaryComponent implements OnInit {
  @Input() imgUrl :string;
  constructor() { }

  ngOnInit() {
  }

}
