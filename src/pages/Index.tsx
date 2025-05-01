
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/Icon';
import BikeHero from '@/components/BikeHero';
import PopularBikes from '@/components/PopularBikes';
import RentalSteps from '@/components/RentalSteps';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигационная панель */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Icon name="Bike" size={24} className="text-primary" />
            <span className="text-xl font-bold">ВелоПрокат</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">Главная</Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary">Каталог</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">О нас</Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary">Контакты</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            
            <Link to="/admin" className="hidden md:block">
              <Button variant="outline" size="sm">
                Админ-панель
              </Button>
            </Link>
            
            <Link to="/login">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=faces&auto=format&q=60" />
                <AvatarFallback>ГП</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Основной контент */}
      <main>
        <BikeHero />
        <PopularBikes />
        <RentalSteps />
      </main>
      
      {/* Подвал */}
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ВелоПрокат</h3>
              <p className="text-sm text-muted-foreground">
                Лучший выбор велосипедов для проката в городе. Катайтесь с удовольствием!
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-primary">Главная</Link></li>
                <li><Link to="/catalog" className="hover:text-primary">Каталог</Link></li>
                <li><Link to="/about" className="hover:text-primary">О нас</Link></li>
                <li><Link to="/contacts" className="hover:text-primary">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <address className="text-sm text-muted-foreground not-italic">
                <p>ул. Велосипедная, 42</p>
                <p>Москва, Россия</p>
                <p className="mt-2">+7 (123) 456-78-90</p>
                <p>info@velorent.ru</p>
              </address>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-sm text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
              <div className="flex gap-4 mt-4">
                <a href="#" aria-label="Вконтакте">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Telegram">
                  <Icon name="Send" className="h-5 w-5" />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <Icon name="Phone" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ВелоПрокат. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
