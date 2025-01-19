
import frame from "../../public/assets/header.jpg"

const Header = () => {
  return (
    <div className="header min-h-[480px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${frame.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="text-center text-onSurface">
        <h1 className="lg:text-5xl text-3xl">IBN AL-NAFIS Bakery</h1>
        <hr className="my-5" />
        <p className="lg:text-2xl text-lg">Who has never tasted IBN Al-nafis, knows not what is bakeries.</p>
      </div>
    </div>
  )
}

export default Header;