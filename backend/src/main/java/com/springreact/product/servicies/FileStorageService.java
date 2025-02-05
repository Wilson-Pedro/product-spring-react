package com.springreact.product.servicies;

import com.springreact.product.domain.records.FileUpload;

public interface FileStorageService {

	String upload(FileUpload fileUpload);
}
