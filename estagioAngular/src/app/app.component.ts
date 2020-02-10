import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users$: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsuarios()
    .subscribe(
      data => this.users$ = data);
  }
}
