
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

const bikes = [
  {
    id: 1,
    name: "Горный велосипед Trek",
    description: "Для активного отдыха и езды по пересеченной местности",
    price: 600,
    image: "https://images.unsplash.com/photo-1575585269294-7d28dd912db8?auto=format&q=75&fit=crop&w=600",
    tags: ["Горный", "Новинка"]
  },
  {
    id: 2,
    name: "Городской велосипед Giant",
    description: "Комфортный велосипед для передвижения по городу",
    price: 500,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&q=75&fit=crop&w=600",
    tags: ["Городской", "Популярный"]
  },
  {
    id: 3,
    name: "Шоссейный велосипед Specialized",
    description: "Скоростной велосипед для длительных поездок",
    price: 800,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&q=75&fit=crop&w=600",
    tags: ["Шоссейный", "Премиум"]
  }
];

const PopularBikes = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные велосипеды</h2>
            <p className="text-muted-foreground">Самые востребованные модели у наших клиентов</p>
          </div>
          <Link to="/catalog" className="mt-4 md:mt-0">
            <Button variant="outline">
              Смотреть все <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <Card key={bike.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{bike.name}</CardTitle>
                  <div className="flex gap-1">
                    {bike.tags.map((tag) => (
                      <Badge key={tag} variant={tag === "Новинка" ? "default" : "secondary"}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardDescription>{bike.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold text-xl">{bike.price} ₽/час</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
                <Button size="sm">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Арендовать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBikes;
