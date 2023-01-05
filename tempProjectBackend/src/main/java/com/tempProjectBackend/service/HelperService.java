package com.tempProjectBackend.service;

import java.util.List;
import com.tempProjectBackend.payload.HelperDTO;

public interface HelperService {
	
	public List<HelperDTO> getAllHelpers();
	
	public HelperDTO getHelperById(int id);
	
	public void deleteHelper(int id);
	
	public HelperDTO updateHelper(int id, HelperDTO helperDTO);
	
	public HelperDTO createHelper(HelperDTO helperDTO);
	
	List<HelperDTO> findByHelperService(String helperService); 
	
	HelperDTO loginFunction(String helperEmail, String helperContact);
}
