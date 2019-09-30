import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // to be moved to environment
  private username: string;
  private token = environment.token;

  constructor(private http: HttpClient) {}

  getProfileData() {
    return this.http.get(`https://api.github.com/users/${this.username}?${this.token}`);
  }

  getRepoData() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.token}`);
  }

  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.token}`);
  }

  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/following?${this.token}`);
  }

  updateFields(username: string) {
    this.username = username;
  }
}
