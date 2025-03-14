import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
	componentToShow: string = "welcome";
	router: any;

	constructor(private axiosService: AxiosService) { }

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

	onLogin(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/api/auth/login",
		    {
		        username: input.username,
		        password: input.password
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
		        this.router.navigate(['/onboarding']);

		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "welcome";
		    }
		);

	}

	onRegister(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/api/auth/register",
		    {
		        username: input.username,
		        email: input.email,
		        password: input.password
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
		        this.componentToShow = "messages";
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "welcome";
		    }
		);
	}

}