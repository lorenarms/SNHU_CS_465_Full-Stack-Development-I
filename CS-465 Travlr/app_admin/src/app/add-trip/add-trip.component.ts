import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

@Component({
    selector: 'app-add-trip',
    templateUrl: './add-trip.component.html',
    styleUrls: ['./add-trip.component.css']
})

export class AddTripComponent implements OnInit {

    addForm: FormGroup;
    submitted = false;

    constructor(        
        private formBuilder: FormBuilder,
        private router: Router,
        private tripService: TripDataService
    ) { }

ngOnInit() {
    this.addForm = this.formBuilder.group({
        _id: [],
        code: ['', Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
    })
}

onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
        this.tripService.addTrip(this.addForm.value)
        .then( data => {
            console.log(data);
            this.router.navigate(['']);
        });
    }
}
// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}
