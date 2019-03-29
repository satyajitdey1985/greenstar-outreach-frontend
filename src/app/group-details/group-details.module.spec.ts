import { GroupDetailsModule } from './group-details.module';

describe('GroupDetailsModule', () => {
  let groupDetailsModule: GroupDetailsModule;

  beforeEach(() => {
    groupDetailsModule = new GroupDetailsModule();
  });

  it('should create an instance', () => {
    expect(groupDetailsModule).toBeTruthy();
  });
});
