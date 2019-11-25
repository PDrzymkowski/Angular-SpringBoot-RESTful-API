import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FamilyMemberServiceService } from 'src/app/services/family-member-service.service';
import { FamilyMember } from 'src/app/models/FamilyMember';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-family-member',
  templateUrl: './add-family-member.component.html',
  styleUrls: ['./add-family-member.component.css']
})
export class AddFamilyMemberComponent implements OnInit {

  newFamilyMember: FamilyMember;

  constructor(private service: FamilyMemberServiceService,
              private router: Router,
              private route: ActivatedRoute) { 
                this.newFamilyMember = new FamilyMember;
              }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addFamilyMember(this.newFamilyMember).subscribe(
      result => this.backToList()
    );
  }

backToList() {
  this.router.navigate(['/'])
}
}
