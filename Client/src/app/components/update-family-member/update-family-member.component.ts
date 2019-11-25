import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/models/FamilyMember';
import {ActivatedRoute, Router } from '@angular/router';
import { FamilyMemberServiceService } from 'src/app/services/family-member-service.service';

@Component({
  selector: 'app-update-family-member',
  templateUrl: './update-family-member.component.html',
  styleUrls: ['./update-family-member.component.css']
})
export class UpdateFamilyMemberComponent implements OnInit {
  familyMember: FamilyMember;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: FamilyMemberServiceService) { }

  ngOnInit() {
      this.service.getFamilyMemberById(+this.route.snapshot.paramMap.get("id")).subscribe(member => {
        this.familyMember = member;      
      });
  }

  onSubmit() {
    this.service.addFamilyMember(this.familyMember).subscribe(
      result => this.backToList()
    );
  }

backToList() {
  this.router.navigate(['/'])
}
}
