/*things not needed I guess
*/var express = require('express');
var app = express();
/**/

const puppeteer = require('puppeteer');

puppeteer.launch().then(function(browser) {
    browser.newPage().then(function(page) {
        page.goto('https://trello.com/b/dzRmQJgA/weeseg-sele%C3%A7%C3%A3o').then(function() {
            page.click('div.list-card-details').then(function(){
               page.click('div.checklist-items-list')
            });

            /*page.$eval('span.checklist-item-details-text', function(span) {
                return 'ACHEI';
            }).then(function(result) {
                console.info(result);
                browser.close();
            });

            /*page.$eval('span.checklist-item-details-text', function(span) {
                return span.innerText;
            }).then(function(result) {
                console.info(result);
                browser.close();
            });
            */
        });
    });
});

//things not needed I guess
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('NICE');
});