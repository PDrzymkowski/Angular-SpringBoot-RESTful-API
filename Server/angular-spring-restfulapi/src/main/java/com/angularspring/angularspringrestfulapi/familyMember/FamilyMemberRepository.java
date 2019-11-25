package com.angularspring.angularspringrestfulapi.familyMember;

import com.angularspring.angularspringrestfulapi.models.FamilyMember;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Long> {

}
