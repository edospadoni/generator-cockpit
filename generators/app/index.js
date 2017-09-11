'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const replace = require("replace");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.blue('Cockpit module') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Cockpit module name (raw)',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Cockpit module description'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.name = this.props.name.toLowerCase().replace(/[\s-_.]+/g, "");
      this.description = this.props.description;
    });
  }

  writing() {
    mkdirp('app/images');
    mkdirp('app/scripts');
    mkdirp('app/scripts/controllers');
    mkdirp('app/scripts/directives');
    mkdirp('app/scripts/filters');
    mkdirp('app/scripts/services');
    mkdirp('app/styles');
    mkdirp('app/views');

    // main files
    this.fs.copyTpl(
      this.templatePath('_manifest.json'),
      this.destinationPath('manifest.json'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), {
        name: this.name
      }
    );
    this.fs.copy(
      this.templatePath('_Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.name,
        description: this.description
      }
    );
    this.fs.copy(
      this.templatePath('_.bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_.gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('_.jscsrc'),
      this.destinationPath('.jscsrc')
    );
    this.fs.copy(
      this.templatePath('_.jshintrc'),
      this.destinationPath('.jshintrc')
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), {
        name: this.name,
        description: this.description
      }
    );

    // images
    this.fs.copy(
      this.templatePath('_app/_images/_yeoman.png'),
      this.destinationPath('app/images/yeoman.png')
    );

    // scripts
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_app.js'),
      this.destinationPath('app/scripts/app.js'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_services/_moduleservice.js'),
      this.destinationPath('app/scripts/services/moduleservice.js'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_controllers/_main.js'),
      this.destinationPath('app/scripts/controllers/main.js'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_directives/_mydirective.js'),
      this.destinationPath('app/scripts/directives/mydirective.js'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_filters/_myfilter.js'),
      this.destinationPath('app/scripts/filters/myfilter.js'), {
        name: this.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_filters/_translate.js'),
      this.destinationPath('app/scripts/filters/translate.js'), {
        name: this.name
      }
    );

    // styles
    this.fs.copy(
      this.templatePath('_app/_styles/_main.css'),
      this.destinationPath('app/styles/main.css')
    );

    // views
    this.fs.copy(
      this.templatePath('_app/_views/_main.html'),
      this.destinationPath('app/views/main.html')
    );

    // others
    this.fs.copyTpl(
      this.templatePath('_app/_index.html'),
      this.destinationPath('app/index.html'), {
        name: this.name
      }
    );

    // cockpit stuff
    this.fs.copy(
      this.templatePath('_base1/_cockpit.js'),
      this.destinationPath('app/base1/cockpit.js')
    );
    this.fs.copy(
      this.templatePath('_base1/_jquery.js'),
      this.destinationPath('app/base1/jquery.js')
    );
    this.fs.copy(
      this.templatePath('_base1/_patternfly.css'),
      this.destinationPath('app/base1/patternfly.css')
    );
    this.fs.copy(
      this.templatePath('_base1/_fonts/_OpenSans-Regular-webfont.woff'),
      this.destinationPath('app/static/fonts/OpenSans-Regular-webfont.woff')
    );
    this.fs.copy(
      this.templatePath('_base1/_fonts/_OpenSans-Light-webfont.woff'),
      this.destinationPath('app/static/fonts/OpenSans-Light-webfont.woff')
    );
  }

  install() {
    this.installDependencies();
    replace({
      regex: "emptyAngularApp",
      replacement: this.name + 'AngularApp',
      paths: [this.destinationPath('Gruntfile.js')],
      recursive: true,
      silent: true,
    });
  }
};
