import { GoogleLogin } from '@react-oauth/google';

export function ButtonGoogleLogin() {
    const handleSuccess = (credentialResponse) => {
      // Handle the successful login here
      console.log('Google login successful', credentialResponse);
    };
  
    const handleError = () => {
      // Handle login errors here
      console.log('Google login failed');
    };
  
    return (
      <div >
        <GoogleLogin
          className="w-full h-12 rounded-lg shadow-sm focus:outline-none pointer-events-auto hover:bg-orange-300 hover:text-orange-500 focus:border-secondary px-4 bg-secondary text-white font-bold dark:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-amber-500 "
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    );
  }