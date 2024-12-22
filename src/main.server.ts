import { bootstrapApplication } from '@angular/platform-browser';
import { AppPrincipal } from './app/components/principal/app.principal';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppPrincipal, config);

export default bootstrap;
