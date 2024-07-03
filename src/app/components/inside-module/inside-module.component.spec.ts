import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideModuleComponent } from './inside-module.component';

describe('InsideModuleComponent', () => {
  let component: InsideModuleComponent;
  let fixture: ComponentFixture<InsideModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsideModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
