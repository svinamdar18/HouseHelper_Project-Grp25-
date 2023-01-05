package com.tempProjectBackend.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "helpers")
public class Helper {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "helper_id")
	private int HelperID;
	
	@Column(name = "helper_name")
	private String HelperName;
	
	@Column(name = "helper_dob")
	private Date DOB;

	@Column(name = "helper_address")
	private String HelperAddress;
	
	@Column(name = "helper_contact")
	private String HelperContact;
	
	@Column(name = "helper_email")
	private String HelperEmail;
	
	@Column(name = "helper_services")
	private String HelperService;
	
	@Column(name = "helper_servicecharge")
	private int HelperServicecharge;
	
	@Column(name = "helper_gender")
	private String HelperGender;
	
	@OneToMany(mappedBy = "helper",cascade = CascadeType.ALL)
	private List<Order> orders = new ArrayList<>();
	
	public Helper() {
		// TODO Auto-generated constructor stub
	}

	public Helper(int helperID, String helperName, Date dOB, String helperAddress, String helperContact,
			String helperEmail, String helperService, int helperServicecharge, String helperGender,
			List<Order> orders) {
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
		this.orders = orders;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
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


	@Override
	public String toString() {
		return "Helper [HelperID=" + HelperID + ", HelperName=" + HelperName + ", DOB=" + DOB + ", HelperAddress="
				+ HelperAddress + ", HelperContact=" + HelperContact + ", HelperEmail=" + HelperEmail
				+ ", HelperService=" + HelperService + ", HelperServicecharge=" + HelperServicecharge +"HelperGender = "+ HelperGender +"]";
	}


	
}
