import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    public auth: Auth,
    public firestore: Firestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleLogin(): void {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(async (response: any) => {
        let user_id = response.user.uid;
        if (this.email == 'university-system@info.com') {
          localStorage.setItem('userType', 'admin');
          this.router.navigate(['/admin']);
        } else {
          const studentCollection = collection(this.firestore, 'Student');
          await getDocs(studentCollection).then((response) => {
            let found = false;
            for (let s of response.docs) {
              if (s.data()['u_id'] == user_id) {
                localStorage.setItem('userType', 'student');
                found = true;
              }
            }
            if (found == false) localStorage.setItem('userType', 'teacher');
          });
        }

        localStorage.setItem('userid', user_id);
      })
      .catch((err) => alert(err.message));
  }
}
