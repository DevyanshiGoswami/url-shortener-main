# 🔗 URL Shortener

A simple URL Shortener web application built using Spring Boot that converts long URLs into short, unique links. The application stores URL mappings in a database and redirects users to the original URL when a shortened link is accessed.

## Features

- Convert long URLs into short URLs
- Generate unique short links using MD5 hashing
- Redirect shortened URLs to the original destination
- Prevent duplicate entries for the same URL
- Copy generated short URL with one click
- Simple and responsive user interface

## Technologies Used

### Backend
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Maven

### Frontend
- HTML
- CSS
- JavaScript
- jQuery

### Database
- MySQL

## Project Structure

```
src
├── main
│   ├── java
│   ├── resources
│   └── static
└── test
```

## How It Works

1. Enter a valid URL.
2. Click **Generate Short URL**.
3. The application generates a unique short link.
4. The mapping is stored in the database.
5. Visiting the short link redirects to the original URL.

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
```

### Open the project

Open the project in IntelliJ IDEA or your preferred Java IDE.

### Configure Database

Update the database credentials in:

```
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/url_shortener
spring.datasource.username=root
spring.datasource.password=your_password
```

### Run the application

```bash
mvn spring-boot:run
```

The application will start at:

```
http://localhost:8080
```

## API

### Generate Short URL

```
POST /api/public/generate
```

Request Body

```json
{
    "url": "https://www.google.com"
}
```

Response

```json
{
    "url": "http://localhost:8080/7517"
}
```

### Redirect

```
GET /{shortCode}
```

Example

```
http://localhost:8080/7517
```

Redirects to

```
https://www.google.com
```

Screenshot of the project:
<img width="874" height="389" alt="image" src="https://github.com/user-attachments/assets/92107a77-34c9-4f27-8e6f-bfb47704a412" />
