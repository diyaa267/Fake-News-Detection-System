from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

# ==========================
# Load AI Model
# ==========================

model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

# ==========================
# Home Page
# ==========================

@app.route("/")
def home():
    return render_template("index.html")

# ==========================
# About Page
# ==========================

@app.route("/about")
def about():
    return render_template("about.html")

# ==========================
# Dashboard Page
# ==========================

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# ==========================
# Contact Page
# ==========================

@app.route("/contact")
def contact():
    return render_template("contact.html")

# ==========================
# Detect Fake News
# ==========================

@app.route("/detect", methods=["GET", "POST"])
def detect():

    prediction = None
    news = ""

    if request.method == "POST":

        news = request.form["news"]

        news_vector = vectorizer.transform([news])

        result = model.predict(news_vector)[0]

        prediction = result

    return render_template(
        "detect.html",
        prediction=prediction,
        news=news
    )

# ==========================
# Run Server
# ==========================

if __name__ == "__main__":
    app.run(debug=True)



    