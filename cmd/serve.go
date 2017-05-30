package cmd

import (
	"fmt"
	"os"

	"github.com/rai-project/dockerfile-builder/server"
	"github.com/spf13/cobra"
)

const (
	DEFAULTPORT = "8088"
)

// serveCmd represents the serve command
var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Start the webserver",
	Run: func(cmd *cobra.Command, args []string) {
		port, found := os.LookupEnv("PORT")
		if !found {
			port = DEFAULTPORT
		}
		server.Start(fmt.Sprintf(":%s", port))
	},
}

func init() {
	RootCmd.AddCommand(serveCmd)
}
