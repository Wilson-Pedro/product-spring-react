package com.springreact.product.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.product.domain.models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	boolean existsByName(String name);
}
