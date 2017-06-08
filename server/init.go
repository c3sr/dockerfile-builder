package server

import (
	"github.com/sirupsen/logrus"
	"github.com/rai-project/config"
	"github.com/rai-project/logger"
)

var (
	log *logrus.Entry
)

func init() {
	config.AfterInit(func() {
		log = logger.New().WithField("pkg", "dockerfile-build/server")
	})
}
