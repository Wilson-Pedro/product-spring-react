package com.springreact.product.servicies.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.springreact.product.servicies.FileStorageService;

import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

@Service
public class FileStorageServiceImpl implements FileStorageService {
	
	@Value("${aws.endpoint}")
	private String endpoint;
	
	@Autowired
	private S3Client s3Client;
	
	@Value("${aws.bucket-name}")
	private String bucketName;
	
	public String uploadFileInS3(MultipartFile muiltipartFile) {
		String fileName = UUID.randomUUID().toString() + "-" + muiltipartFile.getOriginalFilename();
		File fileObj = convertMultiPartFileToFile(muiltipartFile);
		
		PutObjectRequest objectRequest = PutObjectRequest.builder()
				.bucket(bucketName)
				.key(fileName)
				.build();
		
		s3Client.putObject(objectRequest, RequestBody.fromFile(fileObj));
		String imageUrl = endpoint + "/" + bucketName + "/" + fileName;
		return imageUrl;
	}
	
	private File convertMultiPartFileToFile(MultipartFile muiltipartFile) {
		File convertedFile = new File(muiltipartFile.getOriginalFilename());
		try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
			fos.write(muiltipartFile.getBytes());
		} catch(IOException e) {
			e.printStackTrace();
		}
		return convertedFile;
	}
}
