import { Component } from '@angular/core';
import { Data } from 'src/app/Data';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent {
  displayedColumns: string[] = ['id', 'movieName', 'movieBookingDate', 'noOfTickets', 'totalAmount', 'update', 'delete'];
  dataSource: Data[] = [];

  constructor(private apiService: ApiService, public router:Router) {}

  ngOnInit() {
    this.apiService
    .getAllData()
    .subscribe(data => this.dataSource = data);
  }

  onDelete(data: Data) {
    console.log(data);
    this.apiService.deleteData(data).subscribe(() => this.dataSource = this.dataSource.filter(t => data.id !== t.id));
  }

  onUpdate(e: Data)
  {
    this.router.navigate([`app-update-data`], {queryParams: {id: e.id, movieName: e.movieName, noOfTickets: e.noOfTickets, movieBookingDate: e.movieBookingDate}});
  }
}
