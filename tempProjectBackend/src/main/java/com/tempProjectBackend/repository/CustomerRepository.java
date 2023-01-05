package com.tempProjectBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tempProjectBackend.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
		
	@Query("Select c from Customer c where c.CustomerEmailID=:keyone and c.CustomerContact=:keytwo")
	Customer customerLogin(@Param("keyone") String customerEmailID,@Param("keytwo") String customerContact);
}
