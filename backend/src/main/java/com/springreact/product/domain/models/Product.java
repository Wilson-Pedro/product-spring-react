package com.springreact.product.domain.models;

import java.io.Serializable;

import com.springreact.product.domain.dto.ProductDTO;
import com.springreact.product.domain.dto.ProductRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TBL_PRODUCT")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	private String price;
	
	private String quantity;
	
	private String imageUrl;
	
	public Product() {
	}
	
	public Product(Integer id, String name, String price, String quantity, String imageUrl) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.imageUrl = imageUrl;
	}
	
	public Product(ProductDTO productDTO) {
		this.id = productDTO.getId();
		this.name = productDTO.getName();
		this.price = productDTO.getPrice();
		this.quantity = productDTO.getQuantity();
		this.imageUrl = productDTO.getImageUrl();
	}
	
	public Product(ProductRequestDTO productRequestDTO) {
		this.id = productRequestDTO.getId();
		this.name = productRequestDTO.getName();
		this.price = productRequestDTO.getPrice();
		this.quantity = productRequestDTO.getQuantity();
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

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", quantity=" + quantity + ", imageUrl="
				+ imageUrl + "]";
	}
}
