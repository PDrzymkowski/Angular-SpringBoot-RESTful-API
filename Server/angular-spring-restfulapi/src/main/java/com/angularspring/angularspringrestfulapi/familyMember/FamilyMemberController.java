package com.angularspring.angularspringrestfulapi.familyMember;

import com.angularspring.angularspringrestfulapi.models.FamilyMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FamilyMemberController {

    @Autowired
    private FamilyMemberRepository familyMemberRepository;

    @GetMapping("/family-members")
    public List<FamilyMember> getAllFamilyMembers() {
        return (List<FamilyMember>) familyMemberRepository.findAll();
    }

    @GetMapping("/family-members/{id}")
    public Optional<FamilyMember> getFamilyMember(@PathVariable long id) {
        return familyMemberRepository.findById(id);
    }

    @PostMapping("/family-members")
    public void addFamilyMember(@RequestBody FamilyMember familyMember) {
        familyMemberRepository.save(familyMember);
    }

    @DeleteMapping("/family-members/{id}")
    public void deleteFamilyMember(@PathVariable("id") long id) {
        familyMemberRepository.deleteById(id);
    }

    @PutMapping("/family-members/{id}")
    public void updateFamilyMember(@PathVariable("id") long id, @RequestBody FamilyMember familyMember) {
        familyMemberRepository.save(familyMember);
    }

}
