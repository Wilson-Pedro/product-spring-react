package com.springreact.product.servicies;

import org.springframework.web.multipart.MultipartFile;

public interface UploadService {
	
	String upload(String folder, String fileName, MultipartFile file) throws Exception;

}
