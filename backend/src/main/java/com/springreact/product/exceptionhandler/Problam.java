package com.springreact.product.exceptionhandler;

import java.time.Instant;

public class Problam {

	private String title;
	
	private Integer statusCode;
	
	private Instant instant;
	
	public Problam() {
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public Integer getStatusCode() {
		return statusCode;
	}
	
	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}
	
	public Instant getInstant() {
		return instant;
	}
	
	public void setInstant(Instant instant) {
		this.instant = instant;
	}
}
