import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list;
  stitle = new FormControl('');
  category = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:4200/assets/list.json')
      .subscribe((data: any) => {
        console.log(data);
        this.list = data?.sections[0].assets;
        console.log(this.list);
      });
  }
}
