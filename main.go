package main

import (
	"embed"
	"fmt"
	"log"
	"net/http"
)

type Project struct {
	Title string
	Body  []byte
}

//go:embed static/css
var static embed.FS

func main() {
	http.HandleFunc("GET /", homeHandler)
	http.Handle("GET /static/", http.FileServer(http.FS(static)))

	log.Fatal(http.ListenAndServe(":8080", nil))
	fmt.Println("Server started on port :8080")
}
