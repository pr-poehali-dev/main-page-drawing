
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1F2C]">
              Надежная платформа для отправки SMS-сообщений
            </h1>
            <p className="text-lg text-gray-600">
              Отправляйте SMS-уведомления, проводите маркетинговые рассылки и верифицируйте номера телефонов с помощью удобного сервиса SigmaSMS
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" className="gap-2">
                <span>Начать бесплатно</span>
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Play" size={18} />
                <span>Демонстрация</span>
              </Button>
            </div>
            <div className="flex gap-6 mt-8 flex-wrap">
              {[
                { count: "99.9%", text: "доставляемость" },
                { count: "500+", text: "интеграций" },
                { count: "24/7", text: "поддержка" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">{stat.count}</span>
                  <span className="text-sm text-gray-500">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800" 
                  alt="SMS платформа демонстрация" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
