import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { WorkComponent } from './pages/work/work.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    NotFoundComponent,
    HomeCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
