module github.com/rai-project/dockerfile-builder

go 1.12

require (
	github.com/GeertJohan/go-sourcepath v0.0.0-20150925135350-83e8b8723a9b
	github.com/Unknwon/com v0.0.0-20151008135407-28b053d5a292
	github.com/armon/consul-api v0.0.0-20180202201655-eb2c6b5be1b6
	github.com/aws/aws-sdk-go v1.23.0
	github.com/cheekybits/genny v1.0.0
	github.com/coreos/etcd v3.3.13+incompatible
	github.com/coreos/go-semver v0.2.0
	github.com/davecgh/go-spew v1.1.1
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/dustin/go-humanize v1.0.0
	github.com/elazarl/go-bindata-assetfs v1.0.1
	github.com/facebookgo/stack v0.0.0-20160209184415-751773369052
	github.com/fatih/color v1.7.0
	github.com/fatih/structs v1.1.0
	github.com/fsnotify/fsnotify v1.4.7
	github.com/go-bindata/go-bindata v3.1.2+incompatible // indirect
	github.com/go-playground/locales v0.12.1
	github.com/go-playground/universal-translator v0.16.0
	github.com/gogo/protobuf v1.2.1
	github.com/golang/protobuf v1.3.2
	github.com/gorilla/websocket v1.4.0
	github.com/grpc-ecosystem/grpc-gateway v1.9.0 // indirect
	github.com/hashicorp/hcl v1.0.0
	github.com/improbable-eng/grpc-web v0.0.0-20181031170435-f683dbb3b587
	github.com/inconshreveable/mousetrap v1.0.0
	github.com/jmespath/go-jmespath v0.0.0-20180206201540-c2b33e8439af
	github.com/jpillora/backoff v0.0.0-20170918002102-8eab2debe79d
	github.com/json-iterator/go v1.1.7
	github.com/k0kubun/pp v3.0.1+incompatible
	github.com/konsorten/go-windows-terminal-sequences v1.0.2
	github.com/labstack/echo v3.3.10+incompatible
	github.com/labstack/gommon v0.2.9
	github.com/leodido/go-urn v1.1.0
	github.com/magiconair/properties v1.8.1
	github.com/mailru/easyjson v0.0.0-20190626092158-b2ccc519800e
	github.com/mattn/go-colorable v0.1.2
	github.com/mattn/go-isatty v0.0.8
	github.com/mattn/go-runewidth v0.0.4
	github.com/mitchellh/go-homedir v1.1.0
	github.com/mitchellh/mapstructure v1.1.2
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd
	github.com/modern-go/reflect2 v0.0.0-20180701023420-4b7aa43c6742
	github.com/pelletier/go-toml v1.4.0
	github.com/pkg/errors v0.8.1
	github.com/prometheus/client_golang v0.9.3 // indirect
	github.com/rai-project/acl v0.0.0-20181119122707-037e0eb4d746
	github.com/rai-project/aws v0.0.0-20190712145616-704f1310325d
	github.com/rai-project/broker v0.0.0-20190813183843-9cb7683ebb63
	github.com/rai-project/config v0.0.0-20190813184513-6c3229b03e81
	github.com/rai-project/context v0.0.0-20181119122706-fab459fa9005
	github.com/rai-project/godotenv v0.0.0-20180908223441-72ca456a35f4
	github.com/rai-project/logger v0.0.0-20190701163301-49978a80bf96
	github.com/rai-project/model v0.0.0-20190404224954-b8beba032796
	github.com/rai-project/pubsub v0.0.0-20190813184053-4a961d57a69c
	github.com/rai-project/serializer v0.0.0-20190607024037-6a71bde4dab7
	github.com/rai-project/store v0.0.0-20190813185744-01bcd25d0193
	github.com/rai-project/utils v0.0.0-20190605083036-addd4cf1893f
	github.com/rai-project/uuid v0.0.0-20181119122706-2a4c8b922cc6
	github.com/rai-project/vipertags v0.0.0-20190404224953-d63b0a674aa9
	github.com/rs/cors v1.7.0
	github.com/sirupsen/logrus v1.4.2
	github.com/spf13/afero v1.2.2
	github.com/spf13/cast v1.3.0
	github.com/spf13/cobra v0.0.0-20190805155617-b80588d523ec
	github.com/spf13/jwalterweatherman v1.1.0
	github.com/spf13/pflag v1.0.3
	github.com/spf13/viper v1.3.2
	github.com/streadway/amqp v0.0.0-20190404075320-75d898a42a94
	github.com/subosito/gotenv v1.2.0
	github.com/ugorji/go v1.1.4 // indirect
	github.com/valyala/bytebufferpool v1.0.0
	github.com/valyala/fasttemplate v1.0.1
	github.com/xordataexchange/crypt v0.0.3-0.20170626215501-b2862e3d0a77
	go.uber.org/atomic v1.4.0 // indirect
	go.uber.org/zap v1.10.0 // indirect
	golang.org/x/crypto v0.0.0-20190701094942-4def268fd1a4
	golang.org/x/net v0.0.0-20190813141303-74dc4d7220e7
	golang.org/x/sync v0.0.0-20190423024810-112230192c58
	golang.org/x/sys v0.0.0-20190813064441-fde4db37ae7a
	golang.org/x/text v0.3.2
	google.golang.org/genproto v0.0.0-20190801165951-fa694d86fc64
	google.golang.org/grpc v1.21.0
	gopkg.in/cheggaaa/pb.v1 v1.0.28
	gopkg.in/go-playground/validator.v9 v9.29.1
	gopkg.in/mgo.v2 v2.0.0-20180705113604-9856a29383ce
	gopkg.in/redis.v5 v5.2.9
	gopkg.in/yaml.v2 v2.2.2
)
