package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

type PocketBaseRes struct {
	Items []Project `json:"items"`
}

type Project struct {
	ID           string   `json:"Id"`
	Name         string   `json:"Name"`
	Image        string   `json:"Image"`
	DeployedLink string   `json:"DeployedLink"`
	MadeWith     []string `json:"MadeWith"`
	GithubLink   string   `json:"GithubLink"`
	Description  string   `json:"Description"`
	Order        int      `json:"Order"`
}

var projects []Project

func getProjects(c *gin.Context) {
	url := "https://db.devingarcia.net/api/collections/projects/records?sort=-Order"

	res, err := http.Get(url)

	if err != nil {
		fmt.Println(err)
	}

	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)

	fmt.Println(res.Body)

	var projectResponse PocketBaseRes

	if err := json.Unmarshal(body, &projectResponse); err != nil {
		fmt.Println("Can't unmarshal json")
	}

	projects = projectResponse.Items

	c.HTML(http.StatusOK, "projects.html", gin.H{"projects": projects})

}

func createProject(c *gin.Context) {
	var newProject Project

	if err := c.BindJSON(&newProject); err != nil {
		c.IndentedJSON(http.StatusNotAcceptable, newProject)
		return
	}

	projects = append(projects, newProject)

	c.IndentedJSON(http.StatusCreated, newProject)
}

func spinDeployment() {
	url := "https://devingarcia.net/"

	res, err := http.Get(url)

	if err == nil {
		fmt.Println(res.Status)
	}
}

func main() {
	// gin.SetMode(gin.ReleaseMode)

	router := gin.Default()

	router.LoadHTMLFiles("templates/index.html", "templates/components/projects.html", "templates/components/about.html", "templates/components/head.html", "templates/components/header.html", "templates/components/subheader.html", "templates/components/player.html")

	router.StaticFS("static", http.Dir("./static"))

	router.SetTrustedProxies(nil)

	// site routes
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.GET("/api/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "about.html", gin.H{})
	})

	router.GET("/api/player", func(c *gin.Context) {
		c.HTML(http.StatusOK, "player.html", gin.H{})
	})

	// project API routes
	router.GET("/api/projects", getProjects)
	router.POST("/api/projects", createProject)

	go func() {
		for {
			spinDeployment()
			time.Sleep(600 * time.Second)
		}
	}()

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	if err := router.Run(":" + port); err != nil {
		log.Panicf("error: %s", err)
	}
}
