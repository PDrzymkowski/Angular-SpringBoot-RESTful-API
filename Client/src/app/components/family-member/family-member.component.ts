import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FamilyMember } from '../../models/FamilyMember';
import { FamilyMemberServiceService } from 'src/app/services/family-member-service.service';


@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent implements OnInit {
  @Input() familyMember: FamilyMember;
  @Output() deletedFamilyMember: EventEmitter<FamilyMember> = new EventEmitter<FamilyMember>();


  constructor(private service: FamilyMemberServiceService) { }

  ngOnInit() {
  }

  onDelete(familyMember: FamilyMember) {
    this.deletedFamilyMember.emit(familyMember);
  }

}
