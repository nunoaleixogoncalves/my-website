import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: '**', component: ContentComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload',
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }