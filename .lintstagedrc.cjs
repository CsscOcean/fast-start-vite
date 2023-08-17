module.exports = {
  '*.{ts,tsx,vue}': 'eslint --cache --fix',
  '*.{css,scss,less,vue,html}': 'stylelint --fix',
  '*.{ts,tsx,css,scss,less,md,vue,json}': 'prettier --write',
};
