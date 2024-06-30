import { MAIN_MENU } from "@/config/nav";
import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";
import ModeSwitch from "../theme/switch-mode";

export default function Navbar() {
  return (
    <div className="max-w-4xl mx-auto flex justify-between px-2">
      <MainNav links={MAIN_MENU.links} />
      <MobileNav links={MAIN_MENU.links} />
      <ModeSwitch />
    </div>
  );
}
