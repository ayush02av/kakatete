# KAKATETE - online game hub

[Link for project website : https://kakatete.herokuapp.com/](https://kakatete.herokuapp.com "KakaTete")

# Installation and Locally running the server
1. Install python and pip (python package installer) from [Link for python downloads : https://www.python.org/downloads/](https://www.python.org/downloads/ "Python Download")
2. Fork / Clone this repository in your projects folder and change directory into the project folder
3. Run this command to start running the development server - `python manage.py runserver`

# Deployment on Heroku
1. Add `import django_heroku` at the top in settings.py file in backend folder inside the project
2. Add `django_heroku.settings(locals())`  at the bottom in settings.py file in backend folder inside the project
3. Add `web: gunicorn backend.wsgi` in Procfile in project root directory
4. Run command `pip freeze > requirements.txt` in project root directory
5. Connect your heroku account with your github repository and deploy

# Stack used
1. Django for backend
2. HTML, CSS, JS for frontend

# A small note
1. A hobby project
2. By students of ADGITM college
3. It is under development