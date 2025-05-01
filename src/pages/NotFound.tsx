
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <Icon name="Bike" size={64} className="text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Кажется, вы свернули не туда. Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/">
        <Button>
          <Icon name="Home" className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
