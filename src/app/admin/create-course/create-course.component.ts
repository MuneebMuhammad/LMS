import { Component, OnInit } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  name?: string;
  id?: string;
  creditHour?: string;

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {}

  handleRegister(): void {
    if (!this.name || !this.id || !this.creditHour) {
      alert('Fill all fields');
      return;
    }
    setDoc(doc(this.firestore, 'Course', this.id), {
      creditHour: this.creditHour,
      id: this.id,
      name: this.name,
    })
      .then((response) => {
        alert('Successfully registered Course');
      })
      .catch((err) => alert(err.message));
  }
}
