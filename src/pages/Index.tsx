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
    title: "Осколки времени",
    content: `В пространстве между строк живёт молчание,
Где слов не нужно — только дыхание.
Осколки времени плывут в руках,
Как будто мир застыл в твоих глазах.

И тишина сползает с потолка,
Касаясь пальцев, как твоя рука.`,
    year: 2023
  },
  {
    id: 2,
    title: "Геометрия души",
    content: `Угол падения равен углу боли,
А параллельные не пересекаются вовек.
Ты чертишь окружности вокруг моей воли,
И я — точка, где кончается разбег.

Плоскость наших встреч асимметрична,
В ней нет уравнений, нет решений, нет границ.`,
    year: 2024
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
                Зубкова Татьяна
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
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <span className="text-3xl font-bold text-accent">Т</span>атьяна Зубкова — современная поэтесса, 
                  работающая на пересечении классической и экспериментальной поэзии.
                </p>
                <p className="text-muted-foreground">
                  Её творчество вдохновлено русским авангардом начала XX века, 
                  но при этом обращается к современным темам — цифровой реальности, 
                  фрагментации восприятия, поиску смысла в хаосе информации.
                </p>
                <p className="text-muted-foreground">
                  В стихотворениях Татьяны форма становится содержанием: 
                  геометрия строф, асимметрия ритма, визуальная игра с пробелами 
                  создают особое пространство, где читатель становится соавтором.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-accent/20">
                  <div className="w-8 h-8 bg-accent" />
                  <span className="text-sm font-light">Публиковалась в журналах "Новый мир", "Арион", "Воздух"</span>
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
              <p className="text-lg font-medium mt-1">Татьяна Зубкова</p>
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
