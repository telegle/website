import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import TelegramLogo from '@/button/TelegramLogo';
import { AppConfig } from '@/utils/AppConfig';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const { t } = useTranslation('common');
  return (
    <Section>
      <CTABanner
        title={t('banner.title')}
        subtitle={t('banner.subtitle')}
        button={
          <Link href={AppConfig.bot_link}>
            <Button>
              <>
                {t('banner.button')}
                <TelegramLogo />
              </>
            </Button>
          </Link>
        }
        description={t('telegram')}
      />
    </Section>
  );
};

export { Banner };
