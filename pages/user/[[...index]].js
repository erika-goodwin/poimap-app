import { UserProfile } from "@clerk/clerk-react";

export default function UserProfilePage() {
  console.log("user page accessed ");
  return <UserProfile path="/user" routing="path" />;
}
