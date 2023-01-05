package com.tempProjectBackend.exception;

public class ResourceNotFoundException extends RuntimeException{
	
	String ResourceName;
	String FieldName;
	long FiledValue;
	public ResourceNotFoundException(String resourceName, String fieldName, long filedValue) {
		super(String.format("%s not found with %s: %s", resourceName,fieldName,filedValue));
		ResourceName = resourceName;
		FieldName = fieldName;
		FiledValue = filedValue;
	}
	public String getResourceName() {
		return ResourceName;
	}
	public void setResourceName(String resourceName) {
		ResourceName = resourceName;
	}
	public String getFieldName() {
		return FieldName;
	}
	public void setFieldName(String fieldName) {
		FieldName = fieldName;
	}
	public long getFiledValue() {
		return FiledValue;
	}
	public void setFiledValue(long filedValue) {
		FiledValue = filedValue;
	}
	
	
	
}
