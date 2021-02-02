import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbiPage } from './ubi.page';

describe('UbiPage', () => {
  let component: UbiPage;
  let fixture: ComponentFixture<UbiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
