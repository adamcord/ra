"use client";
import { UserButton, useAuth, SignInButton, useUser } from "@clerk/nextjs";
import Container from "../Container";

export const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  return (
    <div className="z-5 absolute w-full backdrop-blur-md ">
      <div
        className="
          py-4
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <p className="text-2xl font-bold">Rink Agent</p>

            {isSignedIn ? (
              <div className="flex">
                {user?.fullName && (
                  <p className="mr-2 py-1 text-white">Hi, {user.firstName}</p>
                )}
                <UserButton />
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};
