import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceHackweekComponent } from './grace-hackweek.component';

describe('GraceHackweekComponent', () => {
  let component: GraceHackweekComponent;
  let fixture: ComponentFixture<GraceHackweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraceHackweekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraceHackweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
