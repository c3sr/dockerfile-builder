package cmd

import (
  "bytes"
  "encoding/base64"
  "fmt"
  "github.com/Unknwon/com"
  "github.com/c3sr/dockerfile-builder/server"
  "github.com/pkg/errors"
  "github.com/rai-project/archive"
  "github.com/spf13/cobra"
)

var (
       dockerImageName string
       userName string
       password string
       arch string
)

// UploadCmd represents the upload command
var UploadCmd = &cobra.Command{
       Use:   "upload <path to Dockerfile> -n <Docker image name> -u <Docker Hub user ID> -p <Docker Hub password>",
       Short: "Build the docker image and upload to Docker Hub",
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
               server.SetServerArch(arch)
               return server.UploadCmd(dockerImageName, dockerFile, userName, password)
       },
}

func init() {

       UploadCmd.PersistentFlags().StringVarP(&dockerImageName, "name", "n", "", "Docker image name.")
       UploadCmd.PersistentFlags().StringVarP(&userName, "user", "u", "", "Docker Hub user ID.")
       UploadCmd.PersistentFlags().StringVarP(&password, "password", "p", "", "Docker Hub password.")
       UploadCmd.PersistentFlags().StringVarP(&arch, "arch", "", "ppc64le", "Architecture to create Docker image on.")
       UploadCmd.MarkPersistentFlagRequired("name")
       UploadCmd.MarkPersistentFlagRequired("user")
       UploadCmd.MarkPersistentFlagRequired("password")
       RootCmd.AddCommand(UploadCmd)
}
