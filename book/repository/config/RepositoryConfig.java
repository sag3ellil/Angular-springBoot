package com.bouraoui.book.repository.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.bouraoui.book.entity.Book;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config)
	{
		//RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
	config.exposeIdsFor(Book.class);
	}

}
