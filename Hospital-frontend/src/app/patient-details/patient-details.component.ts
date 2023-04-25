import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  id: number = 0;
  patient: any = [];
  router: any;
  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient();
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
      console.log(this.patient);
    });
  }
  backClicked():void{
    this.router.navigate(['/patients']);
   }
}