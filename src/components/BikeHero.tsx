
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BikeHero = () => {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Прокат велосипедов для незабываемых впечатлений
            </h1>
            <p className="text-lg text-muted-foreground">
              Исследуйте город на двух колесах! Широкий выбор велосипедов для любых 
              целей и маршрутов в нашем прокате.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/catalog">
                <Button size="lg" className="w-full sm:w-auto">
                  Выбрать велосипед
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&q=80&w=1000"
              alt="Горный велосипед для проката" 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <p className="font-bold text-lg">от 500 ₽/час</p>
              <p className="text-sm text-muted-foreground">Прокат на любой срок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeHero;
