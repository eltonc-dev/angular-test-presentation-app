import {IncreaseNumberComponent} from './increase-number.component';

describe('IncreaseNumberComponent - UNIT', () => {
  let component: IncreaseNumberComponent;

  beforeEach(() => {
    component = new IncreaseNumberComponent();
  });

  it('Should value start with 0', () => {
    expect(component.value).toEqual(0);
  });

  it('Should add 1 to value when increase method called', () => {
    component.increase();

    expect(component.value).toEqual(1);
  });
});
