import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from 'models/trip';


@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tripService: TripDataService

  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("EditTripComponent#onInit found tripCode " + tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ["", Validators.required],
      length: ["", Validators.required],
      start: ["", Validators.required],
      resort: ["", Validators.required],
      perPerson: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required],
    })

    console.log(
      "EditTripComponent#onInit calling TripDataService#getTrip('" +
        tripCode +
        "')"
    );

    this.tripService.getTrip(tripCode)
      .then(data => {
        // console.log(data);
        
        this.editForm.patchValue(data[0]);
        
        console.log("patched")
        // using editForm.setValue() will throw a console error
      })

  }

  onSubmit() {
    this.submitted = true;

    if(this.editForm.valid){
      this.tripService.updateTrip(this.editForm.value)
        .then( data => {
            console.log(data);
            this.router.navigate(['']);
        });
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }

}
