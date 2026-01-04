package com.han.JikenS.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.han.JikenS.entity.AccidentProperty;

public interface AccidentPropertyRepository extends JpaRepository<AccidentProperty, Long>{
	
	List<AccidentProperty> findByAddressContaining(String address);

}
