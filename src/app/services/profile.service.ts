import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // to be moved to environment
  private username: string;
  private clientId = environment.clientId;

  constructor(private http: HttpClient) {}

  getProfileData() {
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}`);
  }

  getRepoData() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}`);
  }

  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}`);
  }

  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/following?${this.clientId}`);
  }

  updateFields(username: string) {
    this.username = username;
  }
}
