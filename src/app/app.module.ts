import { AppGlobalErrorHandler } from './../services/errorhandlers/appGlobalErrorHandler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, ErrorHandler  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { Global } from './models/global';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CookieLawModule } from 'angular2-cookie-law';
import { PresentationModule } from './presentation/presentation.module';
import { RegisterUserComponent } from './centrestage/register-user/register-user.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RegisterUserComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        CookieLawModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        AngularMultiSelectModule,
        HttpClientModule
    ],
    providers: [
        Global,
        {provide: ErrorHandler, useClass: AppGlobalErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
