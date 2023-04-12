from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'This is home!'

@app.route("/test")
def test() :
    return "TEST!"

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)