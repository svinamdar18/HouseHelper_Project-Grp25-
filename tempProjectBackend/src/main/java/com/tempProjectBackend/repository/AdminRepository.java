package com.tempProjectBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tempProjectBackend.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	
	@Query("select a from Admin a where a.username =:keyone and a.password =:keytwo")
	Admin adminLoginFunction(@Param("keyone") String username,@Param("keytwo") String password);

}
