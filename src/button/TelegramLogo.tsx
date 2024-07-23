type ITelegramLogoProps = {
  size?: number;
};

const TelegramLogo = (props: ITelegramLogoProps) => (
  <img
    style={{
      display: 'inline',
      filter: 'invert(1)',
      marginLeft: '0.3rem',
    }}
    src="/assets/images/telegram.svg"
    width={props.size ?? 40}
    alt="telegram"
  />
);

export default TelegramLogo;
