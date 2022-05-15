package com.brunosalata.clmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunosalata.clmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
}
