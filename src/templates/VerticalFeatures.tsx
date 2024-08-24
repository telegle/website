import { useTranslation } from 'next-i18next';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const { t } = useTranslation('common');
  return (
    <Section
      title={t('features.title')}
      description={t('features.description')}
    >
      <VerticalFeatureRow
        title={t('features.first.title')}
        description={t('features.first.description')}
        image="/assets/images/1.png"
        imageAlt={t('features.first.alt')}
      />
      <VerticalFeatureRow
        title={t('features.second.title')}
        description={t('features.second.description')}
        image="/assets/images/2.png"
        imageAlt={t('features.second.alt')}
        reverse
      />
      <VerticalFeatureRow
        title={t('features.third.title')}
        description={t('features.third.description')}
        image="/assets/images/3.png"
        imageAlt={t('features.third.alt')}
      />
    </Section>
  );
};

export { VerticalFeatures };
