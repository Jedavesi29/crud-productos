import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductosPage } from './add-productos.page';

describe('AddProductosPage', () => {
  let component: AddProductosPage;
  let fixture: ComponentFixture<AddProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
