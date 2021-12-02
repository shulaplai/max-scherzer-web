import Image from "next/image";
import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/new">
            <a>News</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <Image
        src="/../public/assets/images/max-highfive.jpg"
        alt="Picture of the author"
        width={1000}
        height={500}
      />
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Max scherzer</span>
          </>
        }
        description="The best pitcher in MLB."
      />
    </Section>
  </Background>
);

export { Hero };
