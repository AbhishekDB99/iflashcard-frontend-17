import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams ,HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}

  getAllFlashCards() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OTA5MDg4LCJpYXQiOjE3MTQ0MDA0MTIsImV4cCI6MTcxNDQ4NjgxMn0.tEk4MEKpSD-vixy6hf2aZCGMg9tv8NtBab1ZYhUlHAA';
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.get('http://localhost:2099/flash_card/card_by_username', {
      headers,
    });
  }
}
