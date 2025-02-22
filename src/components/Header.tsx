
import { useTranslation } from "react-i18next";
import frame from "../../public/assets/header.jpg"

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header min-h-[480px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${frame.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="text-center text-onSurface">
        <h1 className="lg:text-5xl text-3xl"> {t("header.title")}</h1>
        <hr className="my-5" />
        <p className="lg:text-2xl text-lg">{t("header.description")}</p>
      </div>
    </div>
  )
}

export default Header;