package com.tempProjectBackend.payload;

import java.sql.Date;

public class HelperDTO {

	private int HelperID;
	private String HelperName;
	private Date DOB;
	private String HelperAddress;
	private String HelperContact;
	private String HelperEmail;
	private String HelperService;
	private int HelperServicecharge;
	private String HelperGender;
	
	public HelperDTO() {
		// TODO Auto-generated constructor stub
	}

	public HelperDTO(int helperID, String helperName, Date dOB, String helperAddress, String helperContact,
			String helperEmail, String helperService, int helperServicecharge, String helperGender) {
		super();
		HelperID = helperID;
		HelperName = helperName;
		DOB = dOB;
		HelperAddress = helperAddress;
		HelperContact = helperContact;
		HelperEmail = helperEmail;
		HelperService = helperService;
		HelperServicecharge = helperServicecharge;
		HelperGender = helperGender;
	}

	public int getHelperID() {
		return HelperID;
	}

	public void setHelperID(int helperID) {
		HelperID = helperID;
	}

	public String getHelperName() {
		return HelperName;
	}

	public void setHelperName(String helperName) {
		HelperName = helperName;
	}

	public Date getDOB() {
		return DOB;
	}

	public void setDOB(Date dOB) {
		DOB = dOB;
	}

	public String getHelperAddress() {
		return HelperAddress;
	}

	public void setHelperAddress(String helperAddress) {
		HelperAddress = helperAddress;
	}

	public String getHelperContact() {
		return HelperContact;
	}

	public void setHelperContact(String helperContact) {
		HelperContact = helperContact;
	}

	public String getHelperEmail() {
		return HelperEmail;
	}

	public void setHelperEmail(String helperEmail) {
		HelperEmail = helperEmail;
	}

	public String getHelperService() {
		return HelperService;
	}

	public void setHelperService(String helperService) {
		HelperService = helperService;
	}

	public int getHelperServicecharge() {
		return HelperServicecharge;
	}

	public void setHelperServicecharge(int helperServicecharge) {
		HelperServicecharge = helperServicecharge;
	}

	public String getHelperGender() {
		return HelperGender;
	}

	public void setHelperGender(String helperGender) {
		HelperGender = helperGender;
	}
	
	
}
