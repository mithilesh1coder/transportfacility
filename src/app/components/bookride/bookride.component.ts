import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {

  myForm: FormGroup;
  time:string;
  res:[];
  date1:any;
  date2:any;
  final:Array<object> = []


  constructor() { }

  ngOnInit() {

    this.myForm = new FormGroup({
      empId: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
    });

    
  }

  onSubmit(form: FormGroup){
    this.final = []
   

   this.res = JSON.parse(localStorage.getItem("employeeRide"))
   this.res.forEach((val) => {
    

     this.date1 = new Date(val['time']);
     this.date2 = new Date(form.value.time);
     
     let diff_mins = Math.abs(this.date2-this.date1)/60000;

     if(diff_mins <=60){
       this.final.push(val);
     }
   })

   console.log(this.final)

   this.myForm.reset();
  }

  onBook(seat){
    console.log(seat.value)
  }
}
