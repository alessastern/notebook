Cоздать и активировать виртуальное окружение:
py -m venv venv
venv\Scripts\activate

Установить зависимости из файла requirements.txt:
python -m pip install --upgrade pip
pip install -r requirements.txt

Выполнить миграции:
python manage.py makemigrations
python manage.py migrate

Запустить проект:
python manage.py runserver
