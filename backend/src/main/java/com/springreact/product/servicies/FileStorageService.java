package com.springreact.product.servicies;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {
	
	public String uploadFileInS3(MultipartFile muiltipartFile);
}
