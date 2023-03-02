from fastapi import FastAPI, Form

import json

app = FastAPI()

@app.post("/submit")
def root(user: str = Form(), message: str = Form()):
    with open("database.json", "r") as f:
        s = json.load(f)
        s.append({"user": user, "message": message})
    with open("database.json", "w") as f:
        json.dump(s, f, indent=4)


# Write the route to get all messages below
