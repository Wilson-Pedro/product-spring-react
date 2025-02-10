package com.springreact.product.domain.dto;

import org.springframework.web.multipart.MultipartFile;

import com.springreact.product.domain.models.Product;

public class ProductRequestDTO {
	
	private Integer id;
	
	private String name;
	
	private String price;
	
	private String quantity;
	
	private MultipartFile multipartFile;
	
	public ProductRequestDTO() {
	}
	
	public ProductRequestDTO(Integer id, String name, String price, String quantity, MultipartFile multipartFile) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.multipartFile = multipartFile;
	}

	public ProductRequestDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.price = product.getPrice();
		this.quantity = product.getQuantity();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public MultipartFile getMultipartFile() {
		return multipartFile;
	}

	public void setMultipartFile(MultipartFile multipartFile) {
		this.multipartFile = multipartFile;
	}

	@Override
	public String toString() {
		return "ProductDTO [id=" + id + ", name=" + name + ", price=" + price + ", quantity=" + quantity;
	}
}
