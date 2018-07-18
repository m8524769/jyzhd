import { CounselingModule } from './counseling.module';

describe('CounselingModule', () => {
  let counselingModule: CounselingModule;

  beforeEach(() => {
    counselingModule = new CounselingModule();
  });

  it('should create an instance', () => {
    expect(counselingModule).toBeTruthy();
  });
});
