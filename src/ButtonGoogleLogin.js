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
      <div>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          // Optionally, you can customize the button appearance and behavior
        />
      </div>
    );
  }