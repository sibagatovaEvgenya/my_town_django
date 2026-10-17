# Городской портал (Django + PostgreSQL)

## Запуск
1. Клонировать репозиторий
2. Создать виртуальное окружение: `python -m venv venv`
3. Активировать: `venv\Scripts\activate` (Windows) / `source venv/bin/activate` (Linux/Mac)
4. Установить зависимости: `pip install -r requirements.txt`
5. Настроить подключение к PostgreSQL в `settings.py` (или через `.env`)
6. Применить миграции: `python manage.py migrate`
7. Запустить: `python manage.py runserver`

## Маршруты
| URL | Раздел |
|-----|--------|
| `/` | Главная |
| `/news` | Новости города |
| `/management` | Руководство города |
| `/facts` | Факты о городе |
| `/contacts` | Контакты служб |
| `/history` | История города |
| `/history/people` | Известные жители |
| `/history/photos` | Исторические фото |