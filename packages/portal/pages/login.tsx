import Nav from '../components/home/Nav';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const router = useRouter();

  const handleOnSubmit = () => {
    localStorage.setItem('isLogin', 'true');
    router.push('/');
  };

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex justify-center items-center flex-col mt-8 mx-4">
        <form
          action="/"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          // onSubmit={() => {
          //   handleOnSubmit();
          // }}
        >
          <div className="mb-4">
            <legend>Email</legend>
            <input type="email" placeholder="Email" />
          </div>
          <br />
          <div className="mb-4">
            <legend>Password</legend>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={() => {
              //   handleOnSubmit();
              // }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
