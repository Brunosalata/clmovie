package com.brunosalata.clmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunosalata.clmovie.entities.Score;
import com.brunosalata.clmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
