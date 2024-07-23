import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneLogo } from '../hero/HeroOneLogo';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneLogo
          src="/assets/images/telegle-logo.svg"
          size={400}
          title={
            <>
              {'Incontra ragazze e ragazzi su\n'}
              <span className="text-primary-500">Telegle</span>
            </>
          }
          description="Richiede Telegram."
          button={
            <Link href={AppConfig.bot_link}>
              <Button xl>
                <>
                  Inizia a chattare
                  <img
                    style={{
                      display: 'inline',
                      filter: 'invert(1)',
                      marginLeft: '0.3rem',
                    }}
                    src="/assets/images/telegram.svg"
                    width={40}
                    alt="telegram"
                  />
                </>
              </Button>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
