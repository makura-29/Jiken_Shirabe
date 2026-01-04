package com.han.JikenS.dto;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;


public class SearchRequest {

	private String query;

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	
	
}
