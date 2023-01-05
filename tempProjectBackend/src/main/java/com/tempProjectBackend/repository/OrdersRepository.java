package com.tempProjectBackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tempProjectBackend.models.Customer;
import com.tempProjectBackend.models.Helper;
import com.tempProjectBackend.models.Order;

public interface OrdersRepository extends JpaRepository<Order, Integer> {
	
	List<Order> findByCustomer(Customer customer);
	
	List<Order> findByHelper(Helper helper);
	
}
