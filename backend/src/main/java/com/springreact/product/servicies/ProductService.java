package com.springreact.product.servicies;

import java.util.List;

import com.springreact.product.domain.dto.ProductDTO;
import com.springreact.product.domain.dto.ProductRequestDTO;
import com.springreact.product.domain.models.Product;

public interface ProductService {

	Product save(ProductRequestDTO productDto);
	
	List<Product> findAll();
	
	Product findById(Integer id);
	
	Product update(ProductDTO productDTO, Integer id);
	
	void delete(Integer id);
}
