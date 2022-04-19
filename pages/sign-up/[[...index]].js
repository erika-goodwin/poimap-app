
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    console.log('sign-up page accessed ')
  return <SignUp path="/sign-up" routing="path" />;
}