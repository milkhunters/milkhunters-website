import Link from 'next/link';
import { Logo } from './logo';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const NAV = [
  { to: '#about', title: 'O нас' },
  { to: '#footer', title: 'Контакты' },
];

export function Header() {
  return (
    <header className="container mt-5 flex justify-between items-center">
      <Logo />

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {NAV.map(({ to, title }) => {
            return (
              <NavigationMenuItem key={to}>
                <Link href={to} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex justify-between items-center gap-4">
        <ModeToggle />
        <Button size="lg">Портал </Button>
      </div>
    </header>
  );
}
