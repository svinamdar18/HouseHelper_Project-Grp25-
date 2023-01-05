package com.tempProjectBackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tempProjectBackend.exception.ResourceNotFoundException;
import com.tempProjectBackend.models.Customer;
import com.tempProjectBackend.payload.CustomerDTO;
import com.tempProjectBackend.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<CustomerDTO> getAllCustomers() {
		List<Customer> customers =  customerRepository.findAll();
		List<CustomerDTO> customerdtos =customers.stream().map(customer -> this.entityToDTO(customer)).collect(Collectors.toList());
		return customerdtos;
	}

	@Override
	public CustomerDTO getCustomerById(int id) {
		Customer customer =  customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer","id",id));
		return this.entityToDTO(customer);
	}

	@Override
	public void deleteCustomer(int id) {
		Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer","id",id));
			customerRepository.delete(customer);
		
	}

	@Override
	public CustomerDTO updateCustomer(int id, CustomerDTO newcustomerdto) {
		
		Customer oldcustomer = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer","id",id));
		
		Customer newcustomer = new Customer();
		newcustomer.setCustomerID(id);
		newcustomer.setCustomerName(newcustomerdto.getCustomerName());
		newcustomer.setCustomerEmailID(newcustomerdto.getCustomerEmailID());
		newcustomer.setCustomerGender(newcustomerdto.getCustomerGender());
		newcustomer.setCustomerContact(newcustomerdto.getCustomerContact());
		newcustomer.setCustomerAddress(newcustomerdto.getCustomerAddress());
		newcustomer.setDOB(newcustomerdto.getDOB());
		return this.entityToDTO(customerRepository.save(newcustomer));
		
	}

	@Override
	public CustomerDTO createCustomer(CustomerDTO customerdto) {
		
		Customer customer = this.dtoToEntity(customerdto);
		
		CustomerDTO customerDTO2 = this.entityToDTO(customerRepository.save(customer));
		
		return customerDTO2;
	}

	public Customer dtoToEntity(CustomerDTO customerDTO) {
		Customer customer = new Customer();
		
		customer.setCustomerID(customerDTO.getCustomerID());
		customer.setCustomerName(customerDTO.getCustomerName());
		customer.setCustomerEmailID(customerDTO.getCustomerEmailID());
		customer.setCustomerGender(customerDTO.getCustomerGender());
		customer.setCustomerContact(customerDTO.getCustomerContact());
		customer.setCustomerAddress(customerDTO.getCustomerAddress());
		customer.setDOB(customerDTO.getDOB());
		return customer;
	}
	
	public CustomerDTO entityToDTO(Customer customer) {
		CustomerDTO customerDTO = new CustomerDTO();
		
		customerDTO.setCustomerID(customer.getCustomerID());
		customerDTO.setCustomerName(customer.getCustomerName());
		customerDTO.setCustomerEmailID(customer.getCustomerEmailID());
		customerDTO.setCustomerGender(customer.getCustomerGender());
		customerDTO.setCustomerContact(customer.getCustomerContact());
		customerDTO.setCustomerAddress(customer.getCustomerAddress());
		customerDTO.setDOB(customer.getDOB());
		return customerDTO;
	}

	@Override
	public CustomerDTO loginFunction(String customerEmailID, String customerContact) {
		Customer customer = this.customerRepository.customerLogin(customerEmailID, customerContact);
		CustomerDTO customerDTO = this.modelMapper.map(customer, CustomerDTO.class);
		return customerDTO;
	}

}
