package main

import (
	"log"
	"net/http"
	"os"
	"slices"

	"github.com/gin-gonic/gin"
)

type Project struct {
	ID           string   `json:"id"`
	Name         string   `json:"name"`
	Image        string   `json:"image"`
	DateCreated  string   `json:"date_created"`
	DeployedLink string   `json:"deployed_link"`
	MadeWith     []string `json:"made_with"`
	GithubLink   string   `json:"github_link"`
	Description  string   `json:"description"`
}

var projects = []Project{
	{ID: "1", Name: "NATIONAL PARK PAL", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/yjahkfrbs60xfrbminnk.webp", DateCreated: "MAY.31.2022", DeployedLink: "https://hkassow.github.io/phase-1-parks-project/", GithubLink: "https://github.com/hkassow/phase-1-parks-project", MadeWith: []string{"Javascript", "HTML", "CSS"}, Description: "Your personal guide to most of the US National Parks & Landmarks!"},

	{ID: "2", Name: "KITTY COLLECTIVE", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/kr97kl3mnhouoyxnnmmc.webp", DateCreated: "JUN.20.2022", DeployedLink: "", GithubLink: "", MadeWith: []string{"Javascript", "React", "CSS"}, Description: "Browse a vast array of cats, select your favorites, and even add your own to the collection!"},

	{ID: "3", Name: "THE SHIP", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895131/gkjtl7kdmn9xbn9mluu6.webp", DateCreated: "JUL.11.2022", DeployedLink: "", GithubLink: "https://github.com/bro-san/the-SHIP-frontend", MadeWith: []string{"Javascript",
		"React",
		"Rails",
		"CSS"}, Description: "Create pairings of your favorite waifus and husbandos for everyone to see and comment on!"},

	{ID: "4", Name: "GAMESQUAD", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/ia775b2opgtekm4upkqe.webp", DateCreated: "", DeployedLink: "", GithubLink: "https://github.com/batmanonwheels/game_squad_frontend", MadeWith: []string{"Javascript",
		"React",
		"Rails",
		"MaterialUI"}, Description: "Create an account and write/read reviews for your favorite video games!"},

	{ID: "5", Name: "SYNESTHESIA", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895131/rrkxnbzjovfdoucohryi.webp", DateCreated: "AUG.9.2022", DeployedLink: "https://github.com/batmanonwheels/synesthesia", GithubLink: "", MadeWith: []string{"Javascript",
		"React",
		"Rails",
		"ChakraUI"}, Description: "View your recent Spotify listening history and write reviews for your favorite songs."},

	{ID: "6", Name: "INTERPOLL", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722888561/interpoll.webp", DateCreated: "", DeployedLink: "https://interpoll.vercel.app", GithubLink: "https://github.com/batmanonwheels/interpoll", MadeWith: []string{"Typescript", "Next.js", "TailwindCSS"}, Description: "Answer daily questions and view statistics for all polls."},

	{ID: "7", Name: "POLYGLOT", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722888561/polyglot.webp", DateCreated: "", DeployedLink: "https://polyglots.vercel.app", GithubLink: "https://github.com/batmanonwheels/polyglot", MadeWith: []string{"Typescript", "Next.js", "TailwindCSS"}, Description: "A mockup for a language learning app. Designed by Alan Kanaani"},

	{ID: "8", Name: "UHEARD", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1700528168/Screenshot_2023-11-20_at_7.54.06_PM_olcdnb.webp", DateCreated: "", DeployedLink: "https://uheard.vercel.app", GithubLink: "https://github.com/batmanonwheels/uheard", MadeWith: []string{"Typescript", "Next.js", "TailwindCSS"}, Description: "Recommend your favorite tracks and albums to your friends!"},

	{ID: "9", Name: "NEW FUN THINGS", Image: "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722613985/newfunthings_osqy6h.webp", DateCreated: "", DeployedLink: "", GithubLink: "https://github.com/batmanonwheels/new-fun-things", MadeWith: []string{"Typescript", "React", "TailwindCSS"}, Description: "View and purchase various 3d models, totally legit and legal!"},
}

func getProjects(c *gin.Context) {
	if projects[0].ID == "1" {
		slices.Reverse(projects)
	}

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

func main() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()

	router.LoadHTMLFiles("templates/index.html", "templates/components/projects.html", "templates/components/about.html", "templates/components/head.html", "templates/components/header.html", "templates/components/subheader.html")

	router.StaticFS("static", http.Dir("./static"))

	router.SetTrustedProxies(nil)

	//site routes
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.GET("/api/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "about.html", gin.H{})
	})

	//project API routes
	router.GET("/api/projects", getProjects)
	router.POST("/api/projects", createProject)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	if err := router.Run(":" + port); err != nil {
		log.Panicf("error: %s", err)
	}
}
