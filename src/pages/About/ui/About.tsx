import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <h2>{t("aboutHeadline")}</h2>
      <br />
      <p>{t("aboutContent")}</p>
    </div>
  );
};
export default About;
