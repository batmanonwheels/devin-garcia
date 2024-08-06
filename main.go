package main

import (
	"embed"
	"fmt"
	"net/http"
	"slices"

	"github.com/gin-gonic/gin"
)

type Project struct {
	ID           string   `json:"id"`
	Name         string   `json:"name"`
	Images       []string `json:"images"`
	DateCreated  string   `json:"date_created"`
	DeployedLink string   `json:"deployed_link"`
	MadeWith     []string `json:"made_with"`
	GithubLink   string   `json:"github_link"`
	Description  string   `json:"description"`
}

var projects = []Project{
	{ID: "1", Name: "National Park Pal", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/yjahkfrbs60xfrbminnk.webp"}, DateCreated: "MAY.31.2022", DeployedLink: "https://hkassow.github.io/phase-1-parks-project/", GithubLink: "https://github.com/hkassow/phase-1-parks-project", MadeWith: []string{"javascript", "html5", "css3"}, Description: "Your personal guide to most of the US National Parks & Landmarks!"},

	{ID: "2", Name: "Kitty Collective", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/kr97kl3mnhouoyxnnmmc.webp"}, DateCreated: "JUN.20.2022", DeployedLink: "", GithubLink: "", MadeWith: []string{"javascript", "react", "html5", "css3"}, Description: "Browse a vast array of cats, select your favorites, and even add your own to the collection!"},

	{ID: "3", Name: "The Ship", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895131/gkjtl7kdmn9xbn9mluu6.webp"}, DateCreated: "JUL.11.2022", DeployedLink: "", GithubLink: "https://github.com/bro-san/the-SHIP-frontend", MadeWith: []string{"javascript",
		"react",
		"ruby",
		"rails",
		"postgresql",
		"css3"}, Description: "Create pairings of your favorite waifus and husbandos for everyone to see and comment on!"},

	{ID: "4", Name: "GameSquad", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895130/ia775b2opgtekm4upkqe.webp"}, DateCreated: "", DeployedLink: "", GithubLink: "https://github.com/batmanonwheels/game_squad_frontend", MadeWith: []string{"javascript",
		"react",
		"ruby",
		"rails",
		"postgresql",
		"materialui"}, Description: "Create an account and write/read reviews for your favorite video games!"},

	{ID: "5", Name: "Synesthesia", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1692895131/rrkxnbzjovfdoucohryi.webp"}, DateCreated: "AUG.9.2022", DeployedLink: "https://github.com/batmanonwheels/synesthesia", GithubLink: "", MadeWith: []string{"javascript",
		"react",
		"ruby",
		"rails",
		"postgresql",
		"chakra ui"}, Description: "View your recent Spotify listening history and write reviews for your favorite songs."},

	{ID: "6", Name: "Interpoll", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722888561/interpoll.webp"}, DateCreated: "", DeployedLink: "https://interpoll.vercel.app", GithubLink: "https://github.com/batmanonwheels/interpoll", MadeWith: []string{"typescript", "nextjs", "tailwindcss", "vercel"}, Description: "Answer daily questions and view statistics for all polls."},

	{ID: "7", Name: "Polyglot", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722888561/polyglot.webp"}, DateCreated: "", DeployedLink: "https://polyglots.vercel.app", GithubLink: "https://github.com/batmanonwheels/polyglot", MadeWith: []string{"typescript", "nextjs", "tailwindcss", "vercel"}, Description: "A mockup for a language learning app. Designed by Alan Kanaani"},

	{ID: "8", Name: "UHEARD", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1700528168/Screenshot_2023-11-20_at_7.54.06_PM_olcdnb.webp"}, DateCreated: "", DeployedLink: "https://uheard.vercel.app", GithubLink: "https://github.com/batmanonwheels/uheard", MadeWith: []string{"typescript", "nextjs", "tailwindcss", "supabase", "vercel"}, Description: "Recommend your favorite tracks and albums to your friends!"},

	{ID: "9", Name: "new fun things", Images: []string{"https://res.cloudinary.com/dmmn0gqaf/image/upload/v1722613985/newfunthings_osqy6h.webp"}, DateCreated: "", DeployedLink: "", GithubLink: "https://github.com/batmanonwheels/new-fun-things", MadeWith: []string{"typescript", "vite", "tailwindcss"}, Description: "View and purchase various 3d models, totally legit and legal!"},
}

func getProjects(c *gin.Context) {
	if projects[0].ID == "1" {
		slices.Reverse(projects)
	}

	c.HTML(http.StatusOK, "projects.html", gin.H{"projects": projects})
}

func getProject(c *gin.Context) {
	id := c.Param("id")

	for _, p := range projects {
		if p.ID == id {
			c.HTML(http.StatusOK, "project.html", p)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Project does not exist"})
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

// func updateProject(c *gin.Context) {
// 	id := c.Param("id")

// 	var updatedProject Project

// 	for _, p := range projects {
// 		if p.ID == id {
// 			return
// 		}
// 	}

// 	if err := c.BindJSON(&updatedProject); err != nil {
// 		return
// 	}

// 	projects = append(projects, updatedProject)
// 	c.IndentedJSON(http.StatusAccepted, updatedProject)
// }

// func deleteProject(c *gin.Context) {
// 	id := c.Param("id")

// 	var deletedProject Project

// 	for _, p := range projects {
// 		if p.ID == id {
// 			return
// 		}
// 	}

// 	c.IndentedJSON(http.StatusAccepted, deletedProject)
// }

//go:embed static/css
var static embed.FS

func main() {
	router := gin.Default()
	router.GET("/static/css/styles.css", gin.WrapH(http.FileServer(http.FS(static))))

	// router.LoadHTMLGlob("templates/*.html")
	router.LoadHTMLFiles("templates/about.html", "templates/index.html", "templates/project.html", "templates/projects.html", "templates/components/head.html", "templates/components/header.html")

	router.SetTrustedProxies(nil)

	//site routes
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.GET("/projects/:id", getProject)

	router.GET("/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "about.html", gin.H{})
	})

	//project API routes
	router.GET("/api/projects", getProjects)
	router.GET("/api/projects/:id", getProject)
	router.POST("/api/projects", createProject)
	// router.PATCH("/api/projects/:id", updateProject)
	// router.DELETE("/api/projects/:id", deleteProject)

	router.Run("localhost:8080")
	fmt.Println("Server started on port :8080")
}

// curl http://localhost:8080/projects \
//     --include \
//     --header "Content-Type: application/json" \
//     --request "POST" \
//     --data '{"id": "9", "name": "New Fun Things", "images": [""], "date_created" : "", "deployed_link" : "", "github_link": "https://github.com/batmanonwheels/uheard", "made_with": ["typescript", "react", "tailwindcss",  "vite"], "description": "Recommend your favorite tracks and albums to your friends!"},'
