import { Component, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  addDoc,
  Firestore,
  collection,
  setDoc,
  doc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  email?: string;
  password?: string;
  e_id?: number;

  constructor(public auth: Auth, public firestore: Firestore) {}

  ngOnInit(): void {}

  handleRegister(): void {
    if (!this.email || !this.password || !this.e_id) {
      alert('Fill all the fields');
      return;
    }
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((response) => {
        // const studentRef = collection(this.firestore, 'Student');

        setDoc(doc(this.firestore, 'Teacher', response.user.uid), {
          username: this.email,
          cms_id: this.e_id,
          u_id: response.user.uid,
        }).then((response) => {
          alert('successfully registered teacher');
          this.email = '';
          this.e_id = undefined;
          this.password = undefined;
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
