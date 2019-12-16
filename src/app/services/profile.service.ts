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
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;

  constructor(private http: HttpClient) {}

  getProfileData() {
    // return this.http.get(`https://api.github.com/users/${this.username}?access_token=${this.token}`);
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getRepoData() {
    // return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${this.token}`);
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}&client_secret=${this.clientSecret}`)
  }

  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/folowing?${this.clientId}&client_secret=${this.clientSecret}`)
  }

  updateFields(username: string) {
    this.username = username;
  }
}
