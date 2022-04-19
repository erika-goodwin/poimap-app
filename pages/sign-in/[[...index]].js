import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    console.log('sign-in page accessed ')
  return <SignIn path="/sign-in" routing="path" />;
}