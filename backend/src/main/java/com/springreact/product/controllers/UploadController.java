package com.springreact.product.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springreact.product.servicies.UploadService;
import com.springreact.product.servicies.impl.FileStorageServiceImpl;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "http://localhost:3000")
public class UploadController {
	
	@Autowired
	UploadService uploadService;
	
	@Autowired
	FileStorageServiceImpl fileStorageService;
	
	private final String folder = "C:\\spring-react\\product-react-crud\\front\\public\\img";
	
	@PostMapping("/image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {

        String filename = "";
        System.out.println("uploadImage");
		try {
			filename = uploadService.upload(folder, folder, file);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return ResponseEntity.ok("Imagem enviada com sucesso: " + filename);
    }
	
	@PostMapping("/s3/")
	public ResponseEntity<String> uploadImageInS3(@RequestParam("file") MultipartFile file) {
		String filename = "";
		try {
			//FileUpload fileUpload = new FileUpload(file);
			filename = fileStorageService.uploadFile(file);
		} catch(Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok("Imagem enviada com sucesso: " + filename);
	}
	
}
