import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { Rider } from '../../models/Rider'

@Component({
  selector: 'app-addride',
  templateUrl: './addride.component.html',
  styleUrls: ['./addride.component.css']
})
export class AddrideComponent implements OnInit {

  myForm: FormGroup;
  employeeRide:Array<object> = []
  rider : Rider;

  constructor() { }

  ngOnInit() {

    this.myForm = new FormGroup({
      empId: new FormControl('',[Validators.required]),
      vehicleType: new FormControl(''),
      vehicleNo: new FormControl('',[Validators.required]),
      seats: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
      pickup: new FormControl('',[Validators.required]),
      destination: new FormControl('',[Validators.required])
    });

    
  }

  onSubmit(form: FormGroup){
   console.log(form.value);

   this.rider = {
    empId: form.value.empId,
    vehicleType: form.value.vehicleType,
    vehicleNo: form.value.vehicleNo,
    seats:form.value.seats,
    time:form.value.time,
    pickup:form.value.pickup,
    destination:form.value.destination
   }

   this.employeeRide.push(this.rider)
   console.log(this.employeeRide)
   localStorage.setItem("employeeRide",JSON.stringify(this.employeeRide))
   console.log(this.myForm)
   this.myForm.reset();
  }

}
