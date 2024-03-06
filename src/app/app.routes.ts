import { Routes } from '@angular/router';
import { MainModule } from './modules/main/main.module';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import(`./modules/main/main.module`).then(m => MainModule)
    }
];
