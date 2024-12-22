/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {AppPrincipal } from './app/components/principal/app.principal';

bootstrapApplication(AppPrincipal ,appConfig)
  .catch((err) => console.error(err));
