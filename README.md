# Hack at UCI Tech Organizer Deliverable

Thank you for your interest in applying to the Hack at UCI Tech team!

In order for your application to be considered, you must complete this
deliverable. Please follow the instructions below.

## Setup

### Cloning

Clone this repository to your local machine by running the command below:

```bash
git clone https://github.com/HackAtUCI/tech-deliverable.git
```

If you are unfamiliar with `git`, we recommend that you become familiar
with it as soon as possible!

Once you've cloned this repository, you'll need to install some dependencies for the frontend client and the backend API.

### Frontend Setup

Install the dependencies in the frontend directory with `npm` or `yarn`:

```bash
cd frontend
npm ci
```

### Backend Setup

For the Python dependencies, we recommend creating a virtual enviroment:

```bash
python3 -m venv .venv
```

To activate the environment, run the appropriate command for your operating system:

#### Windows

```bat
.\.venv\Scripts\activate
```

#### macOS/Unix

```bash
source .venv/bin/activate
```

Finally, use `pip` to install the required libraries for the backend:

```bash
pip install -r requirements.txt
```

## Development

To start development, launch the development servers on the frontend and backend.

### Starting the frontend development server

```bash
cd frontend
npm run dev
```

### Starting the backend development server

```bash
cd api
python3 src/main.py
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

<strong>Side Note:</strong> Feel free to customize the development environment
however you want (i.e. add formatters or linters to your liking). Just be sure
to not modify any of the starter code that we've provided you!

Once you feel as if your message board is complete, please create your own
GitHub repository, push your changes to there, and provide the link to it in
the Airtable form for your application. Once again, thank you for your interest
in applying to the Hack at UCI Tech team and we look forward to reviewing your
application!
