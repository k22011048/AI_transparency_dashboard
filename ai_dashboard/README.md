#  AI Transparency Dashboard

An interactive platform to visualize and interpret AI systems, built using **Django** (backend) and **React** (frontend).

 **Live Site:**  
[https://aitransparencydashboard.netlify.app](https://aitransparencydashboard.netlify.app)

---

## Project Structure

```
AI_transparency_dashboard/
├── ai_dashboard/                  # Django backend root
│   ├── ai_dashboard/              # Django settings and routing
│   ├── ai_recommendation/         # AI recommendation logic
│   ├── chatbot/                   # Chatbot module
│   ├── data_transparency/         # Data transparency components
│   ├── env/                       # (Possibly) virtual environment (ignored in .gitignore)
│   ├── explainability/            # Model explainability logic
│   ├── frontend/                  # React frontend app
│   │   ├── build/                 # Production build output (generated)
│   │   ├── node_modules/          # Node.js dependencies
│   │   ├── public/                # Static public assets
│   │   ├── src/                   # React source code
│   │   │   ├── components/        # Reusable React components
│   │   │   ├── pages/             # Page-level React components
│   │   │   ├── styles/            # CSS and styling
│   │   │   ├── App.js             # Main App component
│   │   │   ├── App.css            # Main styling file
│   │   │   ├── App.test.js        # React testing file
│   │   │   ├── index.js           # Entry point for React
│   │   │   ├── index.css          # Global CSS
│   │   │   ├── logo.svg           # Logo asset
│   │   │   ├── reportWebVitals.js # Performance reporting
│   │   │   └── setupTests.js      # Test configuration
│   │   ├── .gitignore
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── README.md              # React-specific README
│   ├── home/                      # Home view or app
│   ├── model_details/            # AI model metadata
│   ├── reports_audits/           # Reports & audits module
│   ├── scenarios/                # Scenario-specific logic
│   ├── staticfiles/              # Static assets (may be collected)
│   ├── trust_prediction/         # Trustworthiness prediction module
│   ├── .env.example              # Environment variable example file
│   ├── .gitignore
│   ├── manage.py                 # Django management script
│   ├── package-lock.json         # Duplicate? Consider removing
│   ├── pyproject.toml            # Python build system config
│   ├── README.md                 # Top-level README (you created!)
│   └── render.yaml               # Render.com deployment config
```

---

##  Backend Setup (Django)

### 1. Install Python dependencies

```bash
cd ai_dashboard
pip install -r requirements.txt
```

### 2. Apply database migrations

```bash
python3 manage.py migrate
```

### 3. Run the development server

```bash
python3 manage.py runserver
```

Backend will be running at: [http://localhost:8000](http://localhost:8000)

---

##  Frontend Setup (React)

### 1. Install Node.js dependencies

```bash
cd frontend
npm install
```

### 2. Start the React app

```bash
npm start
```

Frontend will be running at: [http://localhost:3000](http://localhost:3000)

---

##  Requirements

###  Python Backend Dependencies (`requirements.txt`)
```txt
asgiref==3.7.2
bcrypt==3.2.0
blinker==1.4
celery==5.4.0
channels==4.2.0
click==8.1.8
dj-database-url==2.3.0
Django==4.2.6
django-cors-headers==4.7.0
django-filter==25.1
django-widget-tweaks==1.5.0
djangorestframework==3.15.2
Faker==19.11.0
gunicorn==23.0.0
Jinja2==3.1.6
kombu==5.4.2
Pillow==9.0.1
psycopg2-binary==2.9.9
python-dotenv==1.0.1
PyJWT==2.3.0
pytz==2023.3.post1
sqlparse==0.4.4
```

###  React Frontend Dependencies (`package-lock.json`)
```txt
@fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
@testing-library/dom
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
axios
chart.js
mermaid
plotly.js-dist
react
react-chartjs-2
react-dom
react-router-dom
react-scripts
react-slick
react-vertical-timeline-component
react-zoom-pan-pinch
slick-carousel
web-vitals
```


##  Deployment

- **Frontend:** Deployed to [Netlify](https://www.netlify.com/)
- **Backend:** Deployed to Render

---

##  License

This project is provided for educational purposes.

##  Acknowledgments

- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Django REST Framework](https://www.django-rest-framework.org/)

