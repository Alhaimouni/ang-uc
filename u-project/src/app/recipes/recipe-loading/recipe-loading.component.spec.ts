import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLoadingComponent } from './recipe-loading.component';

describe('RecipeLoadingComponent', () => {
  let component: RecipeLoadingComponent;
  let fixture: ComponentFixture<RecipeLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
