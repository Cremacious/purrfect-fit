import SignInForm from './sign-in-form';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 shadow-2xl rounded-md bg-white">
        <div className="md:max-w-md mx-auto w-full px-4 py-4">
          <SignInForm />
        </div>
        <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="w-full aspect-[12/12] object-contain"
            alt="login-image"
          />
        </div>
      </div>
    </div>
  );
}
