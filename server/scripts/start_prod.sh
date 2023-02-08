python manage.py makemigrations
python manage.py migrate --no-input
gunicorn server.wsgi -b 0.0.0.0:5000
