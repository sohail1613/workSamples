package com.jawab.blog.serviceImplementation;

import com.jawab.blog.services.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImplementation implements FileService {

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        //File name
        String name = file.getOriginalFilename(); //abc.png

        //random name generate file
        String randomID = UUID.randomUUID().toString();
        String fileName1 = randomID.concat(name.substring(name.lastIndexOf(".")));

        //file path
        String filePath = path + File.separator + fileName1;

        //create folder if not created
        File createFolder = new File(path);
        if (!createFolder.exists()){
            createFolder.mkdir();
        }

        //file copy
        Files.copy(file.getInputStream(), Paths.get(filePath));
        return fileName1;
    }

    @Override
    public InputStream getResource(String path, String fileName) throws FileNotFoundException {
        //database logic to return inputStream
        String filePath = path+File.separator+fileName;
        InputStream inputStream = new FileInputStream(filePath);
        return inputStream;
    }
}
