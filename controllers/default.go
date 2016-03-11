package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "geckotronics.pe"
	c.Data["Email"] = "ventas@geckotronics.pe"
	c.TplName = "index.tpl"
}
