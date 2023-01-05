package com.tempProjectBackend.controller;

import java.util.List;
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
import com.tempProjectBackend.payload.HelperDTO;
import com.tempProjectBackend.service.HelperService;

@CrossOrigin
@RestController
@RequestMapping("/api/helpers")
public class HelperController {
	
	@Autowired
	private HelperService helperService;
	
	@PostMapping("/create")
	public ResponseEntity<HelperDTO> createHelper(@RequestBody HelperDTO helperDTO)
	{
		return new ResponseEntity<HelperDTO>(helperService.createHelper(helperDTO) , HttpStatus.CREATED);
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<HelperDTO>> getAllHelpers()
	{
		return new ResponseEntity<List<HelperDTO>>(helperService.getAllHelpers(),HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<HelperDTO> getHelperByID(@PathVariable int id)
	{
		return new ResponseEntity<HelperDTO>(helperService.getHelperById(id),HttpStatus.OK);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<ApiResponse> deleteHelperById(@PathVariable int id)
	{
		helperService.deleteHelper(id);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Helper Record Deleted",true),HttpStatus.OK);
	}
	
	@PostMapping("/update/{id}")
	public ResponseEntity<HelperDTO> updateHelper(@PathVariable int id,@RequestBody HelperDTO helperDTO)
	{
		return new ResponseEntity<HelperDTO>(helperService.updateHelper(id, helperDTO),HttpStatus.OK);
	}
	
	@GetMapping("/gethelper/{helperService}")
	public ResponseEntity<List<HelperDTO>> getHelperByService(@PathVariable("helperService") String helperService)
	{
		List<HelperDTO> helpers = this.helperService.findByHelperService(helperService);
		return new ResponseEntity<List<HelperDTO>>(helpers,HttpStatus.OK);
	}
	
	@GetMapping("/login/{helperEmail}/{helperContact}")
	public ResponseEntity<HelperDTO> helperLoginFunction(@PathVariable("helperEmail") String helperEmail,@PathVariable("helperContact") String helperContact)
	{
		HelperDTO helperdto = this.helperService.loginFunction(helperEmail, helperContact);
		return new ResponseEntity<HelperDTO>(helperdto,HttpStatus.OK);
	}
}
