import { MAIN_MENU } from "@/config/nav";
import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";
import ModeSwitch from "../theme/switch-mode";

export default function Navbar() {
  return (
    <div className="max-w-2xl w-full mx-auto md:sticky md:bg-background top-0 z-50 flex justify-between items-center ">
      <MainNav links={MAIN_MENU.links} />
      <MobileNav links={MAIN_MENU.links} />
      <div className="pt-4 md:pt-0 px-2">
        <ModeSwitch />
      </div>
    </div>
  );
}
