import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <h1>{t('mainHeadline')}</h1>
      <br />
      <p>{t('mainContent')}</p>
    </div>
  );
};

export default MainPage;
