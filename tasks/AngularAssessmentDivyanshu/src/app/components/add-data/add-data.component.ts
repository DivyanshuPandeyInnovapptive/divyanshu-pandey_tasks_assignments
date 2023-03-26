import { Component } from '@angular/core';
import { Data } from 'src/app/Data';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  myForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      movieName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      noOfTickets: [0, [Validators.max(15), Validators.pattern('^[0-9]*$')]],
      movieBookingDate: null
    });
  }

  onSubmit(form: FormGroup) {

    const newData: Data = {
      movieName: form.value.movieName,
      movieBookingDate: form.value.movieBookingDate,
      noOfTickets: form.value.noOfTickets,
      totalAmount: form.value.noOfTickets * 150
    }

    this.apiService.addData(newData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });

    // this.router.navigate(['']);
  }

}
