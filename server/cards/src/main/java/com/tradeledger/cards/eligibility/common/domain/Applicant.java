package com.tradeledger.cards.eligibility.common.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public final class Applicant {

	@NotNull
	@NotBlank
	private String name;
	
	@NotNull
	@NotBlank
	private String address;
	
	@NotNull
	@NotBlank
	private String email;
	
	public Applicant() {}
	
	public Applicant(String name, String email, String address) {
		
		this.name = name;
		this.email = email;
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public String getAddress() {
		return address;
	}

	public String getEmail() {
		return email;
	}
	
}
