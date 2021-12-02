import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>News</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <Image
        src="/../public/assets/images/max-highfive.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <HeroOneButton
        title={
          <>
            {'The website for\n'}
            <span className="text-primary-500">Max scherzer</span>
          </>
        }
        description="The best pitcher in MLB."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Click to know more</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
