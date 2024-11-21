package com.springreact.product.servicies.impl;

import java.util.List;
import java.util.Optional;

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
	public Product save(Product product) {
		return productRepository.save(product);
	}

	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public Optional<Product> findById(Integer id) {
		return productRepository.findById(id);
	}

	@Override
	public Product update(Product product, Integer id) {
		Product producutUpdated = findById(id).get();
		producutUpdated.setId(id);
		producutUpdated.setName(product.getName());
		producutUpdated.setPrice(product.getPrice());
		producutUpdated.setQuantity(product.getQuantity());
		return productRepository.save(producutUpdated);
	}

	@Override
	public void delete(Integer id) {
		productRepository.deleteById(id);
	}

}
