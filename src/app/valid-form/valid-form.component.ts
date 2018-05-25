import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-valid-form',
    templateUrl: './valid-form.component.html',
    styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {
    myForm: FormGroup;


    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern('')]],
            age: [null, [Validators.required, Validators.minLength(2), Validators.min(18)]],
            agree: [false, [Validators.requiredTrue]]
        });
    }

    get email() {
        return this.myForm.get('email');
    }

    get password() {
        return this.myForm.get('password');
    }


    get age() {
        return this.myForm.get('age');
    }

    get agree() {
        return this.myForm.get('agree');
    }
}
