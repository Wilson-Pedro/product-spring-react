package com.springreact.product.servicies;

import java.util.List;
import java.util.Optional;

import com.springreact.product.domain.models.Product;

public interface ProductService {

	Product save(Product product);
	
	List<Product> findAll();
	
	Optional<Product> findById(Integer id);
	
	Product update(Product product, Integer id);
	
	void delete(Integer id);
}
