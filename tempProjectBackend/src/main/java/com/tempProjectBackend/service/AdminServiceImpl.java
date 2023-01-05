package com.tempProjectBackend.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tempProjectBackend.exception.ResourceNotFoundException;
import com.tempProjectBackend.models.Admin;
import com.tempProjectBackend.payload.AdminDTO;
import com.tempProjectBackend.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public AdminDTO loginAdminFunction(String username, String password) {	
		Admin admin = this.adminRepository.adminLoginFunction(username, password); 
		AdminDTO adminDTO = this.modelMapper.map(admin, AdminDTO.class);
		return adminDTO;
	}

	@Override
	public AdminDTO getAdminByID(int id) {
		Admin admin = this.adminRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Admin","id",id));
		AdminDTO adminDTO = this.modelMapper.map(admin, AdminDTO.class);
		return adminDTO;
	}

}
