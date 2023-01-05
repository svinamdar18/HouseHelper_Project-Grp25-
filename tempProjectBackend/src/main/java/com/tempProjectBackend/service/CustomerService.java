package com.tempProjectBackend.service;

import java.util.List;

import com.tempProjectBackend.payload.CustomerDTO;

public interface CustomerService {
	
	public List<CustomerDTO> getAllCustomers();
	
	public CustomerDTO getCustomerById(int id);
	
	public void deleteCustomer(int id);
	
	public CustomerDTO updateCustomer(int id, CustomerDTO customer);
	
	public CustomerDTO createCustomer(CustomerDTO customer);
	
	public CustomerDTO loginFunction(String customerEmailID, String customerContact);
	
}
