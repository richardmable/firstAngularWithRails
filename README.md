##Angular With Rails Example Application

Following the Thinkster [tutorial](https://thinkster.io/angular-rails#introduction) on integrating Angular.js with Rails.

I've added plenty of comments so others can reference this if they wish to complete the tutorial or learn more about Angular as well.

General idea is that the Angular app is separate from the Rails app, and they communicate via HTTP requests.

Organize the Angular views and js files as features, rather than separating them out. This makes it easier to keep track of what is going on.

Some issues are that the application does not appear to reset the cookies if you logout, then immediately click log in again.

Also, the app does return JS errors as it seems to check if the user is logged in at every page, but the app functions as normal.