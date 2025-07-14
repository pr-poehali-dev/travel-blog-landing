import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Привлекающий блок */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-r from-adventure-orange to-adventure-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/2e2d52b2-6634-4159-9376-12f3e1c2d5f3.jpg" 
            alt="Adventure travel" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Забудь про избитые маршруты
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Интеллектуальные путешествия по неизведанным местам за копейки. 
              Для тех, кто не следует толпе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="bg-white text-adventure-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Icon name="Mail" className="mr-2" />
                Подписаться на рассылку
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Users" size={16} />
                <span>Уже 2,847 умных путешественников</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section - Подписка */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Получай секретные маршруты первым
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Каждую неделю — новые направления, которых нет в путеводителях. 
            Проверенные места, честные цены, никакой воды.
          </p>
          
          <Card className="max-w-md mx-auto animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Zap" className="text-adventure-orange" />
                Эксклюзивная рассылка
              </CardTitle>
              <CardDescription>
                Бесплатно навсегда. Никакого спама.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  placeholder="Твой email" 
                  type="email" 
                  className="text-center"
                />
                <Button className="w-full bg-adventure-orange hover:bg-adventure-red">
                  <Icon name="Send" className="mr-2" size={16} />
                  Хочу путешествовать умно
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section - Доверие */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Почему мне доверяют
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-adventure-blue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">127 стран</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Посетил лично. Каждый совет — из первых рук.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-adventure-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Культуролог</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  МГУ, PhD. Знаю не только где, но и зачем ехать.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-adventure-red rounded-full flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">$30/день</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Средний бюджет моих путешествий. Дорого ≠ интересно.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-8 items-center text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="Star" className="text-yellow-500" size={16} />
                <span className="text-sm">4.9/5 от читателей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageCircle" className="text-adventure-blue" size={16} />
                <span className="text-sm">2,847 подписчиков</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" className="text-adventure-orange" size={16} />
                <span className="text-sm">5 лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Фишки */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Что делает мой блог особенным
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-adventure-orange rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900">
                    Только скрытые жемчужины
                  </h3>
                  <p className="text-gray-600">
                    Места, о которых не знает 99% туристов. Аутентичные локации, 
                    которые показывают настоящую культуру.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-adventure-blue rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900">
                    Подробные бюджеты
                  </h3>
                  <p className="text-gray-600">
                    Точные расчеты до копейки. Как съездить в Камбоджу за 15,000₽ 
                    или в Норвегию за 25,000₽.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-adventure-red rounded-lg flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900">
                    Интеллектуальный контекст
                  </h3>
                  <p className="text-gray-600">
                    Не просто "красиво", а почему красиво. История, культура, 
                    философия места — для думающих путешественников.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/img/0980e048-1601-460f-83a8-8988ab86a408.jpg" 
                  alt="Budget travel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">
                  Последние открытия
                </h3>
              <div className="space-y-3">
                <Badge variant="outline" className="bg-white">
                  🏛️ Подземные храмы Каппадокии
                </Badge>
                <Badge variant="outline" className="bg-white">
                  🌊 Дикие пляжи Азорских островов
                </Badge>
                <Badge variant="outline" className="bg-white">
                  🏔️ Секретные маршруты Алтая
                </Badge>
                <Badge variant="outline" className="bg-white">
                  🏰 Заброшенные замки Трансильвании
                </Badge>
              </div>
                <Button className="mt-6 bg-adventure-orange hover:bg-adventure-red">
                  <Icon name="ArrowRight" className="mr-2" size={16} />
                  Читать все истории
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Готов открыть мир заново?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к сообществу умных путешественников
          </p>
          <Button size="lg" className="bg-adventure-orange hover:bg-adventure-red px-8 py-4 text-lg font-semibold">
            <Icon name="Compass" className="mr-2" />
            Начать путешествие
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Index