import { dateUtils } from '../../utils';

describe('Date utils', () => {
  it('should format the date', () => {
    const date = new Date('2018-06-30T14:41:33Z');
    const newDate = dateUtils.toLocaleDateString(date);
    expect(newDate).toEqual('2018-6-30');
  });

  it('should return null if there is no date', () => {
    const newDate = dateUtils.toLocaleDateString();
    expect(newDate).toEqual(null);
  });
});
