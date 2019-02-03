from flask import Flask, render_template

app = Flask(__name__, template_folder='../react-frontend/templates', static_folder='../react-frontend/static')


@app.route("/")
def index():
  return render_template('index.html')

print("Starting Flask server...")

if __name__ == '__main__':
  app.run()