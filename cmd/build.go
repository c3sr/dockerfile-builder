package cmd

import (
  "archive/zip"
  "bytes"
  "encoding/base64"
  "fmt"
  "github.com/Unknwon/com"
  "github.com/rai-project/archive"
  //"io/ioutil"

  "github.com/c3sr/dockerfile-builder/server"
  "github.com/pkg/errors"
  "github.com/spf13/cobra"
)

var (
	imageName string
	archName string
)

func toZip(dec []byte) ([]byte, error) {
	_, err := zip.NewReader(bytes.NewReader(dec), int64(len(dec)))
	if err == nil {
		// already a zip
		return dec, err
	}

	buf := new(bytes.Buffer)

	wr := zip.NewWriter(buf)

	dc, err := wr.Create("Dockerfile")
	if err != nil {
		return nil, err
	}
	dc.Write(dec)
	wr.Flush()
	wr.Close()

	return buf.Bytes(), nil
}

// serveCmd represents the serve command
var buildCmd = &cobra.Command{
	Use:   "build <path to Dockerfile>",
	Short: "Build the docker image",
	Args:  cobra.MinimumNArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		dockerFilePath := args[0]

		if !com.IsDir(dockerFilePath) {
			fmt.Println("ERROR:: no directory found at path %v", dockerFilePath)
			return errors.Errorf("no directory found at path %v", dockerFilePath)
		}

    zippedReader, err := archive.Zip(dockerFilePath)
		if err != nil {
			fmt.Println("ERROR: unable to zip %v", dockerFilePath)
			return errors.Wrapf(err, "unable to zip %v", dockerFilePath)
		}
		buf := new(bytes.Buffer)
		buf.ReadFrom(zippedReader)
    zippedDockerFileBts := buf.Bytes()
		dockerFile := base64.StdEncoding.EncodeToString(zippedDockerFileBts)
		server.SetServerArch(archName)
		return server.BuildCmd(imageName, dockerFile)
	},
}

func init() {

	buildCmd.PersistentFlags().StringVarP(&imageName, "name", "n", getRandomName(10), "Name of the Docker image.")
	buildCmd.PersistentFlags().StringVarP(&archName, "arch", "", "ppc64le", "Architecture to create Docker image on.")
	RootCmd.AddCommand(buildCmd)
}
