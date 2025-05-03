
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SiteBlueprint = () => {
  // Функция для экспорта SVG
  const downloadSVG = () => {
    const svgElement = document.getElementById('site-blueprint-svg');
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'sigmasms-blueprint.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-[#f0f2ff] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Чертёж главной страницы SigmaSMS</h2>
            <p className="text-gray-600 mt-2">Структура и компоненты действующего сайта https://sigmasms.ru</p>
          </div>
          <Button 
            onClick={downloadSVG} 
            className="flex items-center gap-2"
          >
            <Icon name="Download" size={18} />
            Скачать чертёж
          </Button>
        </div>
        
        <div className="overflow-x-auto border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
          <svg 
            id="site-blueprint-svg" 
            width="1000" 
            height="1800" 
            viewBox="0 0 1000 1800" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Основной фон */}
            <rect width="1000" height="1800" fill="#ffffff" />
            
            {/* Сетка */}
            <g opacity="0.1">
              {[...Array(18)].map((_, i) => (
                <line 
                  key={`h-grid-${i}`} 
                  x1="0" 
                  y1={i * 100} 
                  x2="1000" 
                  y2={i * 100} 
                  stroke="#333" 
                  strokeWidth="1" 
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <line 
                  key={`v-grid-${i}`} 
                  x1={i * 100} 
                  y1="0" 
                  x2={i * 100} 
                  y2="1800" 
                  stroke="#333" 
                  strokeWidth="1" 
                />
              ))}
            </g>
            
            {/* Заголовок чертежа */}
            <text x="500" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
              Чертёж главной страницы SigmaSMS
            </text>
            
            {/* Легенда */}
            <g transform="translate(750, 20)">
              <rect x="0" y="0" width="20" height="12" fill="#5F45FF" />
              <text x="30" y="10" fontSize="12" fill="#333">Навигация</text>
              
              <rect x="0" y="20" width="20" height="12" fill="#E5DEFF" />
              <text x="30" y="30" fontSize="12" fill="#333">Контентные блоки</text>
              
              <rect x="0" y="40" width="20" height="12" fill="#F2FCE2" />
              <text x="30" y="50" fontSize="12" fill="#333">Функциональные элементы</text>
              
              <rect x="100" y="0" width="20" height="12" fill="#FFDEE2" />
              <text x="130" y="10" fontSize="12" fill="#333">Конверсионные блоки</text>
              
              <rect x="100" y="20" width="20" height="12" fill="#D3E4FD" />
              <text x="130" y="30" fontSize="12" fill="#333">Подвал</text>
            </g>
            
            {/* Header */}
            <g>
              <rect x="50" y="80" width="900" height="60" rx="4" fill="#5F45FF" opacity="0.9" />
              <text x="500" y="115" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">
                Шапка сайта (Header)
              </text>
              
              <rect x="80" y="95" width="120" height="30" rx="4" fill="white" fillOpacity="0.2" />
              <text x="140" y="115" fontSize="14" textAnchor="middle" fill="white">
                Логотип
              </text>
              
              <rect x="220" y="95" width="400" height="30" rx="4" fill="white" fillOpacity="0.2" />
              <text x="420" y="115" fontSize="14" textAnchor="middle" fill="white">
                Навигационное меню: Тарифы | Возможности | Интеграции | API | Блог | Поддержка
              </text>
              
              <rect x="640" y="95" width="130" height="30" rx="4" fill="white" fillOpacity="0.2" />
              <text x="705" y="115" fontSize="14" textAnchor="middle" fill="white">
                Личный кабинет
              </text>
              
              <rect x="790" y="95" width="140" height="30" rx="4" fill="#F2FCE2" fillOpacity="0.8" />
              <text x="860" y="115" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Регистрация
              </text>
            </g>
            
            {/* Hero Section */}
            <g>
              <rect x="50" y="160" width="900" height="340" rx="4" fill="#E5DEFF" opacity="0.7" />
              <text x="500" y="190" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Главный баннер (Hero Section)
              </text>
              
              <rect x="80" y="210" width="420" height="260" rx="4" fill="white" fillOpacity="0.5" stroke="#5F45FF" strokeWidth="1" />
              <text x="290" y="240" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Основной заголовок
              </text>
              <text x="290" y="270" fontSize="14" textAnchor="middle" fill="#666">
                Надежная платформа для отправки SMS-сообщений
              </text>
              <text x="290" y="300" fontSize="14" textAnchor="middle" fill="#666">
                Описание возможностей сервиса и преимуществ
              </text>
              
              <rect x="100" y="330" width="150" height="40" rx="20" fill="#5F45FF" />
              <text x="175" y="355" fontSize="14" textAnchor="middle" fill="white">
                Начать бесплатно
              </text>
              
              <rect x="270" y="330" width="200" height="40" rx="20" fill="white" stroke="#5F45FF" strokeWidth="1" />
              <text x="370" y="355" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Демонстрация
              </text>
              
              <g>
                <rect x="100" y="390" width="100" height="50" rx="4" fill="white" fillOpacity="0.6" />
                <text x="150" y="415" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                  99.9%
                </text>
                <text x="150" y="435" fontSize="12" textAnchor="middle" fill="#666">
                  доставляемость
                </text>
              </g>
              
              <g>
                <rect x="220" y="390" width="100" height="50" rx="4" fill="white" fillOpacity="0.6" />
                <text x="270" y="415" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                  500+
                </text>
                <text x="270" y="435" fontSize="12" textAnchor="middle" fill="#666">
                  интеграций
                </text>
              </g>
              
              <g>
                <rect x="340" y="390" width="100" height="50" rx="4" fill="white" fillOpacity="0.6" />
                <text x="390" y="415" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                  24/7
                </text>
                <text x="390" y="435" fontSize="12" textAnchor="middle" fill="#666">
                  поддержка
                </text>
              </g>
              
              <rect x="520" y="210" width="400" height="260" rx="4" fill="white" fillOpacity="0.5" />
              <text x="720" y="340" fontSize="14" textAnchor="middle" fill="#666">
                Изображение платформы или иллюстрация
              </text>
            </g>
            
            {/* Преимущества */}
            <g>
              <rect x="50" y="520" width="900" height="220" rx="4" fill="#E5DEFF" opacity="0.7" />
              <text x="500" y="550" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Преимущества (Features)
              </text>
              
              <rect x="80" y="570" width="280" height="150" rx="4" fill="white" fillOpacity="0.5" />
              <circle cx="120" cy="610" r="20" fill="#5F45FF" fillOpacity="0.2" />
              <text x="120" y="615" fontSize="16" textAnchor="middle" fill="#5F45FF">1</text>
              <text x="220" y="600" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Надежная доставка
              </text>
              <text x="220" y="630" fontSize="14" textAnchor="middle" fill="#666">
                Описание преимущества
              </text>
              
              <rect x="380" y="570" width="280" height="150" rx="4" fill="white" fillOpacity="0.5" />
              <circle cx="420" cy="610" r="20" fill="#5F45FF" fillOpacity="0.2" />
              <text x="420" y="615" fontSize="16" textAnchor="middle" fill="#5F45FF">2</text>
              <text x="520" y="600" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                API и интеграции
              </text>
              <text x="520" y="630" fontSize="14" textAnchor="middle" fill="#666">
                Описание преимущества
              </text>
              
              <rect x="680" y="570" width="280" height="150" rx="4" fill="white" fillOpacity="0.5" />
              <circle cx="720" cy="610" r="20" fill="#5F45FF" fillOpacity="0.2" />
              <text x="720" y="615" fontSize="16" textAnchor="middle" fill="#5F45FF">3</text>
              <text x="820" y="600" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Простой интерфейс
              </text>
              <text x="820" y="630" fontSize="14" textAnchor="middle" fill="#666">
                Описание преимущества
              </text>
            </g>
            
            {/* Тарифы */}
            <g>
              <rect x="50" y="760" width="900" height="300" rx="4" fill="#FFDEE2" opacity="0.5" />
              <text x="500" y="790" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Тарифы (Pricing)
              </text>
              <text x="500" y="820" fontSize="16" textAnchor="middle" fill="#666">
                Выберите тариф, который подходит вам
              </text>
              
              <rect x="100" y="840" width="250" height="200" rx="8" fill="white" stroke="#5F45FF" strokeWidth="1" />
              <text x="225" y="870" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Базовый
              </text>
              <text x="225" y="900" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                0 ₽
              </text>
              <text x="225" y="930" fontSize="14" textAnchor="middle" fill="#666">
                Функции тарифа
              </text>
              <rect x="125" y="970" width="200" height="40" rx="20" fill="#5F45FF" />
              <text x="225" y="995" fontSize="14" textAnchor="middle" fill="white">
                Попробовать
              </text>
              
              <rect x="375" y="840" width="250" height="200" rx="8" fill="white" stroke="#5F45FF" strokeWidth="2" />
              <rect x="375" y="840" width="250" height="40" rx="8 8 0 0" fill="#5F45FF" />
              <text x="500" y="865" fontSize="14" textAnchor="middle" fill="white">
                Популярный
              </text>
              <text x="500" y="900" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                990 ₽
              </text>
              <text x="500" y="930" fontSize="14" textAnchor="middle" fill="#666">
                Функции тарифа
              </text>
              <rect x="400" y="970" width="200" height="40" rx="20" fill="#5F45FF" />
              <text x="500" y="995" fontSize="14" textAnchor="middle" fill="white">
                Выбрать
              </text>
              
              <rect x="650" y="840" width="250" height="200" rx="8" fill="white" stroke="#5F45FF" strokeWidth="1" />
              <text x="775" y="870" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Бизнес
              </text>
              <text x="775" y="900" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#5F45FF">
                2490 ₽
              </text>
              <text x="775" y="930" fontSize="14" textAnchor="middle" fill="#666">
                Функции тарифа
              </text>
              <rect x="675" y="970" width="200" height="40" rx="20" fill="#5F45FF" />
              <text x="775" y="995" fontSize="14" textAnchor="middle" fill="white">
                Выбрать
              </text>
            </g>
            
            {/* Интеграции */}
            <g>
              <rect x="50" y="1080" width="900" height="200" rx="4" fill="#E5DEFF" opacity="0.7" />
              <text x="500" y="1110" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Интеграции
              </text>
              <text x="500" y="1140" fontSize="16" textAnchor="middle" fill="#666">
                SigmaSMS интегрируется с популярными сервисами
              </text>
              
              <g transform="translate(100, 1170)">
                {[...Array(8)].map((_, i) => (
                  <rect 
                    key={`integration-${i}`} 
                    x={i * 100} 
                    y="0" 
                    width="80" 
                    height="80" 
                    rx="8" 
                    fill="white" 
                    stroke="#E5DEFF" 
                    strokeWidth="2" 
                  />
                ))}
              </g>
            </g>
            
            {/* FAQ */}
            <g>
              <rect x="50" y="1300" width="900" height="200" rx="4" fill="#E5DEFF" opacity="0.7" />
              <text x="500" y="1330" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Часто задаваемые вопросы
              </text>
              
              {[...Array(3)].map((_, i) => (
                <rect 
                  key={`faq-${i}`} 
                  x="100" 
                  y={1360 + i * 40} 
                  width="800" 
                  height="30" 
                  rx="4" 
                  fill="white" 
                  stroke="#E5DEFF" 
                  strokeWidth="1" 
                />
              ))}
              
              <text x="500" y="1380" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Как начать пользоваться сервисом?
              </text>
              <text x="500" y="1420" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Как интегрировать SMS-отправку в мой сайт?
              </text>
              <text x="500" y="1460" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Какие гарантии доставки сообщений?
              </text>
            </g>
            
            {/* CTA */}
            <g>
              <rect x="50" y="1520" width="900" height="120" rx="4" fill="#FFDEE2" opacity="0.5" />
              <text x="500" y="1560" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Готовы начать? Зарегистрируйтесь сейчас!
              </text>
              <rect x="400" y="1580" width="200" height="40" rx="20" fill="#5F45FF" />
              <text x="500" y="1605" fontSize="14" textAnchor="middle" fill="white">
                Начать бесплатно
              </text>
            </g>
            
            {/* Footer */}
            <g>
              <rect x="50" y="1660" width="900" height="120" rx="4" fill="#D3E4FD" opacity="0.8" />
              <text x="500" y="1690" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1A1F2C">
                Подвал сайта (Footer)
              </text>
              
              <rect x="80" y="1710" width="160" height="40" rx="4" fill="#D3E4FD" opacity="0.6" />
              <text x="160" y="1735" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Логотип
              </text>
              
              <rect x="260" y="1710" width="160" height="40" rx="4" fill="#D3E4FD" opacity="0.6" />
              <text x="340" y="1735" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Контакты
              </text>
              
              <rect x="440" y="1710" width="160" height="40" rx="4" fill="#D3E4FD" opacity="0.6" />
              <text x="520" y="1735" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Навигация
              </text>
              
              <rect x="620" y="1710" width="160" height="40" rx="4" fill="#D3E4FD" opacity="0.6" />
              <text x="700" y="1735" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Документы
              </text>
              
              <rect x="800" y="1710" width="120" height="40" rx="4" fill="#D3E4FD" opacity="0.6" />
              <text x="860" y="1735" fontSize="14" textAnchor="middle" fill="#1A1F2C">
                Соцсети
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SiteBlueprint;
