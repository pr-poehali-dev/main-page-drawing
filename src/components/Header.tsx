
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Возможности", href: "/features" },
    { name: "Тарифы", href: "/pricing" },
    { name: "Интеграции", href: "/integrations" },
    { name: "API", href: "/api" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center font-bold text-xl text-primary">
          <span className="text-2xl font-bold">SigmaSMS</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    className="text-lg font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="w-full">
                    Войти
                  </Button>
                  <Button className="w-full">
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.href} className="text-sm font-medium px-3 py-2 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm">
                Регистрация
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
