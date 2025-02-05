package com.springreact.product.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.product.domain.dto.ProductDTO;
import com.springreact.product.domain.models.Product;
import com.springreact.product.servicies.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "http://mybucketproductcrud.s3-website-us-east-1.amazonaws.com")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@PostMapping("/")
	public ResponseEntity<ProductDTO> save(@RequestBody ProductDTO productDTO) {
		Product productSaved = productService.save(new Product(productDTO));
		return ResponseEntity.ok(new ProductDTO(productSaved));
	}

	@GetMapping("/hello")
	public String helloWord(){
		return "Hello, Word!";
	}
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<Product> products = productService.findAll();
		return ResponseEntity.ok(products.stream().map(x -> new ProductDTO(x)).toList());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductDTO> findById(@PathVariable Integer id) {
		Product productFinded = productService.findById(id);
		return ResponseEntity.ok(new ProductDTO(productFinded));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ProductDTO> update(
			@RequestBody ProductDTO productDTO, @PathVariable Integer id) {
		Product productUpdated = productService.update(productDTO, id);
		return ResponseEntity.ok(new ProductDTO(productUpdated));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		productService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
