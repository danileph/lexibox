import { MenuItem } from "@/widgets/sidebar";
import { BookIcon, PersonIcon, SearchIcon } from "@/shared/ui/icons";

export const menu: MenuItem[] = [
  { name: "Search", url: "/search", renderIcon: SearchIcon },
  { name: "Vocabulary", url: "/vocabulary", renderIcon: BookIcon },
  { name: "Profile", url: "/profile", renderIcon: PersonIcon },
];
