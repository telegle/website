import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-2">
      <CenteredFooter />
    </Section>
  </Background>
);

export { Footer };
