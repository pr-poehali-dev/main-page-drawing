
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "MessageCircle",
      title: "Массовые рассылки",
      description: "Отправляйте тысячи сообщений одним кликом. Настраивайте персонализацию и время доставки."
    },
    {
      icon: "ShieldCheck",
      title: "Двухфакторная аутентификация",
      description: "Защитите аккаунты пользователей с помощью SMS-верификации и кодов подтверждения."
    },
    {
      icon: "BarChart",
      title: "Детальная статистика",
      description: "Отслеживайте статус доставки, конверсию и эффективность каждой SMS-кампании."
    },
    {
      icon: "Code",
      title: "API и интеграции",
      description: "Легко интегрируйте SMS-отправку в ваши приложения с помощью API и готовых решений."
    },
    {
      icon: "Globe",
      title: "Международная доставка",
      description: "Отправляйте сообщения по всему миру с гарантированной доставкой и минимальной задержкой."
    },
    {
      icon: "Clock",
      title: "Планирование рассылок",
      description: "Настраивайте отложенную отправку и автоматические уведомления по расписанию."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают SigmaSMS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Надежная платформа для бизнеса любого масштаба с полным набором инструментов для эффективной коммуникации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
