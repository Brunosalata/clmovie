package com.brunosalata.clmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

	//private Movie movie;
	//private User user;
	@EmbeddedId
	private ScorePK id = new ScorePK();
	
	private Double value;
	
	public Score() {
	}

	public void setMovie(Movie movie) { //método serve para entrar com um filme e associar com o score
		this.setMovie(movie);
	}
	
	public void setUser(User user) { //método serve para entrar com um user e associar com o score
		id.setUser(user);
	}
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	
	
	
}
