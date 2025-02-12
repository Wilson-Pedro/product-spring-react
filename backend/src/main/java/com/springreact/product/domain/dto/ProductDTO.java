package com.springreact.product.domain.dto;

import com.springreact.product.domain.models.Product;

public class ProductDTO {
	
	private Integer id;
	
	private String name;
	
	private String price;
	
	private String quantity;
	
	private String imageUrl;
	
	public ProductDTO() {
	}
	
	public ProductDTO(Integer id, String name, String price, String quantity, String imageUrl) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.imageUrl = imageUrl;
	}

	public ProductDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.price = product.getPrice();
		this.quantity = product.getQuantity();
		this.imageUrl = product.getImageUrl();
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

	public String getImageUrl() {
		return imageUrl;
	}

	public void setMultipartFile(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "ProductDTO [id=" + id + ", name=" + name + ", price=" + price + ", quantity=" + quantity + ", imageUrl = " + imageUrl;
	}
}
