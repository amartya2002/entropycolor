import React from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div>
      <footer className="bg-back">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="inline-flex w-full justify-center gap-3 md:w-auto md:justify-start lg:ml-auto">
              <a className="h-6 w-6 fill-black transition hover:text-blue-500">
                <span className="sr-only">github</span>
                <GitHubLogoIcon
                  className="md hydrated h-5 w-5"
                  name="logo-github"
                  role="img"
                  aria-label="logo github"
                ></GitHubLogoIcon>
              </a>
              <a className="h-6 w-6 fill-black transition hover:text-blue-500">
                <span className="sr-only">twitter</span>
                <TwitterLogoIcon
                  className="md hydrated h-5 w-5"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></TwitterLogoIcon>
              </a>
              <a className="h-6 w-6 fill-black transition hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <InstagramLogoIcon
                  className="md hydrated h-5 w-5"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></InstagramLogoIcon>
              </a>
              <a className="h-6 w-6 fill-black transition hover:text-blue-500">
                <span className="sr-only">Linkedin</span>
                <LinkedInLogoIcon
                  className="md hydrated h-5 w-5"
                  name="logo-linkedin"
                  role="img"
                  aria-label="logo linkedin"
                ></LinkedInLogoIcon>
              </a>
            </span>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-400">
              <span className="mx-auto mt-2 text-sm text-gray-500">
                Built by Amartya Sinha
                {/* <a href="https://unwrapped.design" className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
                          Entropy Gradient
                        </a> */}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
