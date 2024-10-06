import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

export type UserType = {
  lastName: string;
  firstName: string;
  bornDate: string;
  gender: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
  ],
})
export class HomePage {
  public userForm = new FormGroup({
    lastName: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    bornDate: new FormControl(new Date().toISOString(), [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  });
  public displayUsers: UserType[] = [];
  public isSaved = false;

  constructor(private router: Router) {
  }

  public onSave(): void {
    this.isSaved = true;
    this.displayUsers.push(this.userForm.value as unknown as UserType);
    console.log('Display Users', this.userForm.value);

    this.router.navigate(['/users-list'], {
      queryParams: {
        displayUsers: JSON.stringify(this.displayUsers),
      }
    });
  }

  public onDelete(index: number): void {
    this.displayUsers = this.displayUsers.filter((user, i) => i !== index);
  }
}
