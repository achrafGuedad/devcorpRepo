import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherUtilisateurComponent } from './chercher-utilisateur.component';

describe('ChercherUtilisateurComponent', () => {
  let component: ChercherUtilisateurComponent;
  let fixture: ComponentFixture<ChercherUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
