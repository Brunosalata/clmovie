package com.brunosalata.clmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunosalata.clmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
