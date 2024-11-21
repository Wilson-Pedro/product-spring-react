package com.springreact.product.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.springreact.product.models.Product;
import com.springreact.product.repositories.ProductRepository;
import com.springreact.product.servicies.ProductService;

public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product save() {
		return null;
	}

}
