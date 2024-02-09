package main

import (
	"os"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.File("/", "public/index.html")

	port := os.Getenv("port")
	if port == "" {
		port = ":3000"
	}
	e.Logger.Fatal(e.Start(port))

	e.GET("/users/:id", getUser)
}

func getUser(req echo.Context) error {
	//Retrieve user ID from path `users/:id`
	id := req.Param("id")
	project := `<div>Project No.</div>`
	return project.Render(project, req.Response().Writer)
}
