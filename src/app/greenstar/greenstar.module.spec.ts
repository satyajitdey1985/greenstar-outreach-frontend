import { GreenstarModule } from './greenstar.module';

describe('GreenstarModule', () => {
  let greenstarModule: GreenstarModule;

  beforeEach(() => {
    greenstarModule = new GreenstarModule();
  });

  it('should create an instance', () => {
    expect(greenstarModule).toBeTruthy();
  });
});
