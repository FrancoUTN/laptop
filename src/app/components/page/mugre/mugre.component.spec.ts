import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MugreComponent } from './mugre.component';

describe('MugreComponent', () => {
  let component: MugreComponent;
  let fixture: ComponentFixture<MugreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MugreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MugreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
