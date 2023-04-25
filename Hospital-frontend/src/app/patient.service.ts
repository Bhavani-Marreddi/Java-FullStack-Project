import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {  Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1/patients";

  constructor(private httpClient: HttpClient) { }
  
  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  getPatientById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, patient);
  }

  //localhost:4200/delete/5
  deletePatient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name:any): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}?name=${name}`);
  }

  findBybloodGroup1(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup1`);
  }
  findBybloodGroup2(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup2`);
  }
  findBybloodGroup3(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup3`);
  }
  findBybloodGroup4(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup4`);
  }
  findBybloodGroup5(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup5`);
  }
  findBybloodGroup6(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup6`);
  }
  findBybloodGroup7(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup7`);
  }
  findBybloodGroup8(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/fetchByBloodGroup8`);
  }

}