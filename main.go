package main

import (
	_ "github.com/geckotronics/web/routers"
	"github.com/astaxie/beego"
)

func main() {
	//beego.Router("/",&routers.HomeRouter{});
	//beego.Router("/nosotros",&routers.NosotrosRouter{});
	//beego.Router("/",&routers.HomeRouter{});
	beego.Run()
}
