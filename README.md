# Hack at UCI Tech Organizer Deliverable

Thank you for your interest in applying to the Hack at UCI Tech team!

In order for your application to be considered, you must complete this
deliverable. Please follow the instructions below.

## Setup

### Cloning

Clone this repository to your local machine by running the below command:

```
git clone https://github.com/HackAtUCI/tech-deliverable.git
```

If you are unfamiliar with `git`, we recommend that you become familiar
with it as soon as possible!

### Installing Necessary Libraries

Once you've cloned this repository, change directories into the project's
frontend directory by running `cd tech-deliverable/frontend` and then
`npm ci` to install all the libraries needed for the frontend.

The process for the backend is similar. Change directories into the `backend`
folder of `tech-deliverable` and create a Python virtual enviroment:

```
python -m venv .venv
```

Then, activate it. The command differs among operating systems, so run the
appropriate one for your device!

#### Windows

```
.\.venv\Scripts\activate
```

#### MacOS/Unix

```
source .venv/bin/activate
```

Finally, to install the required libraries for the backend, run:

```
pip install -r requirements.txt
```

## Tasks

Hack at UCI is currently working on setting up a message board so its members
can communicate with one another. They need _your_ help to finish it!

The application is relatively simple. The homepage displays all the messages
that are currently stored in the "database". (This is in quotes because we only
use a JSON file to store all the messages here, not an actual database!) Users
have the option to create and submit their own messages, so naturally, when they
submit a message, it should automatically appear on the home page after all the
previous tweets.

The tech stack this application uses is React for the frontend with Vite used
as the build tool and FastAPI (Python). We've provided you with some basic
components for the homepage, but you'll need to complete the component(s) for
displaying messages and styling for the entire frontend. The way you choose to
style this application is completely up to you, so feel free to be as creative
as you want! For the backend, we've provided you with a route that handles form
submissions for creating a message, but you'll also need to create a new route
that allows the frontend to retrieve messages from the backend.

Once you feel as if your message board is complete, please create your own
GitHub repository, push your changes to there, and provide the link to it in
the Airtable form for your application. Once again, thank you for your interest
in applying to the Hack at UCI Tech team and we look forward to reviewing your
application!
