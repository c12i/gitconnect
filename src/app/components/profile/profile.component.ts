import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private userProfile: any;

  constructor(private service: ProfileService) {
    this.service.getProfileData()
    .subscribe(profile => {
      console.log(profile);
      this.userProfile = profile;
    });
  }

  ngOnInit() {
  }

}
