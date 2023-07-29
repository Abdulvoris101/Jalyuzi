python manage.py makemigrations --noinput
python manage.py collectstatic --noinput
python manage.py migrate --noinput
pip install --upgrade pip setuptools
uwsgi --ini uwsgi.ini