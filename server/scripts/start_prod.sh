python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --no-input
gunicorn --workers=2 --worker-class=gthread --log-level debug --timeout=30 --threads=4 server.wsgi -b 0.0.0.0:8000 
