import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { ContentComponent } from './content/content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeContentComponent,
    ContentComponent,
    LoginFormComponent,
    ButtonsComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
