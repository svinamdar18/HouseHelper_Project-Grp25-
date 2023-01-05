package com.tempProjectBackend.service;

import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tempProjectBackend.exception.ResourceNotFoundException;
import com.tempProjectBackend.models.Helper;
import com.tempProjectBackend.repository.HelperRepository;
import com.tempProjectBackend.payload.HelperDTO;

@Service
public class HelperServiceImpl implements HelperService {

	@Autowired
	private HelperRepository helperRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<HelperDTO> getAllHelpers() {
		List<Helper> helpers = helperRepository.findAll();
		List<HelperDTO> helperDTOs = helpers.stream().map(helper -> this.entityToDTO(helper)).collect(Collectors.toList());
		return helperDTOs;
	}

	@Override
	public HelperDTO getHelperById(int id) {
		Helper helper =  helperRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Helper","id",id));
		
		return this.entityToDTO(helper);
	}

	@Override
	public void deleteHelper(int id) {
		Helper helper = helperRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Helper","id",id));
		helperRepository.delete(helper);
		
	}

	@Override
	public HelperDTO updateHelper(int id, HelperDTO newhelperdto) {
		Helper oldhelper = helperRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Helper","id",id));
		Helper newhelper = new Helper();
			newhelper.setHelperID(id);
			newhelper.setHelperName(newhelperdto.getHelperName());
			newhelper.setHelperEmail(newhelperdto.getHelperEmail());
			newhelper.setHelperGender(newhelperdto.getHelperGender());
			newhelper.setHelperContact(newhelperdto.getHelperContact());
			newhelper.setHelperAddress(newhelperdto.getHelperAddress());
			newhelper.setHelperService(newhelperdto.getHelperService());
			newhelper.setHelperServicecharge(newhelperdto.getHelperServicecharge());
			newhelper.setDOB(newhelperdto.getDOB());
			return this.entityToDTO(helperRepository.save(newhelper));
	}

	@Override
	public HelperDTO createHelper(HelperDTO helperDTO) {
		Helper helper =  this.dtoToEntity(helperDTO);
		
		HelperDTO helperDTO2 = this.entityToDTO(helperRepository.save(helper));
		return helperDTO2;
	}
	
	public Helper dtoToEntity(HelperDTO helperDTO) {
		Helper helper = this.modelMapper.map(helperDTO, Helper.class);
		
//		helper.setHelperID(helperDTO.getHelperID());
//		helper.setHelperName(helperDTO.getHelperName());
//		helper.setHelperEmail(helperDTO.getHelperEmail());
//		helper.setHelperGender(helperDTO.getHelperGender());
//		helper.setHelperContact(helperDTO.getHelperContact());
//		helper.setHelperAddress(helperDTO.getHelperAddress());
//		helper.setHelperService(helperDTO.getHelperService());
//		helper.setHelperServicecharge(helperDTO.getHelperServicecharge());
//		helper.setDOB(helperDTO.getDOB());
		
		
		return helper;
	}
	
	public HelperDTO entityToDTO(Helper helper) {
		HelperDTO helperDTO = this.modelMapper.map(helper, HelperDTO.class);
//		helperDTO.setHelperID(helper.getHelperID());
//		helperDTO.setHelperName(helper.getHelperName());
//		helperDTO.setHelperEmail(helper.getHelperEmail());
//		helperDTO.setHelperGender(helper.getHelperGender());
//		helperDTO.setHelperContact(helper.getHelperContact());
//		helperDTO.setHelperAddress(helper.getHelperAddress());
//		helperDTO.setHelperService(helper.getHelperService());
//		helperDTO.setHelperServicecharge(helper.getHelperServicecharge());
//		helperDTO.setDOB(helper.getDOB());
		return helperDTO;
	}

	@Override
	public List<HelperDTO> findByHelperService(String helperService) {
		List<Helper> helpers = this.helperRepository.findHelperByHelperService(helperService);
		List<HelperDTO> helperdtos = helpers.stream().map(helper -> this.modelMapper.map(helper, HelperDTO.class)).collect(Collectors.toList());
		return helperdtos;
	}

	@Override
	public HelperDTO loginFunction(String helperEmail, String helperContact) {
		Helper helper = this.helperRepository.HelperLogin(helperEmail, helperContact);
		HelperDTO helperdto = this.modelMapper.map(helper, HelperDTO.class);
		return helperdto;
	}

}
