const { parse } = require('@babel/parser');

function toCommonjsPlugin({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path) {
        const name = path.node.specifiers[0].local.name;
        const _path = path.node.source.value;
        const code = `const ${name} = require('${_path}');`;

        path.replaceWith(parse(code));
      },
      ExportDefaultDeclaration(path) {
        const declaration = path.node.declaration;
        let code;

        if (t.isIdentifier(declaration)) {
          code = `module.exports = ${declaration.name};`;
        }
        else {
          const wrap = declaration.callee.name;
          const name = declaration.arguments[0].name;
          code = `module.exports = ${wrap}(${name});`;
        }

        path.replaceWith(parse(code));
      },
      ExportNamedDeclaration(path) {
        const name = path.node.specifiers[0].exported.name;
        const _path = path.node.source.value;
        const code = `exports.${name} = require('${_path}');`;

        path.replaceWith(parse(code));
      }
    }
  };
}

module.exports = { plugins: [toCommonjsPlugin] };