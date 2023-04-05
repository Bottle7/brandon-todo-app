# BC Gov IS24 Full Stack Competition Assignment

> author: Brandon Bouchard

__This is a submission for the 2023 BC Gov IS24 Full Stack Developer job competition.__

## Table of Contents
- [Summary](#summary)
- [Getting Started](#getting-started)

## Summary

### ![](https://img.shields.io/badge/technologies_used-blue?style=for-the-badge)
- React —— Web App
- Vite —— Web App
- Axios —— Web App
- React Hooks Form —— Web App
- ExpressJS —— API

### ![](https://img.shields.io/badge/features-FFA0AC?style=for-the-badge)
- View all products
- View products by Scrum Master
- View products by developer name
- Add products
- Edit products
- Delete products —— API Only!

## Getting Started

### Clone the repository to you local machine
Go to the directory where you wish to clone this repository.

Run the following command:

```
git clone https://github.com/Bottle7/brandon-bouchard-IS24-full-stack-competition-req97073.git
```

> **NOTE:** This is using the HTTPS method of cloning a repository for maximum accessibilty; however, it is typically advised to clone via SSH for security purposes.

### Install node packages locally within each microservice's directory
Run the following commands, in your terminal/command line interface, from this directory on your local machine:

1. Backend package installation
```
cd ./backend
npm install
```

Run the following commands, in your terminal/command line interface, from this directory on your local machine:

2. Frontend package installation
```
cd ./frontend
npm install
```

### Spin up product containers with Docker
Run the following command, in your terminal/command line interface, from this directory on your local machine:
```
docker-compose up --build
```

The `--build` flag is included to ensure that new images are built fresh before spinning up the containers.

### Spin down product containers with Docker
Run the following command, in your terminal/command line interface, from this directory on your local machine:
```
docker-compose down -v
```

The `-v` flag is included to ensure that container volumes do not remain stored in Docker.
