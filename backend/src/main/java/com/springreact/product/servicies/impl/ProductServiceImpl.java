package com.springreact.product.servicies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springreact.product.domain.models.Product;
import com.springreact.product.repositories.ProductRepository;
import com.springreact.product.servicies.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product save() {
		return null;
	}

}
