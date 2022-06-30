import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

import { LandingFrontmatter } from "../typings";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;
}

interface NavLinkProps {
  className?: string;
  href: string;
  target?: string;
  onClick?: () => void;
  children: string;
}

interface NavIconProps {
  href: string;
  IconComponent: React.FC<{ className?: string }>;
}

const NavLink: React.FC<NavLinkProps> = ({
  className,
  href,
  target,
  onClick,
  children,
}) => {
  return (
    <OutboundLink
      className={`${className} text-xl italic font-bold uppercase lg:transition-all lg:hover:text-green-400`}
      href={href}
      onClick={() => onClick && onClick()}
      {...(target ? { target } : {})}
    >
      {children}
    </OutboundLink>
  );
};

const NavIcon: React.FC<NavIconProps> = ({ href, IconComponent }) => {
  return (
    <OutboundLink
      className="transition-all hover:text-green-400"
      href={href}
      target="_blank"
    >
      <IconComponent className="w-6 h-6 transition-all hover:fill-green-400" />
    </OutboundLink>
  );
};

export const Nav: React.FC<LandingFrontmatter> = (frontmatter) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row gap-2 p-12 lg:ml-12">
        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0 invisible"
          } fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-2 transition-all bg-green-400 lg:!opacity-100 lg:!visible lg:bg-transparent lg:h-auto lg:w-full lg:justify-around lg:flex-row lg:static`}
        >
          <StaticImage
            className="w-32 h-auto"
            src="../images/WMSLogo.png"
            alt=""
          />

          <NavLink
            className="lg:hidden"
            href="#top"
            onClick={() => setIsOpen(false)}
          >
            TOP
          </NavLink>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>
            {/* ABOUT */}
            {frontmatter.about_title}
          </NavLink>
          <NavLink
            href={frontmatter.opensea_url}
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            {/* SHOP */}
            {frontmatter.shop_nav_title}
          </NavLink>
          <NavLink href="#team" onClick={() => setIsOpen(false)}>
            {/* TEAM */}
            {frontmatter.team_title}
          </NavLink>
          <NavLink href="#roadmap" onClick={() => setIsOpen(false)}>
            {/* ROADMAP */}
            {frontmatter.roadmap_title}
          </NavLink>
          <NavLink href="#donations" onClick={() => setIsOpen(false)}>
            {/* DONATIONS */}
            {frontmatter.donations_title}
          </NavLink>
          <NavLink href="#benefits" onClick={() => setIsOpen(false)}>
            {/* BENEFITS */}
            {frontmatter.benefits_title}
          </NavLink>
          <NavLink href="#faq" onClick={() => setIsOpen(false)}>
            {/* FAQ */}
            {frontmatter.faq_title}
          </NavLink>
          <NavLink href="#blog" onClick={() => setIsOpen(false)}>
            {/* BLOG */}
            {frontmatter.blog_nav_title}
          </NavLink>

          <div className="flex flex-row items-center justify-center gap-2">
            <NavLink
              className="lg:text-green-400 !not-italic"
              href="/"
              onClick={() => {
                setIsOpen(false);
                localStorage.setItem("preferredLangKey", "en");
              }}
            >
              EN
            </NavLink>
            <NavLink
              className="lg:text-green-400 !not-italic"
              href="/es/"
              onClick={() => {
                setIsOpen(false);
                localStorage.setItem("preferredLangKey", "es");
              }}
            >
              ES
            </NavLink>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <NavIcon href={frontmatter.twitter_url} IconComponent={TwitterIcon} />
          <NavIcon
            href={frontmatter.instagram_url}
            IconComponent={InstagramIcon}
          />
          <NavIcon href={frontmatter.discord_url} IconComponent={DiscordIcon} />
          <NavIcon href={frontmatter.opensea_url} IconComponent={OpenseaIcon} />
        </div>
      </nav>

      <div className="fixed top-0 right-0 z-50 p-12 lg:hidden">
        <div
          className={`${isOpen ? "checked" : ""} w-6 h-6 hamburger`}
          onClick={() => setIsOpen((p) => !p)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};
