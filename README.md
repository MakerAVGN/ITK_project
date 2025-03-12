# ITK-project

Проект на Vue 3, построенный по методологии Feature-Sliced Design (FSD).

## Структура проекта

```
src/
├── app/          # Инициализация приложения, провайдеры, роутинг
├── processes/    # Бизнес-процессы
├── pages/        # Страницы
├── widgets/      # Композиционные компоненты
├── features/     # Интерактивные функции
├── entities/     # Бизнес-сущности
└── shared/       # Переиспользуемый код, UI компоненты, API
```

## Поддержка TypeScript для `.vue` файлов

TypeScript не может обрабатывать информацию о типах для `.vue` импортов по умолчанию, поэтому мы используем `vue-tsc` для проверки типов.

## Настройка проекта

```sh
npm install
```

### Разработка с горячей перезагрузкой

```sh
npm run dev
```

### Сборка для продакшена

```sh
npm run build
```

### Запуск unit-тестов с [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Линтинг с [ESLint](https://eslint.org/)

```sh
npm run lint
```
