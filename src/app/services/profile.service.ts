import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // to be moved to environment
  private username: string;
  private clientId = 'Iv1.18248cd1cb3f1f3e';
  private clientSecret = '4b56d3d7aa29934d055e8224e4767c6bc277aec3';

  constructor(private http: HttpClient) {}

  getProfileData() {
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getRepoData() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}&client_secret=${this.clientSecret}`);
  }

  updateFields(username: string) {
    this.username = username;
  }
}
