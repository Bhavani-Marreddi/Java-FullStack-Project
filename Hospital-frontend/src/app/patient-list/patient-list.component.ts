import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patient: Patient[] = [];
  firstName = '';
  bloodGroup='';

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatient();
  }

  private getPatient() {
    this.patientService.getPatientList().subscribe(data => {
      this.patient = data;
    });
  }

  patientDetails(id: number) {
    console.log(id);
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id]);
  }
  confirmDelete(patient : Patient){
    var status= confirm("You want to delete this record?");
     if (status==true) {
     this.deletePatient(patient.id);
          }
     else{
      this.getPatient();
          }
        }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatient();
    })
  }

  removeAllPatients(): void{
    this.patientService.deleteAll().subscribe(
      data=>{
        console.log(data);
        this.searchByName();
      },
      error=>{
        console.log(error);
      });
  }

  confirmDeleteAll(){
    var status= confirm("You want to delete entire records permanently ?");
     if (status==true) {
     this.removeAllPatients();
          }
     else{
      this.getPatient();
          }
        }
searchByName(){
  this.patientService.findByName(this.firstName)
  .subscribe(
    data => {
      this.patient = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

}

fetchTechbloodGroup1(){
  this.patientService.findBybloodGroup1().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup2(){
  this.patientService.findBybloodGroup2().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup3(){
  this.patientService.findBybloodGroup3().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup4(){
  this.patientService.findBybloodGroup4().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup5(){
  this.patientService.findBybloodGroup5().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}



fetchTechbloodGroup6(){
  this.patientService.findBybloodGroup6().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup7(){
  this.patientService.findBybloodGroup7().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchTechbloodGroup8(){
  this.patientService.findBybloodGroup8().subscribe(
    data => {
      this.patient = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

}