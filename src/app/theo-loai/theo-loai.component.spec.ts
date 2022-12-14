import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoLoaiComponent } from './theo-loai.component';

describe('TheoLoaiComponent', () => {
  let component: TheoLoaiComponent;
  let fixture: ComponentFixture<TheoLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoLoaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
