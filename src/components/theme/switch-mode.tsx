"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="swicht-mode"
        defaultValue={"system"}
        defaultChecked={theme === "light"}
        onCheckedChange={handleToggleTheme}
      />
      <Label htmlFor="swicht-mode">Light</Label>
    </div>
  );
};

export default ModeSwitch;
