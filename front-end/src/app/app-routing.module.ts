import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { CareerComponent } from './views/career/career.component';
import { TeamComponent } from './views/team/team.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { SiteEditorComponent } from './views/devModeOnly/site-editor/site-editor.component';
import { environment } from 'src/environments/environment';
import { GraceHackweekComponent } from './views/grace-hackweek/grace-hackweek.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'BramhaDuttVishwakarma-Portfolio',component: HomepageComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'career',component:CareerComponent},
  {path:'team',component:TeamComponent},
  {path:'publications',component:PublicationsComponent},
  {path:'blogs',component:BlogsComponent},
  {path: 'grace-hackweek', component:GraceHackweekComponent},
  {path: 'edit-site',component: (!environment.production? SiteEditorComponent:NotFoundComponent)},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
