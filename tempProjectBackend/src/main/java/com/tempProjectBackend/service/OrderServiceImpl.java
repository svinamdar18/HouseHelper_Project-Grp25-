package com.tempProjectBackend.service;

import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tempProjectBackend.exception.ResourceNotFoundException;
import com.tempProjectBackend.models.Customer;
import com.tempProjectBackend.models.Helper;
import com.tempProjectBackend.models.Order;
import com.tempProjectBackend.payload.OrderDTO;
import com.tempProjectBackend.repository.CustomerRepository;
import com.tempProjectBackend.repository.HelperRepository;
import com.tempProjectBackend.repository.OrdersRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrdersRepository ordersRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private HelperRepository helperRepository;
	
	@Autowired 
	private ModelMapper modelMapper; 
	
	@Override
	public OrderDTO createOrder(Integer CustomerID, Integer HelperID) {
		Customer customer =  customerRepository.findById(CustomerID).orElseThrow(() -> new ResourceNotFoundException("Customer","id",CustomerID));
		Helper helper =  helperRepository.findById(HelperID).orElseThrow(() -> new ResourceNotFoundException("Helper","id",HelperID));
		Order neworder = new Order();
		neworder.setCustomer(customer);
		neworder.setHelper(helper);
		Order saveorder =  ordersRepository.save(neworder);
		return this.modelMapper.map(saveorder, OrderDTO.class);
	}

	@Override
	public OrderDTO updateOrder(OrderDTO neworderdto, int id) {
		
		Order neworder = this.modelMapper.map(neworderdto, Order.class);
		
		Order order = ordersRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Order", "id", id));
		neworder.setOrderID(id);
		Order updateorder = ordersRepository.save(neworder);
		return this.modelMapper.map(updateorder, OrderDTO.class);
	}

	@Override
	public List<OrderDTO> getAllOrders() {
		List<Order> orders = this.ordersRepository.findAll();
		List<OrderDTO> orderdtos = orders.stream().map(order -> this.modelMapper.map(order, OrderDTO.class)).collect(Collectors.toList());
		return orderdtos;
	}

	@Override
	public OrderDTO getOrderById(int id) {
		
		Order order = ordersRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Order", "id", id));
		return this.modelMapper.map(order, OrderDTO.class);
	}

	@Override
	public void deleteOrderById(int id) {
		Order order = ordersRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Order", "id", id));
		ordersRepository.deleteById(id);
	}

	@Override
	public List<OrderDTO> getOrdersByCustomer(int customerid) {
		Customer customer =  this.customerRepository.findById(customerid).orElseThrow(() -> new ResourceNotFoundException("Customer","id",customerid));
		List<Order> orders = this.ordersRepository.findByCustomer(customer);
		List<OrderDTO> orderdtos = orders.stream().map(order -> this.modelMapper.map(order, OrderDTO.class)).collect(Collectors.toList());
		return orderdtos;
	}

	@Override
	public List<OrderDTO> getOrdersByHelper(int helperid) {
		Helper helper = helperRepository.findById(helperid).orElseThrow(() -> new ResourceNotFoundException("Helper","id",helperid));
		List<Order> orders = this.ordersRepository.findByHelper(helper);
		List<OrderDTO> orderdtos = orders.stream().map(order -> this.modelMapper.map(order, OrderDTO.class)).collect(Collectors.toList());
		return orderdtos;
	}
	
	

}
