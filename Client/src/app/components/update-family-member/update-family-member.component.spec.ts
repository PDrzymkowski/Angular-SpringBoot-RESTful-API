import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamilyMemberComponent } from './update-family-member.component';

describe('UpdateFamilyMemberComponent', () => {
  let component: UpdateFamilyMemberComponent;
  let fixture: ComponentFixture<UpdateFamilyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFamilyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamilyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
