// full_server/controllers/AppController.js
/**
 * Contains the miscellaneous route handlers.
 * @author Ngozi Rob Agomuonso <https://github.com/Ng-RobGithub>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
