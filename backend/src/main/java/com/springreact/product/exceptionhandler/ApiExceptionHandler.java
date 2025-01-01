package com.springreact.product.exceptionhandler;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.springreact.product.exceptions.ExistingProductException;
import com.springreact.product.exceptions.ProductNotFoundException;

@ControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(ProductNotFoundException.class)
	public ResponseEntity<Problam> productNotFound() {
		
		HttpStatus status = HttpStatus.NOT_FOUND;
		
		Problam problam = new Problam();
		problam.setTitle("Product Not Found");
		problam.setStatusCode(status.value());
		problam.setInstant(Instant.now());
		
		return ResponseEntity.status(status).body(problam);
	}
	
	@ExceptionHandler(ExistingProductException.class)
	public ResponseEntity<Problam> productExistsE() {
		
		HttpStatus status = HttpStatus.BAD_REQUEST;
		
		Problam problam = new Problam();
		problam.setTitle("Product Already registed");
		problam.setStatusCode(status.value());
		problam.setInstant(Instant.now());
		
		return ResponseEntity.status(status).body(problam);
	}
}
