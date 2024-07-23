import Link from 'next/link';

import TelegramLogo from '@/button/TelegramLogo';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Centinaia di persone interessanti aspettano solo te."
      subtitle="Inizia a chattare adesso."
      button={
        <Link href="https://t.me/TelegleBot">
          <Button>
            <>
              Vai al bot
              <TelegramLogo />
            </>
          </Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
