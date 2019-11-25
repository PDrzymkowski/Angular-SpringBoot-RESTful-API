import { Component, OnInit, Input } from '@angular/core';
import { FamilyMember } from '../../models/FamilyMember';
import { FamilyMemberServiceService } from 'src/app/services/family-member-service.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-family-member-list',
  templateUrl: './family-member-list.component.html',
  styleUrls: ['./family-member-list.component.css']
})
export class FamilyMemberListComponent implements OnInit {
  familyMembers: FamilyMember[];
  
  constructor(private service:FamilyMemberServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllFamilyMembers().subscribe(data =>{
      this.familyMembers = data;
    });
  }

  deleteFamilyMember(familyMemberToDelete: FamilyMember) {
    this.familyMembers = this.familyMembers.filter(member => member.id !== familyMemberToDelete.id);
    this.service.deleteFamilyMember(familyMemberToDelete).subscribe();
  }

  updateFamilyMember(familyMemberToUpdate: FamilyMember) {
    this.router.navigate([`/update/${familyMemberToUpdate.id}`, 
    {state: {id: familyMemberToUpdate.id}}]);
  }
}
