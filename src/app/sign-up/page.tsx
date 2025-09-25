import SignUpForm from './sign-up-form';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl max-md:max-w-lg w-full p-4 shadow-2xl rounded-md bg-white">
        <div className=" w-full px-4 py-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
