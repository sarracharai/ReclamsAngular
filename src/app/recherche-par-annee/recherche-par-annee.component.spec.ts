import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParAnneeComponent } from './recherche-par-annee.component';

describe('RechercheParAnneeComponent', () => {
  let component: RechercheParAnneeComponent;
  let fixture: ComponentFixture<RechercheParAnneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParAnneeComponent]
    });
    fixture = TestBed.createComponent(RechercheParAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
