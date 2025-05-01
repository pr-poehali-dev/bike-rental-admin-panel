
import Icon from "@/components/ui/Icon";

const steps = [
  {
    icon: "Search",
    title: "Выберите велосипед",
    description: "Просмотрите наш каталог и выберите подходящий велосипед"
  },
  {
    icon: "Calendar",
    title: "Забронируйте время",
    description: "Выберите удобные дату и время для вашей поездки"
  },
  {
    icon: "CreditCard",
    title: "Оплатите заказ",
    description: "Произведите оплату онлайн или при получении"
  },
  {
    icon: "Bike",
    title: "Наслаждайтесь поездкой",
    description: "Получите велосипед и наслаждайтесь путешествием"
  }
];

const RentalSteps = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Как арендовать велосипед</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Простой процесс в 4 шага поможет вам быстро получить велосипед и отправиться в путь
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={step.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="text-5xl font-bold text-muted/20 mt-2">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalSteps;
