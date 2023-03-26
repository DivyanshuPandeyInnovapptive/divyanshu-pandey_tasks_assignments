import { Component } from '@angular/core';
import { Data } from 'src/app/Data';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent {
  myForm: FormGroup;
  movieId: number;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      movieName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      noOfTickets: [0, [Validators.max(15), Validators.pattern('^[0-9]*$')]],
      movieBookingDate: null
    });

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.movieId = params['id'];
      this.myForm.patchValue({
        movieName: params['movieName'],
        noOfTickets: params['noOfTickets'],
        movieBookingDate: new Date(params['movieBookingDate'])
      })
    });
  }

  onSubmit(form: FormGroup) {

    const newData: Data = {
      id: this.movieId,
      movieName: form.value.movieName,
      noOfTickets: form.value.noOfTickets,
      totalAmount: form.value.noOfTickets * 150,
      movieBookingDate: form.value.movieBookingDate
    }

    this.apiService.updateData(newData).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    });

    // this.router.navigate(['']);
  }
}
