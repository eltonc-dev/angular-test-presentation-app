import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IncreaseNumberComponent } from './increase-number.component';

describe('IncreaseNumberComponent', () => {
  let component: IncreaseNumberComponent;
  let fixture: ComponentFixture<IncreaseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ // metados de configuração de um módulo
      declarations: [ IncreaseNumberComponent ]
    })
    .compileComponents(); // Esse método compila template e css
    // filesystem
  }));

  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
    /*
    TestBed.configureTestingModule({
        declarations: [ IncreaseComponent ]
    });
    */
    // podemos usar diretamente assim, por causa do webpack que junto todo o conteúdo do t
    // template e css dentro de um mesmo bundle - não sendo necessário acessar filesystem

    fixture = TestBed.createComponent(IncreaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // faz com que o template seja rendenizado/atualizado
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component funcionality', () => {
    let inputElement;
    let ButtonElement;

    beforeEach(() => {
      console.log('beforeEach - Component funcionality');
      inputElement = fixture.debugElement.query(By.css('#inputNumber'));
      ButtonElement = fixture.debugElement.query(By.css('#buttonNumber'));

      // const element: HTMLElement =  inputElement.nativeElement;
      // element.innerHTML;
    });

    it('Should input start with 0', () => {
      expect(inputElement.nativeElement.value).toEqual('0');
    });

    it('Should add 1 when IncreaseButton clicked', () => {
      ButtonElement.triggerEventHandler('click', null); // simula o click de usuário no botão
      fixture.detectChanges(); // rendeniza o template aplicando as modificações realizadas

      expect(inputElement.nativeElement.value).toEqual('1');
    });
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
