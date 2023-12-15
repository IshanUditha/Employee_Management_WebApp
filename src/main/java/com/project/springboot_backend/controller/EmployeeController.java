package com.project.springboot_backend.controller;

import com.project.springboot_backend.exception.EmployeeNotFoundException;
import com.project.springboot_backend.model.Employee;
import com.project.springboot_backend.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepo employeeRepo;
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }
    @PostMapping("/employees")
    Employee newEmployee(@RequestBody Employee newEmployee){
        return employeeRepo.save(newEmployee);
    }
    @GetMapping("/employees/{id}")
    Employee getUserById(long id){
        return employeeRepo.findById(id)
                .orElseThrow(()-> new EmployeeNotFoundException(id));
    }
}
