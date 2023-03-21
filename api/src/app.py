from datetime import datetime, timedelta
from typing import Any

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse

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


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function.
    """
    now = datetime.now().replace(microsecond=0)
    post = {
        "name": name,
        "message": message,
        "time": now.isoformat(),
    }
    database["posts"].append(post)

    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age
@app.get("/get-quotes")
def get_quotes(age: str) -> dict:
    """
    Fetch all the quotes with a certain age.
    i.e. past week, past month, past year, or all time.
    """
    if age == "all":
        return database["posts"]
    
    quote_list = []
    if age == "week":
        for quote in database["posts"]:
            if datetime.now() - datetime.strptime(quote["time"], "%Y-%m-%dT%H:%M:%S") == timedelta(weeks=0):
                quote_list.append(quote)
    
    elif age == "month":
        for quote in database["posts"]:
            if datetime.now().strftime("%Y-%m") == quote["time"][:7]:
                quote_list.append(quote)

    elif age == "year":
        for quote in database["posts"]:
            if datetime.now().strftime("%Y") == quote["time"][:4]:
                quote_list.append(quote)

    return {"data": quote_list}