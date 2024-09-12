import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import TelegramLogo from '@/button/TelegramLogo';
import { AppConfig } from '@/utils/AppConfig';
import { getFlagEmoji } from '@/utils/functions';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneLogo } from '../hero/HeroOneLogo';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-5">
        <NavbarTwoColumns logo={<Logo xl />}>
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {getFlagEmoji(locale)}
              </Link>
            </li>
          ))}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-6 pb-16">
        <HeroOneLogo
          src="/assets/images/telegle-logo.svg"
          size={250}
          title={
            <>
              {`${t('hero.preTitle')}\n`}
              <span className="text-primary-500">{t('hero.title')}</span>
            </>
          }
          description={t('telegram')}
          button={
            <Link href={AppConfig.bot_link}>
              <Button>
                <>
                  {t('hero.button')}
                  <TelegramLogo />
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
