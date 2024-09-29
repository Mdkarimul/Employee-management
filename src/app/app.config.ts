import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterStateSnapshot, TitleStrategy, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { Title } from '@angular/platform-browser';



// implement title strategy
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding(),withRouterConfig({paramsInheritanceStrategy:'always'})),
    {
      provide:TitleStrategy,useClass:TemplatePageTitleStrategy
    }

  ],
};
