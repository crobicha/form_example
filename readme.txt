Note: I will continue to update this guide as I am able to find time to work on it, too many projects going on simultaneously for me right now :-)

## Overview

This is a sample project that demonstrates fundamental [react-redux] (https://github.com/reactjs/react-redux) concepts.

Scaffolding and initial creation was done using a [Yeoman generator] (https://github.com/stylesuxx/generator-react-webpack-redux). This generator allows us to avoid manually adding much of the boilerplate code necessary for wiring of React-based classes.

For the front-end, the app uses a React implementation of [Material UI components] (https://material-ui-1dab0.firebaseapp.com), which is based off off Google's [Material Design] (https://material.io) specification. The Material UI components are implemented on all major platforms, which allows for a consistent user-experience across devices.

To summarize the basic flow, a few sample participants are added to the app by default to show the different states (Not Reviewed, Accepted, Rejected). When the user adds a new participant, or updates the status of an existing participant, an action is dispatched. Next, the ParticipantReducer handles this action by updating the internal state. After the state is updated, the components are re-rendered with the new state, and the UI reflects this. This unidirectional data flow is known as the [Flux architecture] (https://facebook.github.io/flux/docs/in-depth-overview.html), and is one of the central concepts in react-redux implementation


## Demo
To see a live demo of the app, visit [http://159.203.116.49/] (http://159.203.116.49/). This site is a simple droplet hosted by Digital Ocean that is configured with nginx. Spinning up more servers to connect (for example, adding a back-end API server) is made very simple, as containers can be added and removed in seconds.

To setup your own environment, you can follow these steps:

1. Clone the repo: `mkdir ~/repos; cd ~/repos; git clone https://github.com/crobicha/react_form_example`
1. Install dependencies `npm install`
2. Build app for deployment from source: `npm run dist`
3. Install nginx: `sudo apt-get install nginx`
4. Edit your nginx config file: `vim /etc/nginx/sites-available/default`
	- Modify the "root" property in the "server" block to point to `~/repos/react_form_example/dist`
5. Change directory owner: `chown -R www-data:www-data dist`

To deploy additional code changes, we would just need to pull the latest from the repo, and rebuild the "dist" directory

## Next Steps

The next step that is in progress is to add connection to a back-end API server, such as [Node.js] (https://nodejs.org/en/) or [Headless Drupal] (https://groups.drupal.org/headless-drupal). To make these network calls, I plan to use [Axios] (https://github.com/mzabriskie/axios), a "promise-based HTTP client". Integrating Axios with the React flow is simple, when the API response returns, we simply update the state and the app should reflect that new state automatically.

### Security
To secure this application, I envision a login system, with groups for researchers and participants of different permission levels. If participants are entering the information directly, they should only have access to view or edit data of themselves. For researchers, perhaps it makes sense to anonymize participant identifying information, to minimize risk of a data breach. Additionally, the API server should be behind a firewall, with only the webapp whitelisted. Rate limiting and temporary blacklists can be used to prevent brute-force attacks.

