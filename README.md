# Simple Todo List

The Meteor Tutorial app.

Use it to share a single todo list with your friends. The list updates on everyone's screen in real time, and you can make tasks private if you don't want others to see them.

Learn how to build this app by following the [Meteor Tutorial](https://www.meteor.com/tutorials/react/creating-an-app).

Read more about building apps with Meteor in the [Meteor Guide](http://guide.meteor.com).

![screenshot](screenshot.png)


## create app
meteor create project
cd project
meteor

## install react components
meteor npm install --save react react-dom
meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data

## prop types (https://github.com/facebook/prop-types#prop-types)
npm install --save prop-types

## mongo db
meteor mongo
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });

## add acount manager
meteor add accounts-ui accounts-password

## security and publish
meteor remove autopublish
meteor remove insecure

## Bootstrap and JQuery
meteor add twbs:bootstrap
meteor add jquery

## ecma
meteor add ecmascript

## react router
meteor npm install --save react-router history

## Developer Notes
As Bootstrap 4 is throwing error on jQuery import, and a fix has yet been found, this project will use Bootstrap 3 technology for it's template.