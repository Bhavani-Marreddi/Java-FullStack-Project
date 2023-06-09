package com.example.demo.repository;
import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

	List<Patient> findByFirstNameContaining(String firstName);
	List<Patient> findBybloodGroup(String bloodGroup);
}
	
