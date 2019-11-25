import { Injectable } from '@angular/core';
import { FamilyMember } from '../models/FamilyMember';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyMemberServiceService {

  private httpUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.httpUrl = "http://localhost:8080/family-members";
  }


  getAllFamilyMembers(): Observable<FamilyMember[]>{
    return this.httpClient.get<FamilyMember[]>(this.httpUrl);
  }

  getFamilyMemberById(id: number): Observable<FamilyMember> {
    const url = `${this.httpUrl}/${id}`;
    return this.httpClient.get<FamilyMember>(url);
  }
  
  deleteFamilyMember(member: FamilyMember): Observable<FamilyMember>{
    const url = `${this.httpUrl}/${member.id}`;
    console.log(url);
    return this.httpClient.delete<FamilyMember>(url);
  }

  addFamilyMember(member: FamilyMember):Observable<FamilyMember> {
    return this.httpClient.post<FamilyMember>(this.httpUrl, member);
  }

}
