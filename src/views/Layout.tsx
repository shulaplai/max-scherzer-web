import Link from "next/link";

import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Layout = () => (
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
            <a>Interesting Story</a>
          </Link>
        </li>
        <li>
          <Link href="/pitching">
            <a>Youtube Introduction</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);
export { Layout };
