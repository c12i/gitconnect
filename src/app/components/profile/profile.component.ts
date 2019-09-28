import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  userProfile: any;
  repos: any;
  username: string;

  constructor(private service: ProfileService) { }

  searchUser() {
    this.service.updateFields(this.username);
    this.service.getProfileData()
      .subscribe(profile => {
        console.log(profile);
        this.userProfile = profile;
      });

    this.service.getRepoData()
      .subscribe(repos => {
        this.repos = repos;
        console.log(repos);
      });
  }

  ngOnInit() {
  }

}
