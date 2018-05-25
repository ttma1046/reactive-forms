import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
      this.myForm = this.fb.group({
          email: ['', ]
      })
  }

  async submitHandler() {
     this.loading = true;
     
     const formValue = this.myForm.value;

     try {
         await this.afs.collection('contacts').add(formValue);
         this.success = true;
     } catch(err) {
         console.error(err);
     }

     this.loading = false;
  }
}
