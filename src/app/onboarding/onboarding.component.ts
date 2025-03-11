import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: false,
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  // Static data for demonstration – replace with a service call if needed.
  departments: string[] = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Sciences'];
  levels: string[] = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  courses: { id: string, name: string }[] = [
    { id: 'cs101', name: 'Introduction to Computer Science' },
    { id: 'eng201', name: 'Engineering Mechanics' },
    { id: 'bus101', name: 'Introduction to Business' },
    { id: 'art101', name: 'Fundamentals of Art' },
    { id: 'sci101', name: 'General Science' }
  ];

  // Model properties for the form fields.
  selectedDepartment: string = '';
  selectedLevel: string = '';
  selectedCourses: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Optionally, fetch dynamic data for departments, levels, and courses here.
  }

  // Toggle course selection.
  onCourseToggle(courseId: string, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedCourses.includes(courseId)) {
        this.selectedCourses.push(courseId);
      }
    } else {
      this.selectedCourses = this.selectedCourses.filter(id => id !== courseId);
    }
  }

  // Submit the onboarding data.
  onSubmit(): void {
    const onboardingData = {
      department: this.selectedDepartment,
      level: this.selectedLevel,
      passedCourses: this.selectedCourses
    };

    console.log('Onboarding data submitted:', onboardingData);

    // After saving the data, navigate to the main dashboard or another page.
    this.router.navigate(['/dashboard']);
  }
}

