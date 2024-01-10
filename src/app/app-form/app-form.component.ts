import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  formData: any[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadFormData();
  }

  private loadFormData(): void {
    this.http.get<any[]>('assets/formData.json').subscribe(
      data => {
        this.formData = data;
        console.log('Form Data:', this.formData);
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error => {
        console.error('Error loading JSON file:', error);
      }
    );
  }
}
