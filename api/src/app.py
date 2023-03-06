from typing import Any
from fastapi import FastAPI, Form

from services.database import JSONDatabase

app = FastAPI()

database: JSONDatabase[list[dict[str, Any]]] = JSONDatabase("data/database.json")


@app.on_event("startup")
def on_startup() -> None:
    if "posts" not in database:
        print("Adding posts entry to database")
        database["posts"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    database.close()


@app.post("/message")
def post_message(name: str = Form(), message: str = Form()) -> None:
    post = {"name": name, "message": message}
    database["posts"].append(post)


# Write the route to get all messages below
