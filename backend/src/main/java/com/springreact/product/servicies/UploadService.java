package com.springreact.product.servicies;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service
public class UploadService {
	
	public static int KB = 1024 * 1;
	public static int MB = 1024 * KB;

	public void upload(String folder, String fileName, InputStream uploadedFile) throws FileNotFoundException {
		String filePath = folder + "/" + fileName;
		File newFile = new File(filePath);
		FileOutputStream exit = new FileOutputStream(newFile);
		copy(uploadedFile, exit);
		System.out.println(fileName);
	}
	
	public void copy(InputStream source, OutputStream destiny) {
		int bite = 0;
		byte[] maxLength = new byte[MB * 5];
		
		try {
			while((bite = source.read(maxLength)) >= 0) {
				destiny.write(maxLength, 0, bite);
			}
		} catch(IOException e) {
			System.out.println("Error" + e.getMessage());
		}
	}
	
	public void saveInFOlder(String folder, String fileName, File file) {
//		Path folderPath = Paths.get(folder);
//		if(!Files.deleteIfExists(folderPath)) {
//			Files.createDirectories(folderPath);
//		}
//		
//		Path filePath = Paths.get(folder, fileName);
//		
//		Files.write(filePath, filePath.getb());
	}
}
