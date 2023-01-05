package com.tempProjectBackend.service;

import java.util.List;

import com.tempProjectBackend.models.Customer;
import com.tempProjectBackend.models.Helper;
import com.tempProjectBackend.models.Order;
import com.tempProjectBackend.payload.OrderDTO;

public interface OrderService {
	
	OrderDTO createOrder(Integer CustomerID, Integer HelperID);
	
	OrderDTO updateOrder(OrderDTO neworderdto, int id);
	
	List<OrderDTO> getAllOrders();
	
	OrderDTO getOrderById(int id);
	
	void deleteOrderById(int id);
	
	List<OrderDTO> getOrdersByCustomer(int customerid);
	
	List<OrderDTO> getOrdersByHelper(int helperid);
}
