package com.tempProjectBackend.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tempProjectBackend.payload.ApiResponse;
import com.tempProjectBackend.payload.CustomerDTO;
import com.tempProjectBackend.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/create")
	public ResponseEntity<CustomerDTO> createCustomer(@Valid @RequestBody CustomerDTO customerdto)
	{
		return new ResponseEntity<CustomerDTO>(customerService.createCustomer(customerdto) , HttpStatus.CREATED);
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<CustomerDTO>> getAllCustomers()
	{
		return new ResponseEntity<List<CustomerDTO>>(customerService.getAllCustomers(),HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<CustomerDTO> getCustomerByID(@PathVariable int id)
	{
		return new ResponseEntity<CustomerDTO>(customerService.getCustomerById(id),HttpStatus.OK);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<ApiResponse> deleteCustomerById(@PathVariable int id)
	{
		customerService.deleteCustomer(id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Customer Deleted Successfully", true),HttpStatus.OK);
	}

	@PostMapping("/update/{id}")
	public ResponseEntity<CustomerDTO> updateCustomer(@Valid @PathVariable int id,@RequestBody CustomerDTO customerdto)
	{
		return new ResponseEntity<CustomerDTO>(customerService.updateCustomer(id, customerdto),HttpStatus.OK);
	}
	
	@GetMapping("/login/{customerEmailID}/{customerContact}")
	public ResponseEntity<CustomerDTO> customerLogin(@PathVariable("customerEmailID") String customerEmailID, @PathVariable("customerContact") String customerContact)
	{
		CustomerDTO customerDTO = this.customerService.loginFunction(customerEmailID, customerContact);
		return new ResponseEntity<CustomerDTO>(customerDTO,HttpStatus.OK);
	}
}
