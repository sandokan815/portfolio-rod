// import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import {
  SiSkype,
  SiGmail,
  SiTelegram,
  SiDiscord,
  SiWhatsapp,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-8 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <a href={`mailto:${siteMetadata.email}`} target="_blank">
            <SiGmail className="ContactIcon" />
          </a>
          <a href="https://join.skype.com/invite/ohFFT17RHW7O" target="_blank">
            <SiSkype className="ContactIcon" />
          </a>
          <a href="https://t.me/anthonyroan" target="_blank">
            <SiTelegram className="ContactIcon" />
          </a>
          <a href="https://discordapp.com/users/anthonyroan" target="_blank">
            <SiDiscord className="ContactIcon" />
          </a>
          <a href={`tel:+${siteMetadata.phone}`}>
            <SiWhatsapp className="ContactIcon" />
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2025 Anthony Rodríguez</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
      {/* <ContactButton /> */}
    </footer>
  );
}
