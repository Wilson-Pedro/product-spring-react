package com.springreact.product.servicies.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springreact.product.domain.dto.ProductDTO;
import com.springreact.product.domain.dto.ProductRequestDTO;
import com.springreact.product.domain.models.Product;
import com.springreact.product.exceptions.ExistingProductException;
import com.springreact.product.exceptions.FieldEmptyException;
import com.springreact.product.exceptions.ProductNotFoundException;
import com.springreact.product.repositories.ProductRepository;
import com.springreact.product.servicies.FileStorageService;
import com.springreact.product.servicies.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private FileStorageService fileStorageService;

	@Override
	public Product save(ProductRequestDTO productRequestDto) {
		Product product = new Product(productRequestDto);
		String imageUrl = fileStorageService.uploadFileInS3(productRequestDto.getMultipartFile());
		product.setImageUrl(imageUrl);
		validadeProduct(product);
		return productRepository.save(product);
	}

	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public Product findById(Integer id) {
		return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
	}

	@Override
	public Product update(ProductDTO productDTO, Integer id) {
		Product producutUpdated = findById(id);
		producutUpdated.setId(id);
		producutUpdated.setName(productDTO.getName());
		producutUpdated.setPrice(productDTO.getPrice());
		producutUpdated.setQuantity(productDTO.getQuantity());
		return productRepository.save(producutUpdated);
	}

	@Override
	public void delete(Integer id) {
		productRepository.deleteById(id);
	}

	private void validadeProduct(Product product) {
		if(product.getName() == "" || product.getQuantity() == null || 
				product.getPrice() == null || product.getImageUrl() == "") {
			throw new FieldEmptyException();
		}
		else if(productRepository.existsByName(product.getName())) {
			throw new ExistingProductException();
		}
	}
}
