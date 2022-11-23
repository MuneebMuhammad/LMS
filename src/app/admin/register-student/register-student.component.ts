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
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  name?: string;
  cms?: number;
  password?: string;

  constructor(public auth: Auth, public firestore: Firestore) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (!this.name || !this.cms || !this.password) {
      alert('Fill all the fields');
      return;
    }
    createUserWithEmailAndPassword(this.auth, this.name, this.password)
      .then((response) => {
        // const studentRef = collection(this.firestore, 'Student');

        setDoc(doc(this.firestore, 'Student', response.user.uid), {
          username: this.name,
          cms_id: this.cms,
          u_id: response.user.uid,
        }).then((response) => {
          alert('successfully registered student');
          this.name = '';
          this.cms = undefined;
          this.password = undefined;
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
