python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --noinput
uwsgi --ini uwsgi.ini