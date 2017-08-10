package com.app.controller.rest;

import java.util.List;

import com.app.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.MyService;


@RestController
public class HomeRestController {

	@Autowired
	private MyService myService;

	@GetMapping("/home/people")
	public List<Person> getEmails() {
		return myService.findAll();
	}
}
