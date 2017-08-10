package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.MyRepository;
import com.app.model.Person;

@Service
public class MyServiceImpl implements MyService {
	
	@Autowired
	private MyRepository myRepository;

	@Override
	public List<Person> findAll() {
		// TODO Auto-generated method tub
		return (List<Person>) myRepository.findAll();
	}

}
