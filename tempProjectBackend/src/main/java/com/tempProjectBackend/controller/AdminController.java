package com.tempProjectBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tempProjectBackend.payload.AdminDTO;
import com.tempProjectBackend.service.AdminService;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<AdminDTO> adminLogin(@PathVariable("username") String username, @PathVariable("password") String password)
	{
		AdminDTO admindto = this.adminService.loginAdminFunction(username, password);
		return new ResponseEntity<AdminDTO>(admindto, HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<AdminDTO> getAdminByID(@PathVariable("id") Integer id)
	{
		AdminDTO adminDTO = this.adminService.getAdminByID(id);
		return new ResponseEntity<AdminDTO>(adminDTO , HttpStatus.OK);
	}
	
}
