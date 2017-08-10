package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@CrossOrigin(origins = "*")
@Controller
public class GlobalController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String indexPage(){
        System.out.println("I be in here too");
        return "appclient/dist/index";
    }
}
