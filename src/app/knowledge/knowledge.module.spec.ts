import { KnowledgeModule } from './knowledge.module';

describe('KnowledgeModule', () => {
  let knowledgeModule: KnowledgeModule;

  beforeEach(() => {
    knowledgeModule = new KnowledgeModule();
  });

  it('should create an instance', () => {
    expect(knowledgeModule).toBeTruthy();
  });
});
