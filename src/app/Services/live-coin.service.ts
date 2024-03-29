import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveCoinService {

  constructor(private http: HttpClient) { }


  liveCoin() {
    return this.http.get(`${environment.liveCoinUrl}/api/livecoin`);
  }
}
