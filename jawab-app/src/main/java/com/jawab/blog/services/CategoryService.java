package com.jawab.blog.services;

import com.jawab.blog.payloads.CategoryDto;

import java.util.List;

public interface CategoryService {
    //create
    public CategoryDto createCategory(CategoryDto categoryDto);

    //update
    CategoryDto updateCategory(CategoryDto categoryDto, Integer categoryId);

    //delete
    public void deleteCategory(Integer categoryId);

    //get
    CategoryDto getCategory(Integer categoryId);

    //getAll
    List<CategoryDto> getCategories();
}
