import createAction from '../redux';

describe('Card', () => {
  it('should return a pure object', () => {
    const action = createAction('REPOSITORIES');
    expect(action()).toEqual({ type: 'REPOSITORIES' });
  });

  it('should return redux action with parameters', () => {
    const action = createAction('REPOSITORIES', ['body']);
    expect(action('foo')).toEqual({ type: 'REPOSITORIES', body: 'foo' });
  });
});
