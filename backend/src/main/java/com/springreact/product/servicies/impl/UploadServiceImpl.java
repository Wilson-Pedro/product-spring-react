package com.springreact.product.servicies.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.springreact.product.exceptions.FieldEmptyException;
import com.springreact.product.servicies.UploadService;

@Service
public class UploadServiceImpl implements UploadService {
	
	public int KB = 1024 * 1;
	public int MB = 1024 * KB;

	public String upload(String folder, String fileName, MultipartFile file) throws Exception {
		String filename = "";
		try {
			validateUpload(file);

	        filename = file.getOriginalFilename();
	        Path filePath = Paths.get(folder, filename);

	        Files.createDirectories(filePath.getParent());
	        Files.write(filePath, file.getBytes());
	        return filename;
	        
		} catch(IOException err) {
			System.out.println(err);
		}
		return filename;
	}
	
	public void validateUpload(MultipartFile file) {
		System.out.println("validateUpload");
        if (file.isEmpty()) {
            throw new FieldEmptyException();
        }
	}
}
