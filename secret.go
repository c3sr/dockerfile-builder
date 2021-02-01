package main

import "github.com/c3sr/config"

var AppSecret string

func init() {
	config.BeforeInit(func() {
		config.SetAppSecret(AppSecret)
	})
}
