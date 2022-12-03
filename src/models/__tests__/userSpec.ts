import UserModel from '../user.model';
import User from '../../types/user.type';
const userModel = new UserModel();
describe('User model methods', () => {
  let initUser = {} as User;
  beforeAll(async () => {
    const userData: User = {
      email: 'nam101@gmail.com',
      firstName: 'le',
      lastName: 'nam',
      password: 'nam205806'
    };
    
    initUser = await userModel.Create(userData);
  
  });

  it('Get all user', async () => {
    const result = await userModel.Index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('Get by Id', async () => {
    const result = await userModel.Show(initUser.id as string);
    expect(result?.id).toEqual(initUser.id);
  });

  it('Auth and gen token', async () => {
      const authInfo = {
        email: 'nam101@gmail.com',
        password: 'nam205806'
      };
      const result = await userModel.Auth(authInfo.email, authInfo.password);
      expect(result?.email).toEqual(initUser.email);
    });
});
