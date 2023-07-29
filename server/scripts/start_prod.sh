python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --noinput
gunicorn --workers=1 --log-level info --timeout=60 server.wsgi -b 0.0.0.0:8000 
