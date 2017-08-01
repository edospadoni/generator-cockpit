# <%= name %>

<%= description %>

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Development

Install all needed stuffs:
```
npm install -g grunt-cli bower
```

Run this to sync your local data into remote host path:
```
grunt sync:_USER_@_DOMAIN_:_PORT_:_FULL_PATH
```

For an easy sync you can use:
```
watch -n1 grunt sync:root@mydomain.com:2222:.local/share/cockpit/mycoolmodule/ --no-color
```

When you developing, sync also all the `bower_components` folder each time a new dependencies is installed, you can sync with:
```
grunt sync:_USER_@_DOMAIN_:_PORT_:_FULL_PATH:true
```
Like above:
```
grunt sync:root@mydomain.com:2222:.local/share/cockpit/mycoolmodule/:true
```

## Build
Run `grunt build` for building and minifiyng all stuff.