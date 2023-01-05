package com.tempProjectBackend.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AdminDTO {

	private int Id;
	private String name;
	private String username;
	private String password;

}
