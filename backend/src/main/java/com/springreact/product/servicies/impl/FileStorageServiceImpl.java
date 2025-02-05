package com.springreact.product.servicies.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.springreact.product.domain.records.FileUpload;

import io.awspring.cloud.s3.S3Template;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.internal.resource.S3Resource;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

@Service
public class FileStorageServiceImpl {
	
//	@Autowired
//	private S3Template template;
	
	@Value("${aws.endpoint}")
	private String endpoint;
	
	@Autowired
	private S3Client s3Client;
	
	@Value("${aws.bucket-name}")
	private String bucketName;

//	@Override
//	public String upload(FileUpload fileUpload) {
//		try (var file = fileUpload.data().getInputStream()) {
//			String key = UUID.randomUUID().toString() + "-" + fileUpload.data().getOriginalFilename();
//			System.out.println("Chegou aqui");
//			System.out.println(file.toString());
//			S3Resource uploaded = template.upload(bucketName, key, file);
//			return key;
//		} catch(IOException err) {
//			 throw new RuntimeException("Não foi possivel realizar o upload do documento");
//		}
//	}
	
	public String uploadFile(MultipartFile muiltipartFile) {
		String fileName = UUID.randomUUID().toString() + "-" + muiltipartFile.getOriginalFilename();
		File fileObj = convertMultiPartFileToFile(muiltipartFile);
		
		PutObjectRequest objectRequest = PutObjectRequest.builder()
				.bucket(bucketName)
				.key(fileName)
				.build();
		
		s3Client.putObject(objectRequest, fileObj.toPath());
		
		return endpoint + "/" + bucketName + "/" + fileName;
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
