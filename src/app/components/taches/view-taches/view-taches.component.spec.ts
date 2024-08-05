import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTachesComponent } from './view-taches.component';

describe('ViewTachesComponent', () => {
  let component: ViewTachesComponent;
  let fixture: ComponentFixture<ViewTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
