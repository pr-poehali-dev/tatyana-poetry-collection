import { useState } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Poem {
  id: number;
  title: string;
  content: string;
  year: number;
}

const poems: Poem[] = [
  {
    id: 1,
    title: "Весна",
    content: `Весна, весна не за горами
Туманы снова сеют дождь
Берёзка видит сны ночами
Дожди, дожди промозглый дождь
Грязь чавкает под нашими ногами,
И травка зеленью блестит
Весна, весна идёт она не за горами
Несёт нам солнце, счастье без обид.`,
    year: 1970
  },
  {
    id: 2,
    title: "Везение",
    content: `Как часто слышим мы
Везение есть, везения нет
А как же быть тому, кому везения нет?
Сегодня нет, и завтра нет
Какой же должен быть ответ?
Живи и жди своё везение
Оно наступит в день рождения
Придёт к тебе, назначит встречу,
С везением надолго сроднив.`,
    year: 1975
  },
  {
    id: 3,
    title: "Авангард сердца",
    content: `Разбей привычное на части,
Собери заново из тьмы и света.
Любовь — не форма, а бесформие страсти,
Где нет начала, нет и края, нет ответа.

Мы — абстракция на полотне времён,
Где каждый штрих — случайность и закон.`,
    year: 2024
  },
  {
    id: 4,
    title: "Пустота в скобках",
    content: `( )
Между скобок — космос или вакуум?
Там где я молчу, ты слышишь звуки.
Пустота не пуста, если в ней есть ты,
И скобки — не границы, а мосты.`,
    year: 2023
  },
  {
    id: 5,
    title: "Вертикаль",
    content: `Вертикальный взлёт без горизонта,
Где верх и низ сливаются в одно.
Я поднимаюсь к небу, но не в небо —
В пространство, где теряется число.

И падать некуда, когда летишь не вверх,
А просто перестал держаться за земной побег.`,
    year: 2024
  }
];

const Index = () => {
  const [expandedPoem, setExpandedPoem] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        <header className="mb-24 animate-fade-in">
          <div className="flex items-start justify-between flex-wrap gap-8">
            <div>
              <div className="w-16 h-1 bg-accent mb-6" />
              <h1 className="text-7xl md:text-9xl font-bold mb-2 tracking-tight">
                СТИХОТВОРЕНИЯ
              </h1>
              <p className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground">
                Зубкова Татьяна Михайловна
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                1950–2025
              </p>
            </div>
            <div className="w-32 h-32 border-4 border-foreground rotate-45" />
          </div>
        </header>

        <section className="mb-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-12 flex-col md:flex-row">
            <div className="flex-shrink-0">
              <h2 className="text-4xl md:text-5xl mb-6 whitespace-nowrap">ОБ АВТОРЕ</h2>
              <div className="w-12 h-12 border-2 border-accent" />
            </div>
            <Card className="p-8 bg-card/50 backdrop-blur border-2 border-foreground/20 flex-1">
              <div className="space-y-5 text-base leading-relaxed">
                <div>
                  <p className="font-bold text-lg mb-2">Биография</p>
                  <p className="text-muted-foreground">
                    <span className="text-2xl font-bold text-accent">З</span>убкова Татьяна Михайловна родилась 4 марта 1950 года в селе Обвал Тамалинского района Пензенской области, в семье бывшего ветерана войны. В семье было 6 детей: 4 сестры и 2 брата, из них Татьяна была самая старшая.
                  </p>
                </div>

                <p className="text-muted-foreground">
                  С детства любила писать стихи, подражая своему отцу — Аринушкину Михаилу Ивановичу, который печатался 50 лет в районной газете «Организатор». Школу закончила на хорошо и отлично, поступила в Саратовский государственный университет имени Н. Г. Чернышевского. Выучилась на учителя химии и биологии.
                </p>

                <p className="text-muted-foreground">
                  Отличник просвещения, педагог с 40-летним стажем. Работала завучем, а также директором.
                </p>

                <div className="pt-4 border-t-2 border-accent/20">
                  <p className="font-bold text-lg mb-2">О личной жизни</p>
                  <p className="text-muted-foreground">
                    Вышла замуж за Виктора Давыдовича, своего верного супруга, с которым прожили уже как 53 года. Родила трёх детей — двух дочерей и сына. У неё большая семья, которая поддерживала её в начинаниях как поэтессы.
                  </p>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t-2 border-accent/20">
                  <div className="w-8 h-8 bg-accent flex-shrink-0 mt-1" />
                  <p className="text-sm font-light italic">
                    Именно в этом сборнике вы познакомитесь с творчеством малоизвестной поэтессы — Зубковой Татьяны. Эту книгу написала внучка Зубковой — Анисимова Анна, собственно она собрала все стихотворения своей бабушки и сделала из них сборник.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-5xl">КОЛЛЕКЦИЯ</h2>
            <div className="flex-1 h-px bg-foreground/20" />
            <span className="text-lg text-muted-foreground">{poems.length} стихотворений</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, index) => (
              <Card
                key={poem.id}
                className="group relative overflow-hidden border-2 border-foreground/10 hover:border-accent transition-all duration-300 cursor-pointer bg-card/30 backdrop-blur animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                onClick={() => setExpandedPoem(expandedPoem === poem.id ? null : poem.id)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 -translate-y-1/2 translate-x-1/2 rotate-45 transition-transform group-hover:scale-150" />
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-light text-muted-foreground">{poem.year}</span>
                    <Icon 
                      name={expandedPoem === poem.id ? "ChevronUp" : "ChevronDown"} 
                      className="text-accent" 
                      size={20}
                    />
                  </div>
                  
                  <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
                    {poem.title}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-foreground/20 mb-4" />
                  
                  {expandedPoem === poem.id ? (
                    <div className="space-y-3 animate-accordion-down">
                      {poem.content.split('\n').map((line, i) => (
                        <p key={i} className="text-sm leading-relaxed font-light whitespace-pre-line">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground line-clamp-2 font-light">
                      {poem.content.split('\n')[0]}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t-2 border-foreground/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-sm text-muted-foreground font-light">
                Сборник стихотворений © 2024
              </p>
              <p className="text-lg font-medium mt-1">Зубкова Татьяна Михайловна</p>
              <p className="text-xs text-muted-foreground mt-1">Сборник составлен Анисимовой Анной</p>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-foreground" />
              <div className="w-3 h-3 bg-accent" />
              <div className="w-3 h-3 bg-foreground" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;