python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --noinput
gunicorn --workers=1 --worker-class=gthread --log-level critical --timeout=30 --threads=4 server.wsgi -b 0.0.0.0:8000 
