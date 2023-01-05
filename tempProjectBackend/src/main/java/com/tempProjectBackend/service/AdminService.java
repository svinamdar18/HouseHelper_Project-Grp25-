package com.tempProjectBackend.service;

import com.tempProjectBackend.payload.AdminDTO;

public interface AdminService {
	
	AdminDTO loginAdminFunction(String username, String password);
	
	AdminDTO getAdminByID(int id);
	
}
