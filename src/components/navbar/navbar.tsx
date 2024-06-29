import { MAIN_MENU } from "@/config/nav";
import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";

export default function Navbar() {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl mx-auto">
      <MainNav links={MAIN_MENU.links} />
      <MobileNav links={MAIN_MENU.links} />
    </div>
  );
}
