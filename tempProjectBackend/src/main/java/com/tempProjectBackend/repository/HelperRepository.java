package com.tempProjectBackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.tempProjectBackend.models.Helper;

public interface HelperRepository extends JpaRepository<Helper, Integer>{
		
	@Query("select h from Helper h where h.HelperService =:key ")
	List<Helper> findHelperByHelperService(@Param("key") String helperService);
	
	@Query("select h from Helper h where h.HelperEmail =:keyone and h.HelperContact =:keytwo")
	Helper HelperLogin(@Param("keyone") String helperEmail,@Param("keytwo") String helperContact);
	
}
