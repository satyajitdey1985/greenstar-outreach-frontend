import { StudentPerformanceModule } from './student-performance.module';

describe('StudentPerformanceModule', () => {
  let studentPerformanceModule: StudentPerformanceModule;

  beforeEach(() => {
    studentPerformanceModule = new StudentPerformanceModule();
  });

  it('should create an instance', () => {
    expect(studentPerformanceModule).toBeTruthy();
  });
});
