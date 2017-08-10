package com.app.repository;

import java.util.List;

import com.app.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface MyRepository extends CrudRepository<Person, Integer> {

	List<Person> findByNameContaining(String q);
}