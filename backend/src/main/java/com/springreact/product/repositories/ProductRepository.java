package com.springreact.product.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.product.models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
