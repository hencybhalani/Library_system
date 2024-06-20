import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../../material.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../_service/UserService';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmotp',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MaterialModule,MatButtonModule],
  templateUrl: './confirmotp.component.html',
  styleUrl: './confirmotp.component.css'
})
export class ConfirmotpComponent {
  @ViewChild('digit1') digit1: ElementRef | undefined;
  @ViewChild('digit2') digit2: ElementRef | undefined;
  @ViewChild('digit3') digit3: ElementRef | undefined;
  @ViewChild('digit4') digit4: ElementRef | undefined;
  userData: any; // This should be populated appropriately

  
  constructor(private service: UserService, private toaster: ToastrService, private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['userData']) {
      this.userData = navigation.extras.state['userData'];
    } else {
      // If no user data is present, navigate back to the registration page
      this.router.navigate(['/register']);
    }
  }

  ngAfterViewInit(): void {
    // Ensure the first input is focused when the component is initialized
    this.digit1?.nativeElement.focus();
  }

  moveToNext(currentInput: any, nextInput: any, prevInput: any): void {
    if (currentInput.value && currentInput.value.length >= 1 && nextInput) {
      nextInput.focus();
    } else if (!currentInput.value && prevInput) {
      prevInput.focus();
    }
  }

  onBackspace(event: KeyboardEvent, currentInput: any, prevInput: any): void {
    if (event.key === 'Backspace' && currentInput.value === '') {
      this.moveToNext(currentInput, null, prevInput);
    }
  }

  verifyOtps(): void {
    debugger;
    console.log("hello");
    const otp = `${this.digit1?.nativeElement.value}${this.digit2?.nativeElement.value}${this.digit3?.nativeElement.value}${this.digit4?.nativeElement.value}`;
    if (otp.length === 4) {
      this.service.verifyOtp(this.userData.email, otp).subscribe({
        next: (res) => {
          if (res.status === "success" && res.message === "OTP valid successfully") {
            this.registerUser();
          } else {
            this.toaster.error('Invalid OTP. Please try again.');
          }
        },
        error: (error) => {
          console.log('Error during OTP verification:', error);
          let errorMessage = 'Failed to verify OTP. Please try again.';
          try {
            const errorResponse = JSON.parse(error.error);
            if (errorResponse.message) {
              errorMessage = errorResponse.message;
            }
          } catch (e) {
            console.error('Non-JSON error response:', error.error);
          }
          this.toaster.error(errorMessage);
        }
      });
    } else {
      this.toaster.error('Please enter the complete OTP.');
    }
  }

  registerUser(): void {
    this.service.userregistration(this.userData).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        this.router.navigateByUrl('/register');
        this.toaster.success('Thank you for Registering. your account has been sent for approval.once it is approved, you will get email.');
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.toaster.error('Registration failed. Please try again.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/register']);
  }

  // onSubmit(event: Event): void {
  //   event.preventDefault();
  //   this.verifyOtp();
  // }
}

