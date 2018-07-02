import { stringUtils } from '../../utils';

describe('String utils', () => {
  it('should cut and insert ... at the end of the text if text lenght greater or equals then the limiter', () => {
    const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione hic vel facere deleniti eius praesentium laborum sunt dicta. Voluptas temporibus recusandae quae consequuntur perferendis aut, neque dolor eos animi!';
    const newString = stringUtils.limitString(string);
    expect(newString).toEqual('Lorem ipsu...');
  });

  it('should not insert and cut text if text lenght is lower than the limiter', () => {
    const string = 'Lorem ipsum dolor';
    const newString = stringUtils.limitString(string, 20);
    expect(newString).toEqual(string);
  });
});
