package com.han.JikenS.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.han.JikenS.dto.SearchRequest;
import com.han.JikenS.entity.AccidentProperty;
import com.han.JikenS.repo.AccidentPropertyRepository;

@RestController
@RequestMapping("/api/accidents")
@CrossOrigin(origins = "*")
public class AccidentPropertyController {

	private final AccidentPropertyRepository repo;

	public AccidentPropertyController(AccidentPropertyRepository repo) {
		
		this.repo = repo;
	}
	
	@PostMapping("/search")
	public List<AccidentProperty> search(@RequestBody SearchRequest request){
		return repo.findByAddressContaining(request.getQuery());
	}
	
	@PostMapping
	public String create(@RequestBody AccidentProperty property) {
	    AccidentProperty saved = repo.save(property);
	    return "Accident property created successfully with ID: " + saved.getId();
	}

	
	
	
}
