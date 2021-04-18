import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data;
  list;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:4200/assets/list.json')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
        this.list = data[0];
        console.log(this.list);
      });
  }
}
